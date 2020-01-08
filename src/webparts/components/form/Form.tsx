import * as React from "react";
import DataService from "../../services/data.service";
import PnpService from "../../services/pnp.service";

class Form extends React.Component<any, any> {
  constructor(
    props: any,
    private dataService: DataService,
    private pnpService: PnpService
  ) {
    super(props);

    this.state = {};

    this.dataService = new DataService(this.props.context);
    this.pnpService = new PnpService(this.props.context);
  }

  componentDidMount() {
    //console.log("Form", this.props.context);
  }

  getData = () => {
    this.dataService.getListData().then(d => {
      console.log("Form Data =>", d);
    });
  };

  getDataByPnp = () => {
    this.pnpService.getListData().then(d => {
      console.log("Employee Details =>", d);
    });
  };

  public render() {
    return (
      <div>
        <h4>Form Component</h4>
        <button type="button" onClick={this.getData}>
          SERVICE PROMISE
        </button>
        <button type="button" onClick={this.getDataByPnp}>
          SERVICE PNP
        </button>
      </div>
    );
  }
}

export default Form;
