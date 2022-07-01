export const artistsResolver = {
    Query: {
        artists: (_: any, __: any, { dataSources }: any) =>
          dataSources.artistsService.getArtists(),
        artist: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.artistsService.getArtist(id),
      },
}