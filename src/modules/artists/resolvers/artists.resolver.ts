export const artistsResolver = {
    Query: {
        artists: (_: any, __: any, { dataSources }: any) =>
          dataSources.artistsService.getItems(),
        artist: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.artistsService.getItem(id),
      },

      Mutation: {
        createArtist: (parent: any, args: any, { dataSources }: any) => 
          dataSources.artistsService.createItem(parent, args),
        updateArtist: ( parent: any, args: any, { dataSources }: any) => 
          dataSources.artistsService.updateItem(parent, args),
        deleteArtist: (parent: any, args: any, { dataSources }: any) => 
          dataSources.artistsService.deleteItem(parent, args),
      },

      Artist: {
        id: ({ _id }: { _id: string }) => _id,
        bands: (
          { bandsIds  }: { bandsIds : Array<string> },
          _: any,
          { dataSources }: any
        ) => dataSources.bandsService.getItemsByIds(bandsIds),
      }

}