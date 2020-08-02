const Query = {
  movies: async (_, {}, context) => {
    return context.prisma.movie.findMany({
      include: {
        collection: true,
      },
    });
  },
  collections: async (_, {}, context) => {
    // BECAUSE OF PRISMA DOESN'T SUPPORT AGGREGATE FUNCTION FOR COUNT WE WRITING OWN SQL QUERY
    const result = await context.prisma.queryRaw(
      `SELECT id, name, 
          (SELECT count(*) FROM public."Movie" 
          where public."Movie"."collectionId" = public."Collection".id)
          as "moviesCount"
       FROM public."Collection";`
    );
    console.log("result", result);

    return result;
  },
  collectionById: async (_, { id }, context) => {
    const list = await context.prisma.collection.findOne({
      where: { id },
      include: {
        movies: true,
      },
    });
    return list;
  },
};

module.exports = Query;
