import { RESTDataSource }  from 'apollo-datasource-rest';

export class ArtistsService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ARTISTS_URL;
      }

      getArtists() {
        return this.get("/").then((res) =>
          res.items.map((item: any) => ({
            ...item,
            id: item._id,
            bands: item.bandsIds,
          }))
        );
      }

      getArtist(id: string) {
        return this.get(`/${id}`);
      }
    
}