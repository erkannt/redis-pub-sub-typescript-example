import express from 'express'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.send('Sub side is runnin.')
})

app.listen(8081)