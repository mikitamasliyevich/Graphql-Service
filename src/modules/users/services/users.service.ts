import { RESTDataSource, RequestOptions }  from 'apollo-datasource-rest';

export class UsersService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
      }

      getUser(id: string) {
        return this.get(`/${id}`);
      }

      getJWT(email: string, password: string) {
        return this.post("/login", {
          email,
          password,
        });
      }

      async registerUser(parent: any, args: any) {
        const newUser = args.input
        const data = await this.post("/register", {...newUser})
        data.id = data._id
        return data
      }
}