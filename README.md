# newrelic.aftershipdemo.com

### 准备清单

- 获取 New Relic APM License Key
- 安装 Docker https://docs.docker.com/install/ 
- 安装 docker-compose https://docs.docker.com/compose/install/
- 将 New Relic license key 填写到 docker-compose.yaml 文件的 NEW_RELIC_LICENSE_KEY 变量中


### Git clone
```
git clone git@github.com:AfterShip/newrelic.aftershipdemo.com.git
cd newrelic.aftershipdemo.com/
```


### 启动服务
```
docker-compose up
```


### 本地测试distributed tracing
访问

http://localhost:3001/url/orange

or

http://localhost:3001/url/banana
