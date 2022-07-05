export const usersResolver = {
    Query: {
      user: (_: any, { id }: { id: string }, { dataSources }: any) =>
          dataSources.usersService.getUser(id)
      },

      Mutation: {
        registerUser: (parent: any, args: any, { dataSources }: any, context: any) => 
          dataSources.usersService.registerUser(parent, args, context),
     
        getJWT: (parent: any, args: any, { dataSources }: any, context: any) => 
           dataSources.usersService.getJWT(parent, args, context)
    },
  }