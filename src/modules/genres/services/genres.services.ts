import { RESTDataSource }  from 'apollo-datasource-rest';

export class GenresService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.GENRES_URL;
      }

      getGenres() {
        return this.get("/").then((res) =>
          res.items.map((item: any) => ({
            ...item,
            id: item._id,
          }))
        );
      }

      getGenre(id: string) {
        return this.get(`/${id}`);
      }
    
}