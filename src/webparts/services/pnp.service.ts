import { sp } from "@pnp/sp/presets/all";

export default class PnpService {
  constructor(context: any) {
    sp.setup(context);
  }

  async getListData(): Promise<any> {
    return sp.web.lists
      .getByTitle("Employees")
      .items.get()
      .then(d => {
        return d;
      });
  }
}
