const app = require('./app') // la aplicación Express real
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

/*
require('dotenv').config()
const express = require('express')
const app = express()
const Note = require('./models/note')
const cors = require('cors')
// const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

const requestLogger = (req, res, next) => {
  console.log('Method', req.method)
  console.log('Path', req.path)
  console.log('Body', req.body)
  console.log('---')
  next()
}

app.use(requestLogger)

// const password = process.argv[2]

// const url = `mongodb+srv://gerarji96:${password}@cluster0.zrd0myq.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

/*
mongoose.set('strictQuery', false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
*/

/*  let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/notes/:id', (req, res, next) => {
  Note.findById(req.params.id)
    .then(note => {
      if (note) {
        res.json(note)
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))

/*    const id = Number(req.params.id)
    // console.log(id)
    const note = notes.find(note => note.id === id)
    // const note = notes.find(note => {
    //   console.log(note.id, typeof note.id, id, typeof id, note.id === id)
    //   return note.id === id
    // })
    // console.log(note)

    if (note) {
      res.json(note)
    } else {
      res.status(404).end()
    }
})

app.delete('/api/notes/:id', (req, res, next) => {
  Note.findByIdAndDelete(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))

/*  const id = Number(req.params.id)
  notes = notes.filter(note => note.id !== id)

  res.status(204).end()


})

/*  const generateId = () => {
      const maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0
      return maxId + 1
    }


app.post('/api/notes', (req, res, next) => {
  const body = req.body

  if (!body.content) {
    return res.status(400).json({ error: 'Content missing' })
  }

  const note = new Note ({
    content: body.content,
    important: body.important || false,
  })

  note.save()
    .then(savedNote => {
      res.json(savedNote)
    })
    .catch(error => next(error))
})

app.put('/api/notes/:id', (req, res, next) => {
//  const body = req.body
  const { content, important } = req.body

  /*  const note = {
        content: body.content,
        important: body.important
      }


  Note.findByIdAndUpdate(req.params.id, { content, important }, { new: true, runValidators: true, context: 'query' })
    .then(updatedNote => {
      res.json(updatedNote)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
*/