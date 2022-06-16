const jwt = require("jsonwebtoken");

const authenticate = async function (req, res, next) {
  //check the token in request header
  //validate this token

  try {



    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    //If no token is present in the request header return error
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });

    console.log(token);
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
      return res.status(400).send({ status: false, msg: "token is invalid" });

    next()

  } catch (error) {
    res.status(500).send({ msg: "Error", error: error.message })
  }


}

const authorise = function (req, res, next) {
  // comapre the logged in user's id and the id in request


  try {

    let token = req.headers["x-auth-token"]
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.status(401).send({ status: false, msg: "token must be present in the request header" })
    let decodedToken = jwt.verify(token, 'functionup-radon')

    if (!decodedToken) return res.status(401).send({ status: false, msg: "token is not valid" })


    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if (userToBeModified != userLoggedIn) return res.status(401).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

    next()


  }
   catch (error) {
    res.status(500).send({ msg: "Error", error: error.message })

  }


}




module.exports.authenticate = authenticate;
module.exports.authorise = authorise;