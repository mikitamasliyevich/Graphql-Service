import { RESTDataSource, RequestOptions }  from 'apollo-datasource-rest';

export class FavouriteService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.FAVOURITES_URL;
      }

      willSendRequest(request: RequestOptions) {
        request.headers.set("Authorization", ` Bearer ${this.context.token}`)
        }

      async getFavourites() {
       return await this.get("/")
      }

      addData(id: string, type: any) {
        return this.put(
          "add",
          { type, id },
        );
      }
}