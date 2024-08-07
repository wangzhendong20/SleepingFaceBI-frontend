# 基于Qwen2的智能数据处理与分析平台-SleepingFaceBi

## 功能
***
+ [x] 登录注册功能
+ [X] 分布式用户验证
+ [X] 网关鉴权
+ [x] 消息队列异步化处理
+ [x] AIGC-智能文本处理
+ + [x] 文本格式转换(支持txt,doc,docx,markdown)
+ [x] AIGC-智能数据分析与可视化(支持xlsx,csv)
+ [x] AIGC-智能数据处理
+ + [x] 智能格式转换
+ + [x] 智能数据清洗
+ + [x] 智能数据筛选
+ + [x] 智能数据表格
+ [x] 积分功能
+ [❌] SleepingFace小助手(waiting)
+ + [❌]大白话->公文

## 架构
- 服务模块：sleepingFaceBi-user（用户服务），sleepingFaceBi-chart（图表服务），sleepingFaceBi-text（文本服务），sleepingFaceBi-data（数据服务）
- 公共服务模块：sleepingFaceBi-common-ai(AI服务), sleepingFaceBi-common-commm(公共服务), sleepingFaceBi-common-mq(消息队列服务), sleepingFaceBi-common-mybatis
- 实体模块：sleeingFaceBi-api(实体模块)
- 网关模块：sleepingFaceBi-gateway(网关服务)

## 技术栈
***
### 后端
***
- Spring Boot （万能后端模板）
- spring cloud
- MySQL
- Mybatis-Plus及Mybatis X自动生成
- Redis + redisson 限流
- RabbitMq
- Dubbo
- Nacos
- Sa-token
- Swagger
- Easy Excel
- JDK线程池及异步化
### 前端
***
- React 18
- Ant Design Pro 5.x 脚手架
- Umi 4前端框架
- Ant Design 组件库
- Echarts 可视化库


## 前端启动
***
```
cd sleepingFaceBi-frontend
yarn install
yarn run dev
```
