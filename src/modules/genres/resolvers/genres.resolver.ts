export const genresResolver = {
    Query: {
        genres: (_: any, __: any, { dataSources }: any) =>
          dataSources.genresService.getGenres(),
        genre: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.genresService.getGenre(id),
      },

    Mutation: {
      createGenre: (parent: any, args: any, { dataSources }: any) => 
        dataSources.genresService.createGenre(parent, args),
      updateGenre: (parent: any, args: any, { dataSources }: any) => 
        dataSources.genresService.updateGenre(parent, args),
      deleteGenre: (parent: any, args: any, { dataSources }: any) => 
        dataSources.genresService.deleteGenre(parent, args),
    }
    
}

// query getGenre($id: ID!){
//   genre(id: $id){
//     name
//     description
//    }
// }


// mutation CreateReviewForEpisode($id: ID!){
//   deleteGenre(id: $id){
//     id
//    }
// }