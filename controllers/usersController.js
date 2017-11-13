const Users = require('../models').User;

const findAll = (req, res) => {
  Users.findAll()
  .then(usersData => {
    res.send(usersData)
  })
  .catch(error => {
    console.log(error);
    res.send(error)
  })
}

const create = (req, res) => {
  // console.log(req.body);
  // res.send(req.body)
  Users.create(req.body)
  .then(success => {
    res.send(success)
  })
  .catch(err => {
    res.send(err)
  })
}

const findOne = (req, res) => {
  Users.findOne({
    where : {
      username : req.params.username
    }
  })
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

const destroy = (req, res) => {
  Users.destroy({
    where : {
      username : req.params.username
    }
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

const edit = (req, res) => {
  Users.update(req.body, { where : {
    username : req.body.username
  }})
  .then(result => {
    res.send("success")
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  findAll,
  create,
  findOne,
  destroy,
  edit
};