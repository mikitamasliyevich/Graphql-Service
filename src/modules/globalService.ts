import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class GlobalService extends RESTDataSource {
    constructor(url: string) {
        super();
        this.baseURL = url;
      }

      willSendRequest(request: RequestOptions) {
        request.headers.set("Authorization", `Bearer ${this.context.token}`)
        }
      
      getItems() {
        return this.get("/").then((res) =>
          res.items.map((item: any) => ({
            ...item,
          }))
        );
      }

      getItem(id: string) {
         return this.get(`/${id}`);
      }

      async createItem(parent: any, args: any) {
        return await this.post("/", {...args.input})
      }

      async updateItem( parent: any, args: any) {
        return await this.put(`/${args.id}`, {...args.input})
      }

      async deleteItem(parent: any, args: any) {
        return await this.delete(`/${args.id}`)
      }

      getItemsByIds(items: Array<string>) {
        return Promise.all(items.map((id: string) => this.getItem(id)))
     }
}
