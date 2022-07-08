import { RESTDataSource, RequestOptions }  from 'apollo-datasource-rest';

export class UsersService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
      }

      willSendRequest(request: RequestOptions) {
        request.headers.set("Authorization", ` Bearer ${this.context.token}`)
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
        return await this.post("/register", {...args.input})
      }
}