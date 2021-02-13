const verifyToken = require("jsonwebtoken");

const DecodedToken = (req, requireAuth = true) => {
  const header = req.req.headers.authorization;
  if (header) {
    const token = header.replace("Bearer ", "");
    const decodedToken = verifyToken.verify(token, process.env.SECRET);
    return decodedToken;
  }
  if (requireAuth) {
    throw new Error("Please login!");
  }
  return null;
};
module.exports = DecodedToken;
