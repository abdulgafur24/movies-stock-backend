const { gql } = require("apollo-server");

const typeDefs = gql`
  type Collection {
    id: Int
    name: String
    movies: [Movie]
    moviesCount: Int
  }

  type Movie {
    id: Int
    name: String
    collection: Collection
  }

  type Mutation {
    createMovie(name: String!, collectionId: Int): Movie
    removeMovie(movieId: Int!): Movie
    createCollection(name: String!): Collection
  }

  type Query {
    movies: [Movie]
    collections: [Collection]
    collectionById(id: Int!): Collection
  }
`;

module.exports = typeDefs;
