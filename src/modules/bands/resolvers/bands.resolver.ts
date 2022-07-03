export const bandsResolver = {
    Query: {
        bands: (_: any, __: any, { dataSources }: any) =>
          dataSources.bandsService.getBands(),
        band: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.bandsService.getBand(id),
      },
}