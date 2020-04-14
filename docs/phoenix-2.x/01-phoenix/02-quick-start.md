---
id: phoenix-quick-start-2x 
title: 快速入门
---

## 环境准备

## 设置maven仓库

在用户目录下`.m2`设置`settings.xml`文件，内容如下:

```shell
<?xml version="1.0" encoding="UTF-8"?>

<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">

    <servers>
        <server>
            <id>public</id>
            <username>phoenix</username>
            <password>phoenix123</password>
        </server>
    </servers>

    <profiles>
        <profile>
            <id>kunlun</id>
            <repositories>
                <repository>
                    <id>public</id>
                    <url>https://artifact.iquantex.com/repository/public</url>
                    <releases> <enabled>true</enabled><updatePolicy>always</updatePolicy></releases> 
                    <snapshots> <enabled>true</enabled><updatePolicy>always</updatePolicy></snapshots>
                </repository>
            </repositories>
        </profile>
    </profiles>
    <activeProfiles>
        <activeProfile>kunlun</activeProfile>
    </activeProfiles>

</settings>

```


## 工程搭建

搭建phoenix工程十分容易，可以使用下述命令即可生成一个完整的phoenix的maven工程。其中 `DarchetypeVersion` 为phoenix的版本，`groupId`、`artifactId`、`version`为生成工程的定义。

```
mvn archetype:generate \
 -DarchetypeGroupId=com.iquantex \
 -DarchetypeArtifactId=phoenix-archetype \
 -DarchetypeVersion=2.1.2 \
 -DgroupId=com.example \
 -DartifactId=helloworld \
 -Dversion=1.0-SNAPSHOT \
 -DinteractiveMode=false 
```

生成成功之后，将会得到如下结构的maven项目。

```shell
└── helloworld
    ├──application
    ├──coreapi 
    ├──domain  
    ├──tools 
	├──pom.xml
```

## 模块介绍

Phoenix开发工程奔着模块自治的思想，把分为了三个子Module，依赖关系如下:
```shell
                   +----------------+
                   |   application  |
                   +-----+----+-----+
                         |    |
                 +-------+    +------+
                 |                   |
          +------v-----+     +-------v-------+
          |    domain  <-----+  coreapi      |
          +------+-----+     +-------+-------+
```

### application
应用的顶层模块，启动模块，入口模块，包括：

- SpringBoot启动类，启动配置等
- 用户交互层（Web、RESTFul API）

``` shell
├── pom.xml
└── src
    ├── main
    │   ├── java
    │   │   └── com.example
    │   │       ├── HelloworldApplication.java    # spring启动类
    │   │       ├── controller
    │   │       │   ├── HelloController.java      # 交互层类 
    │   │       └── runner
    │   │           └── Runner.java               # phoenix启动类
    │   └── resources
    │       ├── application.yaml                  # 配置文件
    │       ├── logback.xml                       # 日志配置
```

### coreapi
应用的消息定义模块，包括：
- command: 聚合根入口命令
- event: 聚合根处理后事件

```shell
├── pom.xml
└── src
    ├── main
    │   ├── java
    │   │   └── com.example
    │   │       ├── Hello.java     # 消息定义(命令和事件)
    │   │       └── description.md
    │   └── resources
    │   │       └── Hello.proto    # protobuf定义

```

### domain
phoenix业务领域核心模块，包括：
- 聚合根： 核心业务领域聚合根，处理`coreapi`中的命令并返回事件
- 聚合根测试：针对聚合根的完整测试
- 依赖服务： 聚合根计算过程中依赖的服务逻辑

``` shell
├── pom.xml
└── src
    ├── main
    │   ├── java
    │   │   └── com.example
    │   │     └── domain
    │   │         ├── entity                       # 聚合实体定义包
    │   │         │   ├── HelloAggregate.java      # 聚合根定义(特殊的实体)
    │   │         │   └── description.md          
    │   │         └── service
    │   │             └── description.md
    │   └── resources
    └── test
        ├── java.com.example
        │    └── domain
        │        └── HelloAggregateTest.java       # 聚合根测试类
```

## 运行测试

使用`mvn archetype`生成示例工程后可直接启动application模块下的`HelloworldApplication`验证工程是否正常构建

0. 需要向Phoenix[官方申请]()license，填入`application/src/main/resources/application.yml`的`quantex.phoenix.server.license`

1. 启动HelloworldApplication，服务正常启动

2. 调用接口测试，进行连通性测试
```shell
curl -X PUT http://127.0.0.1:8080/hello/h001
> success
```

3. 同时查看日志打印`Hello World Phoenix`

![show](../../assets/phoenix2.x/phoenix-lite/example-hello-log.png)