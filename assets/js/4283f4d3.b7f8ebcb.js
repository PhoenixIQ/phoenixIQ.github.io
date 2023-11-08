"use strict";(self.webpackChunkphoenixiq_github_io=self.webpackChunkphoenixiq_github_io||[]).push([[28284],{45160:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=t(85893),l=t(11151);const a={},o=void 0,i={id:"assets/file/phoenix-admin/message-es-model",title:"message-es-model",description:"",source:"@site/docs/assets/file/phoenix-admin/message-es-model.md",sourceDirName:"assets/file/phoenix-admin",slug:"/assets/file/phoenix-admin/message-es-model",permalink:"/docs/assets/file/phoenix-admin/message-es-model",draft:!1,unlisted:!1,editUrl:"https://github.com/PhoenixIQ/docs/assets/file/phoenix-admin/message-es-model.md",tags:[],version:"current",frontMatter:{}},r={},d=[];function u(n){const e={code:"code",pre:"pre",...(0,l.a)(),...n.components};return(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "annotations": {\n    "list": [\n      {\n        "builtIn": 1,\n        "datasource": "-- Grafana --",\n        "enable": true,\n        "hide": true,\n        "iconColor": "rgba(0, 211, 255, 1)",\n        "name": "Annotations & Alerts",\n        "type": "console"\n      }\n    ]\n  },\n  "editable": true,\n  "gnetId": null,\n  "graphTooltip": 0,\n  "id": 7,\n  "iteration": 1632818619700,\n  "links": [],\n  "panels": [\n    {\n      "datasource": "elastic",\n      "description": "",\n      "fieldConfig": {\n        "defaults": {\n          "custom": {\n            "align": null\n          },\n          "mappings": [],\n          "thresholds": {\n            "mode": "percentage",\n            "steps": [\n              {\n                "color": "green",\n                "value": null\n              }\n            ]\n          }\n        },\n        "overrides": []\n      },\n      "gridPos": {\n        "h": 7,\n        "w": 3,\n        "x": 0,\n        "y": 0\n      },\n      "id": 10,\n      "options": {\n        "colorMode": "value",\n        "graphMode": "area",\n        "justifyMode": "center",\n        "orientation": "auto",\n        "reduceOptions": {\n          "calcs": [\n            "sum"\n          ],\n          "fields": "",\n          "values": false\n        },\n        "textMode": "auto"\n      },\n      "pluginVersion": "7.1.1",\n      "targets": [\n        {\n          "alias": "total",\n          "bucketAggs": [\n            {\n              "field": "timestamp",\n              "id": "2",\n              "settings": {\n                "interval": "auto",\n                "min_doc_count": 0,\n                "trimEdges": 0\n              },\n              "type": "date_histogram"\n            }\n          ],\n          "metrics": [\n            {\n              "field": "select field",\n              "id": "1",\n              "type": "count"\n            }\n          ],\n          "query": "projectId.keyword: $projectId",\n          "refId": "C",\n          "timeField": "timestamp"\n        }\n      ],\n      "timeFrom": null,\n      "timeShift": null,\n      "title": "\u6d88\u606f\u603b\u6570",\n      "type": "stat"\n    },\n    {\n      "datasource": "elastic",\n      "description": "",\n      "fieldConfig": {\n        "defaults": {\n          "custom": {\n            "align": null\n          },\n          "mappings": [],\n          "thresholds": {\n            "mode": "absolute",\n            "steps": [\n              {\n                "color": "green",\n                "value": null\n              },\n              {\n                "color": "red",\n                "value": 1\n              }\n            ]\n          }\n        },\n        "overrides": []\n      },\n      "gridPos": {\n        "h": 7,\n        "w": 3,\n        "x": 3,\n        "y": 0\n      },\n      "id": 15,\n      "options": {\n        "colorMode": "value",\n        "graphMode": "area",\n        "justifyMode": "center",\n        "orientation": "auto",\n        "reduceOptions": {\n          "calcs": [\n            "sum"\n          ],\n          "fields": "",\n          "values": false\n        },\n        "textMode": "auto"\n      },\n      "pluginVersion": "7.1.1",\n      "targets": [\n        {\n          "alias": "ExceptionEvent",\n          "bucketAggs": [\n            {\n              "field": "timestamp",\n              "id": "2",\n              "settings": {\n                "interval": "auto",\n                "min_doc_count": 0,\n                "trimEdges": 0\n              },\n              "type": "date_histogram"\n            }\n          ],\n          "metrics": [\n            {\n              "field": "select field",\n              "id": "1",\n              "type": "count"\n            }\n          ],\n          "query": "payloadClassName.keyword: com.iquantex.phoenix.core.message.protobuf.Phoenix$ExceptionEvent && projectId.keyword: $projectId",\n          "refId": "A",\n          "timeField": "timestamp"\n        }\n      ],\n      "timeFrom": null,\n      "timeShift": null,\n      "title": "\u5f02\u5e38\u603b\u6570",\n      "type": "stat"\n    },\n    {\n      "columns": [],\n      "datasource": "elastic",\n      "fieldConfig": {\n        "defaults": {\n          "custom": {\n            "align": null\n          },\n          "mappings": [],\n          "thresholds": {\n            "mode": "absolute",\n            "steps": [\n              {\n                "color": "green",\n                "value": null\n              },\n              {\n                "color": "red",\n                "value": 80\n              }\n            ]\n          }\n        },\n        "overrides": []\n      },\n      "fontSize": "100%",\n      "gridPos": {\n        "h": 7,\n        "w": 4,\n        "x": 6,\n        "y": 0\n      },\n      "id": 12,\n      "options": {\n        "showHeader": true\n      },\n      "pageSize": null,\n      "pluginVersion": "7.0.3",\n      "showHeader": true,\n      "sort": {\n        "col": 0,\n        "desc": true\n      },\n      "styles": [\n        {\n          "alias": "Time",\n          "align": "auto",\n          "dateFormat": "YYYY-MM-DD HH:mm:ss",\n          "pattern": "Time",\n          "type": "date"\n        },\n        {\n          "alias": "",\n          "align": "auto",\n          "colorMode": null,\n          "colors": [\n            "rgba(245, 54, 54, 0.9)",\n            "rgba(237, 129, 40, 0.89)",\n            "rgba(50, 172, 45, 0.97)"\n          ],\n          "dateFormat": "YYYY-MM-DD HH:mm:ss",\n          "decimals": 2,\n          "mappingType": 1,\n          "pattern": "",\n          "thresholds": [],\n          "type": "number",\n          "unit": "short"\n        },\n        {\n          "alias": "",\n          "align": "left",\n          "colorMode": null,\n          "colors": [\n            "rgba(245, 54, 54, 0.9)",\n            "rgba(237, 129, 40, 0.89)",\n            "rgba(50, 172, 45, 0.97)"\n          ],\n          "decimals": 2,\n          "pattern": "/.*/",\n          "thresholds": [],\n          "type": "string",\n          "unit": "short"\n        }\n      ],\n      "targets": [\n        {\n          "bucketAggs": [\n            {\n              "field": "aggregateRootType.keyword",\n              "id": "2",\n              "settings": {\n                "min_doc_count": 1,\n                "order": "desc",\n                "orderBy": "_count",\n                "size": "0"\n              },\n              "type": "terms"\n            }\n          ],\n          "metrics": [\n            {\n              "field": "select field",\n              "id": "1",\n              "type": "count"\n            }\n          ],\n          "query": "projectId.keyword: $projectId",\n          "refId": "A",\n          "timeField": "timestamp"\n        }\n      ],\n      "timeFrom": null,\n      "timeShift": null,\n      "title": "\u805a\u5408\u5206\u5e03",\n      "transform": "table",\n      "type": "table-old"\n    },\n    {\n      "columns": [],\n      "datasource": "elastic",\n      "description": "",\n      "fieldConfig": {\n        "defaults": {\n          "custom": {\n            "align": null\n          },\n          "mappings": [],\n          "thresholds": {\n            "mode": "absolute",\n            "steps": [\n              {\n                "color": "green",\n                "value": null\n              },\n              {\n                "color": "red",\n                "value": 80\n              }\n            ]\n          }\n        },\n        "overrides": [\n          {\n            "matcher": {\n              "id": "byName",\n              "options": "payloadClassName.keyword"\n            },\n            "properties": [\n              {\n                "id": "custom.width",\n                "value": 300\n              }\n            ]\n          }\n        ]\n      },\n      "fontSize": "100%",\n      "gridPos": {\n        "h": 7,\n        "w": 9,\n        "x": 10,\n        "y": 0\n      },\n      "id": 14,\n      "options": {\n        "showHeader": true,\n        "sortBy": []\n      },\n      "pageSize": null,\n      "pluginVersion": "7.0.3",\n      "showHeader": true,\n      "sort": {\n        "col": null,\n        "desc": false\n      },\n      "styles": [\n        {\n          "alias": "Time",\n          "align": "auto",\n          "dateFormat": "YYYY-MM-DD HH:mm:ss",\n          "pattern": "Time",\n          "type": "date"\n        },\n        {\n          "alias": "",\n          "align": "auto",\n          "colorMode": null,\n          "colors": [\n            "rgba(245, 54, 54, 0.9)",\n            "rgba(237, 129, 40, 0.89)",\n            "rgba(50, 172, 45, 0.97)"\n          ],\n          "dateFormat": "YYYY-MM-DD HH:mm:ss",\n          "decimals": 2,\n          "mappingType": 1,\n          "pattern": "",\n          "thresholds": [],\n          "type": "number",\n          "unit": "short"\n        },\n        {\n          "alias": "",\n          "align": "left",\n          "colorMode": null,\n          "colors": [\n            "rgba(245, 54, 54, 0.9)",\n            "rgba(237, 129, 40, 0.89)",\n            "rgba(50, 172, 45, 0.97)"\n          ],\n          "decimals": 2,\n          "pattern": "/.*/",\n          "sanitize": false,\n          "thresholds": [],\n          "type": "string",\n          "unit": "short"\n        }\n      ],\n      "targets": [\n        {\n          "alias": "message name",\n          "bucketAggs": [\n            {\n              "field": "payloadClassName.keyword",\n              "id": "2",\n              "settings": {\n                "min_doc_count": 1,\n                "order": "desc",\n                "orderBy": "_count",\n                "size": "0"\n              },\n              "type": "terms"\n            }\n          ],\n          "metrics": [\n            {\n              "field": "select field",\n              "id": "1",\n              "type": "count"\n            }\n          ],\n          "query": "projectId.keyword: $projectId",\n          "refId": "A",\n          "timeField": "timestamp"\n        }\n      ],\n      "timeFrom": null,\n      "timeShift": null,\n      "title": "\u6d88\u606f\u5206\u5e03",\n      "transform": "table",\n      "type": "table-old"\n    },\n    {\n      "columns": [],\n      "datasource": "elastic",\n      "fieldConfig": {\n        "defaults": {\n          "custom": {\n            "align": null\n          },\n          "mappings": [],\n          "thresholds": {\n            "mode": "absolute",\n            "steps": [\n              {\n                "color": "green",\n                "value": null\n              },\n              {\n                "color": "red",\n                "value": 80\n              }\n            ]\n          }\n        },\n        "overrides": []\n      },\n      "fontSize": "100%",\n      "gridPos": {\n        "h": 7,\n        "w": 5,\n        "x": 19,\n        "y": 0\n      },\n      "id": 17,\n      "options": {\n        "showHeader": true\n      },\n      "pageSize": null,\n      "pluginVersion": "7.0.3",\n      "showHeader": true,\n      "sort": {\n        "col": 0,\n        "desc": true\n      },\n      "styles": [\n        {\n          "alias": "Time",\n          "align": "left",\n          "dateFormat": "YYYY-MM-DD HH:mm:ss",\n          "pattern": "Time",\n          "type": "date"\n        },\n        {\n          "alias": "",\n          "align": "left",\n          "colorMode": null,\n          "colors": [\n            "rgba(245, 54, 54, 0.9)",\n            "rgba(237, 129, 40, 0.89)",\n            "rgba(50, 172, 45, 0.97)"\n          ],\n          "dateFormat": "YYYY-MM-DD HH:mm:ss",\n          "decimals": 2,\n          "mappingType": 1,\n          "pattern": "Count",\n          "thresholds": [],\n          "type": "string",\n          "unit": "short"\n        },\n        {\n          "alias": "",\n          "align": "left",\n          "colorMode": null,\n          "colors": [\n            "rgba(245, 54, 54, 0.9)",\n            "rgba(237, 129, 40, 0.89)",\n            "rgba(50, 172, 45, 0.97)"\n          ],\n          "dateFormat": "YYYY-MM-DD HH:mm:ss",\n          "decimals": 2,\n          "mappingType": 1,\n          "pattern": "allMetaData.sourceIP.keyword",\n          "thresholds": [],\n          "type": "string",\n          "unit": "short"\n        }\n      ],\n      "targets": [\n        {\n          "alias": "node list",\n          "bucketAggs": [\n            {\n              "field": "allMetaData.sourceIP.keyword",\n              "id": "2",\n              "settings": {\n                "min_doc_count": 1,\n                "order": "desc",\n                "orderBy": "_count",\n                "size": "10"\n              },\n              "type": "terms"\n            }\n          ],\n          "metrics": [\n            {\n              "field": "select metric",\n              "id": "1",\n              "meta": {},\n              "pipelineAgg": "select metric",\n              "settings": {},\n              "type": "count"\n            }\n          ],\n          "query": "projectId.keyword: $projectId",\n          "refId": "A",\n          "timeField": "timestamp"\n        }\n      ],\n      "timeFrom": null,\n      "timeShift": null,\n      "title": "\u8282\u70b9\u5217\u8868",\n      "transform": "table",\n      "type": "table-old"\n    },\n    {\n      "aliasColors": {},\n      "bars": true,\n      "dashLength": 10,\n      "dashes": false,\n      "datasource": "elastic",\n      "fieldConfig": {\n        "defaults": {\n          "custom": {}\n        },\n        "overrides": []\n      },\n      "fill": 1,\n      "fillGradient": 0,\n      "gridPos": {\n        "h": 9,\n        "w": 24,\n        "x": 0,\n        "y": 7\n      },\n      "hiddenSeries": false,\n      "id": 6,\n      "legend": {\n        "avg": false,\n        "current": false,\n        "max": false,\n        "min": false,\n        "show": true,\n        "total": false,\n        "values": false\n      },\n      "lines": true,\n      "linewidth": 1,\n      "nullPointMode": "null",\n      "options": {\n        "dataLinks": []\n      },\n      "percentage": false,\n      "pluginVersion": "7.1.1",\n      "pointradius": 2,\n      "points": false,\n      "renderer": "flot",\n      "seriesOverrides": [],\n      "spaceLength": 10,\n      "stack": false,\n      "steppedLine": false,\n      "targets": [\n        {\n          "alias": "message",\n          "bucketAggs": [\n            {\n              "field": "timestamp",\n              "id": "2",\n              "settings": {\n                "interval": "auto",\n                "min_doc_count": "0",\n                "offset": "",\n                "trimEdges": 0\n              },\n              "type": "date_histogram"\n            }\n          ],\n          "metrics": [\n            {\n              "field": "select field",\n              "id": "1",\n              "type": "count"\n            }\n          ],\n          "query": "projectId.keyword: $projectId",\n          "refId": "A",\n          "timeField": "timestamp"\n        },\n        {\n          "alias": "exception",\n          "bucketAggs": [\n            {\n              "field": "timestamp",\n              "id": "2",\n              "settings": {\n                "interval": "auto",\n                "min_doc_count": 0,\n                "trimEdges": 0\n              },\n              "type": "date_histogram"\n            }\n          ],\n          "metrics": [\n            {\n              "field": "select field",\n              "id": "1",\n              "type": "count"\n            }\n          ],\n          "query": "payloadClassName.keyword: com.iquantex.phoenix.core.message.protobuf.Phoenix$ExceptionEvent && projectId.keyword: $projectId",\n          "refId": "B",\n          "timeField": "timestamp"\n        }\n      ],\n      "thresholds": [],\n      "timeFrom": null,\n      "timeRegions": [],\n      "timeShift": null,\n      "title": "\u6d88\u606f\u6570\u91cf",\n      "tooltip": {\n        "shared": true,\n        "sort": 0,\n        "value_type": "individual"\n      },\n      "type": "graph",\n      "xaxis": {\n        "buckets": null,\n        "mode": "time",\n        "name": null,\n        "show": true,\n        "values": []\n      },\n      "yaxes": [\n        {\n          "format": "short",\n          "label": null,\n          "logBase": 1,\n          "max": null,\n          "min": null,\n          "show": true\n        },\n        {\n          "format": "short",\n          "label": null,\n          "logBase": 1,\n          "max": null,\n          "min": null,\n          "show": true\n        }\n      ],\n      "yaxis": {\n        "align": false,\n        "alignLevel": null\n      }\n    },\n    {\n      "columns": [\n        {\n          "text": "timestamp",\n          "value": "timestamp"\n        },\n        {\n          "text": "retCode",\n          "value": "retCode"\n        },\n        {\n          "text": "transId",\n          "value": "transId"\n        },\n        {\n          "text": "subTransId",\n          "value": "subTransId"\n        },\n        {\n          "text": "parentMsgId",\n          "value": "parentMsgId"\n        },\n        {\n          "text": "msgId",\n          "value": "msgId"\n        },\n        {\n          "text": "idempotentId",\n          "value": "idempotentId"\n        },\n        {\n          "text": "payloadClassName",\n          "value": "payloadClassName"\n        },\n        {\n          "text": "payload",\n          "value": "payload"\n        }\n      ],\n      "datasource": "elastic",\n      "description": "",\n      "fieldConfig": {\n        "defaults": {\n          "custom": {\n            "align": null\n          },\n          "mappings": [],\n          "thresholds": {\n            "mode": "absolute",\n            "steps": [\n              {\n                "color": "green",\n                "value": null\n              },\n              {\n                "color": "red",\n                "value": 80\n              }\n            ]\n          }\n        },\n        "overrides": []\n      },\n      "fontSize": "80%",\n      "gridPos": {\n        "h": 10,\n        "w": 24,\n        "x": 0,\n        "y": 16\n      },\n      "id": 4,\n      "options": {\n        "showHeader": true\n      },\n      "pageSize": null,\n      "pluginVersion": "7.1.1",\n      "showHeader": true,\n      "sort": {\n        "col": 8,\n        "desc": true\n      },\n      "styles": [\n        {\n          "alias": "timestamp",\n          "align": "auto",\n          "dateFormat": "YYYY-MM-DD HH:mm:ss.SSS",\n          "pattern": "timestamp",\n          "type": "date"\n        },\n        {\n          "alias": "",\n          "align": "left",\n          "colorMode": null,\n          "colors": [\n            "rgba(245, 54, 54, 0.9)",\n            "rgba(237, 129, 40, 0.89)",\n            "rgba(50, 172, 45, 0.97)"\n          ],\n          "dateFormat": "YYYY-MM-DD HH:mm:ss",\n          "decimals": 2,\n          "mappingType": 1,\n          "pattern": "/.*/",\n          "preserveFormat": false,\n          "sanitize": false,\n          "thresholds": [],\n          "type": "string",\n          "unit": "short"\n        },\n        {\n          "alias": "",\n          "align": "right",\n          "colorMode": null,\n          "colors": [\n            "rgba(245, 54, 54, 0.9)",\n            "rgba(237, 129, 40, 0.89)",\n            "rgba(50, 172, 45, 0.97)"\n          ],\n          "decimals": 2,\n          "pattern": "/.*/",\n          "thresholds": [],\n          "type": "number",\n          "unit": "short"\n        }\n      ],\n      "targets": [\n        {\n          "alias": "msg_list",\n          "bucketAggs": [],\n          "metrics": [\n            {\n              "field": "select field",\n              "id": "1",\n              "meta": {},\n              "settings": {\n                "size": 500\n              },\n              "type": "raw_document"\n            }\n          ],\n          "query": "projectId.keyword: $projectId",\n          "refId": "A",\n          "timeField": "timestamp"\n        }\n      ],\n      "timeFrom": null,\n      "timeShift": null,\n      "title": "\u6d88\u606f",\n      "transform": "json",\n      "type": "table-old"\n    },\n    {\n      "datasource": "elastic",\n      "fieldConfig": {\n        "defaults": {\n          "custom": {\n            "align": null\n          },\n          "mappings": [],\n          "thresholds": {\n            "mode": "absolute",\n            "steps": [\n              {\n                "color": "green",\n                "value": null\n              },\n              {\n                "color": "red",\n                "value": 80\n              }\n            ]\n          }\n        },\n        "overrides": []\n      },\n      "gridPos": {\n        "h": 12,\n        "w": 24,\n        "x": 0,\n        "y": 26\n      },\n      "id": 2,\n      "options": {\n        "showHeader": false\n      },\n      "pluginVersion": "7.1.1",\n      "targets": [\n        {\n          "bucketAggs": [],\n          "metrics": [\n            {\n              "field": "select field",\n              "id": "1",\n              "meta": {},\n              "settings": {\n                "size": 500\n              },\n              "type": "raw_document"\n            }\n          ],\n          "query": "projectId.keyword: $projectId",\n          "refId": "A",\n          "timeField": "timestamp"\n        }\n      ],\n      "timeFrom": null,\n      "timeShift": null,\n      "title": "\u6d88\u606f\u539f\u59cb\u65e5\u5fd7",\n      "type": "table"\n    }\n  ],\n  "refresh": "10s",\n  "schemaVersion": 26,\n  "style": "dark",\n  "tags": [\n    "Phoenix"\n  ],\n  "templating": {\n    "list": [\n      {\n        "allValue": null,\n        "current": {\n          "isNone": true,\n          "selected": false,\n          "text": "None",\n          "value": ""\n        },\n        "datasource": "elastic",\n        "definition": "{\\"find\\": \\"terms\\", \\"field\\": \\"projectId.keyword\\", \\"size\\": 500}",\n        "hide": 0,\n        "includeAll": false,\n        "label": "projectId",\n        "multi": false,\n        "name": "projectId",\n        "options": [],\n        "query": "{\\"find\\": \\"terms\\", \\"field\\": \\"projectId.keyword\\", \\"size\\": 500}",\n        "refresh": 2,\n        "regex": "",\n        "skipUrlSync": false,\n        "sort": 0,\n        "tagValuesQuery": "",\n        "tags": [],\n        "tagsQuery": "",\n        "type": "query",\n        "useTags": false\n      },\n      {\n        "datasource": "elastic",\n        "filters": [],\n        "hide": 0,\n        "label": "Filter",\n        "name": "Filter",\n        "skipUrlSync": false,\n        "type": "adhoc"\n      }\n    ]\n  },\n  "time": {\n    "from": "now-5m",\n    "to": "now"\n  },\n  "timepicker": {\n    "refresh_intervals": [\n      "10s",\n      "30s",\n      "1m",\n      "5m",\n      "15m",\n      "30m",\n      "1h",\n      "2h",\n      "1d"\n    ]\n  },\n  "timezone": "",\n  "title": "05 phoenix message elasticsearch",\n  "uid": "IhCj2nNGk12",\n  "version": 1\n}\n'})})}function m(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>o});var s=t(67294);const l={},a=s.createContext(l);function o(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);