# newrelic.aftershipdemo.com

### prerequsite
```
. NewRelic APM License Key
. Docker
. docker-compose
. Fill in the NewRelic license key in the docker-compose.yaml file

```

### start up
```
docker-compose up
```


### test distributed tracing
```
http://localhost:3001/url/orange
http://localhost:3001/url/banana
```
