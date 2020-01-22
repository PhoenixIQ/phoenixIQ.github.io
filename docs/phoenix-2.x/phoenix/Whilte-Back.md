
## 框架服务模型
Phoenix是一套（准）微服务开发框架。在应用系统架构方面，提供了包括客户端开发、服务端开发、消息通讯架构、服务端状态数据存储和恢复、计算层和消息层监控、服务端运维等架构方案。而在业务开发方面，Phoenix提供了一套领域驱动设计模式(DDD)的实现模型，业务开发中的领域模型定义以聚合根(Aggregate Root)的形式作为业务计算的基本单元，在整个业务计算的流程中，聚合根对象之间仅以消息(Message)作为数据交互接口。框架对聚合根对象的状态管理和多层次交互的实现进行了封装。

### 业务开发模型
* 聚合根 Aggregate Root
* 消息 Message
Phoenix框架封装了一套DDD实现方式，业务模型的划分和定义基于DDD领域模型，在框架中则是对应为一个聚合根(Aggregate Root)模型定义，其包含了该领域业务计算所需的上下文数据。一个领域模型可对应一个聚合根定义，在实际进行业务计算时，一个聚合根定义可生成不同实例，这些实例之间相互独立，有着独立的状态数据。而聚合根对象之间的数据交互则是通过消息(Message)，聚合根对象可以接收消息并对消息做出相应的处理，以更新自己的状态。聚合根是Phoenix框架业务和计算模型的最基本单元，它不仅是业务计算的载体和基本单位，也是框架进行计算调度的基本单位。框架在技术实现上使用Actor模型，每个Actor实例与一个聚合根对象对应，管理着聚合根对象的内存状态、消息收发处理和聚合根计算调度。


### 聚合根通信模型
Phoenix服务为有状态(Stateful)的内存计算(In-Memory)服务，有状态即业务的计算依赖于服务当前的状态，内存计算则是在进行业务计算时，其依赖的数据都已经预先加载到内存中，数据模型不依赖外部存储。对于具体业务模型而言，其数据模型不会直接映射外部存储（数据库）的数据模型，也就是说，这些数据模型的查询和修改，不依赖外部存储的数据模型，仅面向内存数据模型进行交互，这样便减少了因复杂的数据模型存储带来的性能影响。

内存计算为业务计算带来高性能，但同时也带来了服务数据可靠性的问题。为了保障Phoenix服务的状态能够可靠恢复，聚合根对象的所有状态变更都基于领域事件(DomainEvent)进行增量更新，所以聚合对象的状态可以通过重跑领域事件来恢复。储存这些领域事件的存储层即为EventStore，服务在运行期间将领域事件存储到EventStore中，如果某个服务节点发生宕机，则该节点可以在重启后从EventStore中读取相应的领域事件恢复出宕机前的状态，而这个过程即是EventSourcing。通过EventStore领域事件存储和EventSourcing状态恢复，我们在应对服务节点故障或聚合根对象数据失效时，有了可靠的恢复手段，从而保证了业务数据的可靠性。

另一方面，为了满足服务在高并发场景下的处理能力，框架借助Akka的Actor计算模型在线程级别上提供以聚合根对象为最小单位的并发粒度；同时基于Akka-Cluster和Akka-Sharding的实现，相同领域的Phoenix服务可以进行多节点集群部署，构建多活集群，集群中不同的聚合根对象均衡地分布在不同节点中，使得服务可以通过增加节点的方式对系统的处理能力进行横向扩展。

### 服务间通信模型
Phoenix架构中，业务计算以领域聚合根为基本单元，这些基本单元对应着实际业务的一个个实体对象，它们之间的数据交换通过相互发送消息进行。聚合根对象不仅需要和客户端进行数据交换，还要与其他领域的聚合对象进行数据交换，这些跨领域的聚合对象数据交互都通过消息队列来实现。目前Phoenix消息通讯层使用Kafka实现，每个领域服务有其绑定的Topic，领域服务之间进行消息发送时根据服务名和目标聚合对象的信息进行路由。

Phoenix框架中客户端和服务端的数据交互基于消息队列，并且框架为客户端提供了业务调用接口。当领域聚合根模型和消息定义好之后，客户端通过消息通讯层向服务端发送相应的业务请求消息即可触发业务服务计算。在完成计算后，客户端可接收该请求的处理结果（同样为消息形式），完成一个业务请求的远程调用。业务调用为异步消息驱动，客户端或服务端调用方可以在发起调用后处理后续任务，实现非阻塞异步调用。同时，客户端也支持对业务的同步调用，调用线程在等待业务处理结果时被阻塞，至到业务处理结果被返回或调用超时。

### 查询端通信模型
Phoenix服务的业务开发基于消息驱动和DDD模式，这使得Phoenix服务同时可以方便进行读写分离的设计。我们可以将业务服务区分为两种类型，一种为写端服务(Command Side Service)，亦可称为C端服务，该类型的服务可以负责主业务流程的状态数据计算和管理，这些服务的数据属于数据一致性要求范围内。另一种服务类型为读端服务(Query Side Service)，亦可成为Q端服务，该类型服务可以作为业务数据一致性要求外的查询服务或分析服务等，这些查询或分析事务不署于业务主流程的事务内，但依赖于相同的业务数据。而这些业务数据我们能够通过消费读取C端服务产生的消息或领域事件来构建，以此实现读写分离。

所以通过以上Q端的实现方式，当应用系统的C端服务构建完成后，我们可以很方便地以Q端服务的形式构建监控和分析服务。基于这种实现方式，Phoenix提供了一套消息层监控分析方案。在应用系统中部署一个消息持久化服务消费所有Topic队列的消息，该服务会将消费到的消息持久化到Elasticsearch存储中，随后，我们便可以使用Grafana连接上Elasticsearch存储，对消息进行监控和分析。系统中流转的消息反应着系统的运行状态，如果能合理监控和分析这些消息，应用系统将具备业务告警、业务分析和问题排查等强大的能力。