const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
        books: () => books
    },
    Mutation: {
        addBooks: (_, args) => {
            books.push({ title: args.bookInput.title, author: args.bookInput.author })
            return books
        }
    }
}
module.exports = resolvers