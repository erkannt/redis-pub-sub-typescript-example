import express from 'express'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.json({ msg: 'I hope this runs 😅' })
})

app.listen(8080)