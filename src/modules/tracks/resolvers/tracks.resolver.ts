export const tracksResolver = {
    Query: {
        tracks: (_: any, __: any, { dataSources }: any) =>
          dataSources.tracksService.getTracks(),
        track: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.tracksService.getTrack(id),
      },
}