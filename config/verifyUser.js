const User = require("../models/User");
const DecodedToken = require("./verifyToken");
const verifyUser = async (requestedToken) => {
  DecodedToken(requestedToken);
};
module.exports = verifyUser;
