export const genresResolver = {
    Query: {
        genres: (_: any, __: any, { dataSources }: any) =>
          dataSources.genresService.getGenres(),
        genre: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.genresService.getGenre(id),
      },
}