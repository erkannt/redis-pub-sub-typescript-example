# Minimal example of redis pub sub

To launch:

```
docker run --rm -d -p 127.0.0.1:6379:6379 redis
npm install
npm start
```

Now you can curl against localhost with a JSON body and see it being handled:

```
curl -X POST -H "Content-Type: application/json" -d '{"foo": "bar"}' localhost:8080
```

```
[sub] Subscribed to 1 channels.
[pub] Received: {"foo":"bar"}
[sub] Received message from user-data channel.
[sub] { foo: 'bar' }
```
