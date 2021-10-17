const User = require("../models/userModel.js");

exports.postRegistration = function (req, res) {
    User.findOne({ email: req.body.email }, async function (err, foundUser) {
        if (err) {
            res.send(err);
        } else {
            if (foundUser == null) {
                const newUser = new User({ email: req.body.email });
                newUser.save();
                res.send(`You are registered for Auth Code! Go to <a href="/">homepage</a>`);
            } else {
                res.send(`Email already exists. Go to <a href="/">homepage</a>`);
            }
        }
    });
}

exports.postLogin = function (req, res) {
    console.log(req.body);
    res.send(`Logged in to Auth Code. Go to <a href="/">homepage</a>`);
}