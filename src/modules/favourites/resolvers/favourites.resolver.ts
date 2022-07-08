export const favouritesResolver = {
  Query: {
    favourites: (_: any, __: any, { dataSources }: any) =>
      dataSources.favouritesService.getFavourites(),
  },

  Mutation: {
  addTrackToFavourites: (
    _: any,
    { id }: { id: string },
    { dataSources }: any
  ) => dataSources.favouritesService.addData(id, "tracks"),
  addBandToFavourites: (
    _: any,
    { id }: { id: string },
    { dataSources }: any
  ) => dataSources.favouritesService.addData(id, "bands"),
  addArtistToFavourites: (
    _: any,
    { id }: { id: string },
    { dataSources }: any
  ) => dataSources.favouritesService.addData(id, "artists"),
  addGenreToFavourites: (
    _: any,
    { id }: { id: string },
    { dataSources }: any
  ) => dataSources.favouritesService.addData(id, "genres"),
  },

  Favourites: {
    id: ({ _id }: { _id: string }) => _id,
    bands: (
      { bandsIds  }: { bandsIds : Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.bandsService.getItemsByIds(bandsIds),
    genres: (
      { genresIds  }: { genresIds : Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.genresService.getItemsByIds(genresIds),
    artists: (
      { artistsIds  }: { artistsIds : Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.artistsService.getItemsByIds(artistsIds),
    tracks: (
      { tracksIds  }: { tracksIds : Array<string> },
      _: any,
      { dataSources }: any
    ) => dataSources.tracksService.getItemsByIds(tracksIds),
  }

  }