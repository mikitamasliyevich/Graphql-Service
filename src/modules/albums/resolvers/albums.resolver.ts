export const albumsResolver = {
    Query: {
        albums: (_: any, __: any, { dataSources }: any) =>
          dataSources.albumsService.getAlbums(),
        album: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.albumsService.getAlbum(id),
      },
}