import { sp } from "@pnp/sp/presets/all";

export default class PnpService {
  constructor(context: any) {
    sp.setup(context);
  }

  getListData(): void {
    sp.web.lists
      .getByTitle("Employees")
      .items.get()
      .then(d => {
        console.log("Employee Details", d);
      });
  }

  getListData2(): void {
    sp.web.lists
      .getByTitle("Employees")
      .items.get()
      .then(d => {
        console.log("Employee 2 Details", d);
      });
  }
}
