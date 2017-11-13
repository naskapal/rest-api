const jwt = require('jsonwebtoken');
const isLogin = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, payload) => {
    err
    ? res.status(401).send({
      msg : "invalid credentials"
    })
    : req.headers.details = payload
    next()
  })
}

const isAdmin = (req, res, next) => {
  req.headers.details.access == 1
  ? next()
  : res.status(403).send({
    msg : "permission denied"
  })
}

const isOwner = (req, res, next) => {
  req.headers.details.username == req.params.username
  ? next()
  : res.status(403).send({
    msg : "permission denied"
  })
}

module.exports = {
  isLogin,
  isAdmin,
  isOwner
};
