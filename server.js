const express = require("express");
const { ApolloServer } = require("apollo-server");
require("dotenv").config();
const { connect } = require("./db/db");
const PORT = process.env.PORT || 5000;

const typeDefs = require("./typeDefs/typeDefs");
const resolvers = require("./resolvers/resolvers");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (req) => ({
    req,
  }),
});

connect();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log(
    `Server is listening to port ${PORT} on ${process.env.NODE_ENV} mode`
  );
});
