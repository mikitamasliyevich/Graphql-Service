export const usersResolver = {
    Query: {
      user: (_: any, 
        { id }: { id: string }, 
        { dataSources }: any) =>
          dataSources.usersService.getUser(id),
      jwt: (_: any,
        { email, password }: { email: string; password: string },
        { dataSources }: any) => 
        dataSources.usersService.getJWT(email, password),      
      },

      Mutation: {
      registerUser: (parent: any, args: any, { dataSources }: any) => 
          dataSources.usersService.registerUser(parent, args)
    },
    User: {
      id: ({ _id }: { _id: string }) => _id,
    },
  }