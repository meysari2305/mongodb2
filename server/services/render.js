const axios = require('axios');

exports.homeRoutes = (req, res) => {
  //make a get request to /api/users

  axios
    .get('http://localhost:5000/api/users')
    .then(function (response) {
      res.render('index.ejs', { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render('add_user.ejs');
};

exports.update_user = (req, res) => {
  axios
    .get('http://localhost:5000/api/users', { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render('update_user.ejs', { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
