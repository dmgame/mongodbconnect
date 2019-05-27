const express = require('express');
const mongoose = require('mongoose');
const { createServer } = require('http');
const app = express();
const port = 3000;

mongoose
  .connect('YOUR_CONNECT_URL', {
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log(err));

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model('Users', UsersSchema);

app.get('/', (req, res) => {
  // Users.create({
  //   name: 'Denis',
  //   email: 'test@test.com',
  // })
  //   .then(user => res.send(user))
  //   .catch(err => res.send(err));
  Users.find()
    .then(users => res.send(users))
    .catch(err => res.send(err));
});

const server = createServer(app);
server.listen(port, () => console.log(`server is up. port: ${port}`));
