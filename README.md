# express-gateway-plugin-jwt
Simple JWT plugin for [Express Gateway](http://www.express-gateway.io/)

### Installing this plugin
```bash
$ eg plugin install renatoramiro/express-gateway-plugin-jwt
? Set value for secret: example
? Would you like to enable this plugin in system config? Yes
? Would you like to add new policies to gateway config? Yes
Plugin installed!
```

### Using:

```bash
system.config.yml
plugins:
  jwt:
    package: express-gateway-plugin-jwt
    secret: example
    
    
gateway.config.yml
policies:
  ...
  - jwt
 
pipelines:
  pipeline_0:
    ...
    policies:
      - jwt:
          - action:
              secret: "your super secret token"
```
