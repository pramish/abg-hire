const { ApolloServer } = require("apollo-server");
require("dotenv").config();
const { connect } = require("./db/db");
const PORT = process.env.PORT || 5000;

const typeDefs = require("./typeDefs/typeDefs");
const resolvers = require("./resolvers/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (req) => ({
    req,
  }),
});

connect();

server.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
