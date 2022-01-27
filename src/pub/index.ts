import express from 'express'
import Redis from 'ioredis'

const app = express()

const redis = new Redis()

app.use(express.json())

app.post('/', (req, res) => {
  console.log(`Received: ${JSON.stringify({...req.body})}`)
  redis.publish('user-data', JSON.stringify({...req.body}))
  return res.sendStatus(200)
})

app.listen(8080)