import { RESTDataSource }  from 'apollo-datasource-rest';

export class AlbumsService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ALBUMS_URL;
      }

      getAlbums() {
        return this.get("/").then((res) =>
          res.items.map((item: any) => ({
            ...item,
            id: item._id,
          }))
        );
      }

      getAlbum(id: string) {
        return this.get(`/${id}`);
      }
    
}