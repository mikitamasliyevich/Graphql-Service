export const tracksResolver = {
    Query: {
        tracks: (_: any, __: any, { dataSources }: any) =>
          dataSources.tracksService.getItems(),
        track: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.tracksService.getItem(id),
      },

      Mutation: {
        createTrack: (parent: any, args: any, { dataSources }: any) => 
          dataSources.tracksService.createItem(parent, args),
        updateTrack: ( parent: any, args: any, { dataSources }: any) => 
          dataSources.tracksService.updateItem(parent, args),
        deleteTrack: (parent: any, args: any, { dataSources }: any) => 
          dataSources.tracksService.deleteItem(parent, args),
      },

      Track: {
        id: ({ _id }: { _id: string }) => _id,
        bands: (
          { bandsIds  }: { bandsIds : Array<string> },
          _: any,
          { dataSources }: any
        ) => dataSources.bandsService.getItemsByIds(bandsIds),
        artists: (
          { artistsIds  }: { artistsIds : Array<string> },
          _: any,
          { dataSources }: any
        ) => dataSources.artistsService.getItemsByIds(artistsIds),
        genres: (
          { genresIds  }: { genresIds : Array<string> },
          _: any,
          { dataSources }: any
        ) => dataSources.genresService.getItemsByIds(genresIds),
      }
}