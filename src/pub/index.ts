import express from 'express'
import Redis from 'ioredis'

const app = express()

const redis = new Redis()

app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
  redis.publish('user-data', JSON.stringify({...req.body}))
  return res.sendStatus(200)
})

app.listen(8080)