import { RESTDataSource, RequestOptions }  from 'apollo-datasource-rest';

export class UsersService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
      }

      // willSendRequest(request: RequestOptions) {
      //   console.log('this.context.token', this.context.token)
      //   request.headers.set("authorization", `Bearer ${this.context.token}`);
      // }

      getUser(id: string) {
        return this.get(`/${id}`);
      }

      async registerUser(parent: any, args: any, context: any) {
        const newUser = args
        const data = await this.post("/register", {...newUser})
        data.id = data._id
        return data
      }
      
      async getJWT(parent: any, args: any, context: any) {
        const authorization = args
        const data = await this.post("/login", {...authorization})
        this.context.token = data.jwt
        process.env.jwt = data.jwt
        return data
      }
}