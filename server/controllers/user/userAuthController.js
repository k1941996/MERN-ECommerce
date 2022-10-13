const User = require("../../models/userModel");
const jwt = require("jsonwebtoken");

const signUp = (req, res) => {
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
        res.status(200).json({ message: "User Successfully Created" });
      }
    })
    .catch((error) => {
      const userDetails = Object.keys(error.keyValue)
        .map((f) => {
          return `${f} ${error.keyValue[f]}`;
        })
        .join(",");
      return res.status(400).json({ error: `${userDetails} already exists` });
    });
};

const signIn = (req, res) => {
  const { username, password } = req.body;
  const secret = process.env.JWT_SECRET_KEY;

  User.findOne({ $or: [{ username }, { email: username }] })
    .then((user) => {
      if (user) {
        if (user.authenticate(password)) {
          var token = jwt.sign({ _id: user._id }, secret, { expiresIn: "1h" });
          const { firstName, lastName, fullName, email, role, _id } = user;
          res.status(200).json({
            token,
            user: {
              _id,
              firstName,
              fullName,
              email,
              role,
              lastName,
            },
          });
        }
      } else {
        res.status(400).json({ error: "Invalid credentials" });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const requireSignIn = (req, res, next) => {
  const authToken = req.headers.authorization;
  const token = authToken.split(" ")[1];
  const secret = process.env.JWT_SECRET_KEY;
  jwt.verify(token, secret, (err, decoded) => {
    if(err){
      return res.status(401).json({message:"Not Authorized",err})
    }
    else {
      next();
    }
  
    
  });

  // jwt.decode()
};

module.exports = { signIn, signUp, requireSignIn };
