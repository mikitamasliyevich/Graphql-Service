export const genresResolver = {
    Query: {
        genres: (_: any, __: any, { dataSources }: any) =>
          dataSources.genresService.getItems(),
        genre: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.genresService.getItem(id),
      },

    Mutation: {
      createGenre: (parent: any, args: any, { dataSources }: any) => 
        dataSources.genresService.createItem(parent, args),
      updateGenre: ( parent: any, args: any, { dataSources }: any) => 
        dataSources.genresService.updateItem(parent, args),
      deleteGenre: (parent: any, args: any, { dataSources }: any) => 
        dataSources.genresService.deleteItem(parent, args),
    },

    Genre: {
      id: ({ _id }: { _id: string }) => _id,
    }
}