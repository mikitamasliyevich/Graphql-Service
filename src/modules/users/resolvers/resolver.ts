export const usersResolver = {
    Query: {
        band: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.bandsService.getUser(id),
      },
}