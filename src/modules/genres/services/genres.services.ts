import { RESTDataSource }  from 'apollo-datasource-rest';

export class GenresService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.GENRES_URL;
      }

      willSendRequest(request: any) {
        request.headers.set("Authorization", `Bearer ${this.context.token}`)
        console.log('request.headers', request.headers)
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

      async createGenre(parent: any, args: any) {
        const newGenre = args
        const data = await this.post("/", {...newGenre})
        data.id = data._id
        return data
      }

      async updateGenre(parent: any, args: any) {
        const updateGenre = args
        const data = await this.put(`/${updateGenre.id}`, {...updateGenre})
        data.id = data._id
        return data
      }

      async deleteGenre(parent: any, args: any) {
        const genreID = args
        const data = await this.delete(`/${genreID.id}`)
        return data
      }
}


// query getGenre($id: ID!){
//   genre($id: ID!){
//     name
//     description
//   }
// }


// mutation CreateReviewForEpisode($name:String, $description: String, $country: String,
//   $year: Int){
//   createGenre(name:$name, description: $description, country: $country,
//   year: $year){
//     name
//     description
//     country
//     year
//    }
// }


// mutation UpdateGenreInput($id: ID!, $name: String){
//   updateGenre(id: $id, name: $name){
//     id
//     name
//     country
//     description
//    }
// }