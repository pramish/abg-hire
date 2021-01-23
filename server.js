const { ApolloServer, gql } = require('apollo-server')
const PORT = process.env.PORT || 5000

const typeDefs = require('./typeDefs/typeDefs')
const resolvers = require('./resolvers/resolvers')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})