const { gql } = require('apollo-server')
const typeDefs = gql`
    type Book{
        title:String
        author:String
    }
    input BookInput{
        title:String
        author:String
    }

    type Query{
        books:[Book]
    }
    type Mutation{
        addBooks(bookInput:BookInput):[Book]
    }
`

module.exports = typeDefs