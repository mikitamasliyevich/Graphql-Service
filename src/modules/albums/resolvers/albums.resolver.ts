export const albumsResolver = {
    Query: {
        albums: (_: any, __: any, { dataSources }: any) =>
          dataSources.albumsService.getItems(),
        album: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.albumsService.getItem(id),
      },

    Mutation: {
        createAlbum: (parent: any, args: any, { dataSources }: any) => 
          dataSources.albumsService.createItem(parent, args),
        updateAlbum: ( parent: any, args: any, { dataSources }: any) => 
          dataSources.albumsService.updateItem(parent, args),
        deleteAlbum: (parent: any, args: any, { dataSources }: any) => 
          dataSources.albumsService.deleteItem(parent, args),
      },

    Album: {
      id: ({ _id }: { _id: string }) => _id,
      artists: (
        { artistsIds  }: { artistsIds : Array<string> },
        _: any,
        { dataSources }: any
      ) => dataSources.artistsService.getItemsByIds(artistsIds),
      bands: (
        { bandsIds  }: { bandsIds : Array<string> },
        _: any,
        { dataSources }: any
      ) => dataSources.bandsService.getItemsByIds(bandsIds),
      tracks: (
        { tracksIds  }: { tracksIds : Array<string> },
        _: any,
        { dataSources }: any
      ) => dataSources.tracksService.getItemsByIds(tracksIds),
      genres: (
      { genresIds  }: { genresIds : Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.genresService.getItemsByIds(genresIds),
  },
}