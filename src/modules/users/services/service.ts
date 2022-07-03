import { RESTDataSource }  from 'apollo-datasource-rest';

export class UsersService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
      }

      getUser(id: string) {
        return this.get(`/${id}`);
      }
    
}