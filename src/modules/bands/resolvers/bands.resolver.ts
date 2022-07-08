export const bandsResolver = {
    Query: {
        bands: (_: any, __: any, { dataSources }: any) =>
          dataSources.bandsService.getItems(),
        band: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.bandsService.getItem(id),
      },

      Mutation: {
        createBand: (parent: any, args: any, { dataSources }: any) => 
          dataSources.bandsService.createItem(parent, args),
        updateBand: ( parent: any, args: any, { dataSources }: any) => 
          dataSources.bandsService.updateItem(parent, args),
        deleteBand: (parent: any, args: any, { dataSources }: any) => 
          dataSources.bandsService.deleteItem(parent, args),
      },

      Album: {
        id: ({ _id }: { _id: string }) => _id,
        genres: (
          { genresIds  }: { genresIds : Array<string> },
          _: any,
          { dataSources }: any
        ) => dataSources.genresService.getItemsByIds(genresIds),
        
      }
}