import { RESTDataSource }  from 'apollo-datasource-rest';

export class TracksService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.TRACKS_URL;
      }

      getTracks() {
        return this.get("/").then((res) =>
          res.items.map((item: any) => ({
            ...item,
            id: item._id,
          }))
        );
      }

      getTrack(id: string) {
        return this.get(`/${id}`);
      }
    
}