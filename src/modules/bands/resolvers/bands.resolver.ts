export const bandsResolver = {
    Query: {
        bands: (_: any, __: any, { dataSources }: any) =>
          dataSources.bandsService.getItems(),
        band: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.bandsService.getItem(id),
      },

      Mutation: {
        createBand: (parent: any, args: any, { dataSources }: any) => 
          dataSources.bandsService.createItem(parent, args),
        updateBand: ( parent: any, args: any, { dataSources }: any) => 
          dataSources.bandsService.updateItem(parent, args),
        deleteBand: (parent: any, args: any, { dataSources }: any) => 
          dataSources.bandsService.deleteItem(parent, args),
      },

      Band: {
        id: ({ _id }: { _id: string }) => _id,
        genres: (
          { genresIds  }: { genresIds : Array<string> },
          _: any,
          { dataSources }: any
        ) => dataSources.genresService.getItemsByIds(genresIds),
        members: (
          { members }: { members: any },
          _: any,
          { dataSources }: any
        ) =>
          Promise.all(
            members.map(({ artistsIds }: { artistsIds: string }) =>
              dataSources.artistsService.getItem(artistsIds)
            )
          ).then((res) =>
            res.map((item, index) => {
              return {
                firstName: item.firstName,
                instrument: members[index].instrument,
                years: members[index].years,
              };
            })
          ),
        
      }
}