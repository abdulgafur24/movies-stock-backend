const { PrismaClient } = require("@prisma/client");
const { ApolloServer } = require("apollo-server");
const prisma = new PrismaClient();

const typeDefs = require("./src/typedefs");
const Query = require("./src/Query");
const Mutation = require("./src/Mutation");

const { PORT = 8080 } = process.env;

const resolvers = {
  Query,
  Mutation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
});

server.listen(PORT);
