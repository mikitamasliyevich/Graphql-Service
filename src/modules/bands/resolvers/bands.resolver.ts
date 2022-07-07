export const bandsResolver = {
    Query: {
        bands: (_: any, __: any, { dataSources }: any) =>
          dataSources.bandsService.getItems(),
        band: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.bandsService.getItem(id),
      },
}