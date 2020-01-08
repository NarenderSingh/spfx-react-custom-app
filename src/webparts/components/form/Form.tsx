import * as React from "react";
import dataService from "../../services/data.service";
import pnpService from "../../services/pnp.service";

class Form extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      dataService: new dataService(this.props.context),
      pnpService: new pnpService(this.props.context)
    };
  }

  componentDidMount() {
    //console.log("Form", this.props.context);
  }

  getData = () => {
    this.state.dataService.getListData().then(d => {
      console.log("Form Data", d);
    });
  };

  getDataSecondWay = () => {
    let service = new dataService(this.props.context);
    service.getListData().then(d => {
      console.log("Form Data 2", d);
    });
  };

  getDataByPnp = () => {
    this.state.pnpService.getListData();
  };

  public render() {
    return (
      <div>
        <h4>Form Component</h4>
        <button type="button" onClick={this.getData}>
          Get Form Data
        </button>
        <button type="button" onClick={this.getDataSecondWay}>
          Get Form Data 2
        </button>
        <button type="button" onClick={this.getDataByPnp}>
          Get From Data PNP
        </button>
      </div>
    );
  }
}

export default Form;
