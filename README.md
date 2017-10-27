# express-gateway-plugin-jwt
Simple jwt plugin for [Express Gateway](http://www.express-gateway.io/)

It shows all extension points available in the Express Gateway Plugin Engine 1.2.0

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
