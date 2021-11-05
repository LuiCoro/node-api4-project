const express = require('express')
const server = express()

server.use(express.json())

const Users = [
  {
    id: 1,
    name: 'Omi'
  },
  {
    id: 2,
    name: 'Lui'
  },
  {
    id: 3,
    name: 'Steve'
  },
  {
    id: 4,
    name: 'Bob'
  },
  {
    id: 5,
    name: 'Homer'
  },
]

const registeredUsers = [
  {
    id: 1,
    username: 'OmiSpace',
    password: 'SpaceMan98',
  },
  {
    id: 2,
    username: 'BobsBurgers',
    password: 'BurgersAreC00l',
  },
]

const loggedUsers = [
  {
    id: 1,
    username: 'OmiSpace',
    password: 'SpaceMan98',
  },
  {
    id: 2,
    username: 'BobsBurgers',
    password: 'BurgersAreC00l',
  },
]


server.get('/', (req, res) => {
  res.status(200).json(`Server is up and runnning`)
})

// GETS An Array Of Users
server.get('/api/users', (req, res) => {
  try {
    if (!Users) {
      res.status(404).json({message: 'User Not Found'})
    } else {
      res.status(200).json(Users)
    }
  } catch (error) {
    res.status(500).json({message: 'Error with server'})
  }
})

// GETS An Array Of Registered Users
server.get('/api/register', (req, res) => {
  try {
    if (!registeredUsers) {
      res.status(404).json({message: 'User can not be registered!'})
    } else {
      res.status(200).json(registeredUsers)
    }
  } catch (error) {
    res.status(500).json({message: 'Error with server'})
  }
})

// POSTS
server.post('/api/register', (req, res) => {
try {
  res.status(200).json(registeredUsers)
} catch (error) {
  res.status(500).json({message: 'Error with server'})
}
})



module.exports = server