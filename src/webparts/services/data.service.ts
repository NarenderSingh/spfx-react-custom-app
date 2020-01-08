import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";

export default class DataService {
  private context: any = null;

  constructor(context: any) {
    this.context = context;
  }

  async getListData(): Promise<any> {
    return this.context.spHttpClient
      .get(
        this.context.pageContext.web.absoluteUrl +
          `/_api/web/lists?$filter=Hidden eq false`,
        SPHttpClient.configurations.v1
      )
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }
}
