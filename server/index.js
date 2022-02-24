const express = require('express')
const path = require('path')
const app = express()

app.get(`/`, (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

let students = []
app.post('/api/student', (req,res) => {
    let {name} = req.body
    name = name.trim()

    students.push(name)
    rollbar.log('student was added successfully', {author: 'johnny', type: 'manual', student: name})
    res.status(200).send(students)
})

app.use(rollbar.errorHandler())



// include and initialize the rollbar library with your access token
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'b60374cebe244bc8a5702cedee515c70',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
// record a generic message and send it to Rollbar
rollbar.log('Hello world!')








const port = process.env.PORT || 4545

app.listen(port, () => console.log(`listening on ${port}`))