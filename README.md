# newrelic.aftershipdemo.com

### 准备清单
```
. 获取NewRelic APM License Key  登录到https://newrelic.com/注册免费账号，登录后可以在我的账户-"Account settings"中找到"License key"
. 安装Docker https://docs.docker.com/install/ 
. 安装docker-compose https://docs.docker.com/compose/install/
. 将NewRelic license key填写到docker-compose.yaml文件的NEW_RELIC_LICENSE_KEY变量中

```

### 启动服务
```
docker-compose up
```


### 本地测试distributed tracing
```
curl http://localhost:3001/url/orange
curl http://localhost:3001/url/banana
```
