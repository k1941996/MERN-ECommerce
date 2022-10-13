const User = require("./../models/userModel");

const signIn = (req, res) => {
  const { firstName, username, lastName, password, email, contactNo } = req.body;
  const newUser = new User({
    firstName,
    lastName,
    username,
    password,
    email,
    contactNo,
  });

  newUser
    .save()
    .then((data) => {
      if (data) {
        console.log("data", data);
        res.status(200).json({ user: data });
      }
    })
    .catch((error) => {
      console.log(error.keyValue);
      const userDetails = Object.keys(error.keyValue)
        .map((f) => {
          return `${f} ${error.keyValue[f]}`;
        })
        .join(",");
      return res.status(400).json({ error: `${userDetails} already exists` });
    });
};

const signUp = (req,res) => {
  
};

module.exports = { signIn, signUp };
