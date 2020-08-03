const { UserInputError } = require("apollo-server");

const Mutation = {
  createMovie: async (_, { name, collectionId }, context) => {
    try {
      const newMovie = await context.prisma.movie.create({
        data: {
          name,
          collection: {
            connect: { id: collectionId },
          },
        },
      });
      return newMovie;
    } catch (error) {
      return new UserInputError("Movie with this name already exists");
    }
  },
  removeMovie: async (_, { movieId }, context) => {
    try {
      const removeMovie = await context.prisma.movie.delete({
        where: {
          id: movieId,
        },
      });
      return removeMovie;
    } catch (error) {
      return new UserInputError(error);
    }
  },
  createCollection: async (_, { name }, context) => {
    try {
      const newCollection = await context.prisma.collection.create({
        data: {
          name,
        },
      });
      return newCollection;
    } catch (error) {
      return new UserInputError("Collection with this name already exists");
    }
  },
};

module.exports = Mutation;
