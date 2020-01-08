import * as React from "react";
import { SPComponentLoader } from "@microsoft/sp-loader";

class Material extends React.Component<any, any> {
  constructor(props) {
    super(props);

    // SPComponentLoader.loadCss(
    //   "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    // );
  }

  public render() {
    return (
      <div className="container">
        <h3>Material Component</h3>

        <div className="col">
          <a className="waves-effect waves-light btn">button</a>
          <a className="waves-effect waves-light btn">
            <i className="material-icons left">cloud</i>button
          </a>
          <a className="waves-effect waves-light btn">
            <i className="material-icons right">cloud</i>button
          </a>
        </div>

        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-sm btn-primary">
              Primary
            </button>
            <button type="button" className="btn btn-sm btn-secondary">
              Secondary
            </button>
            <button type="button" className="btn btn-sm btn-success">
              Success
            </button>
            <button type="button" className="btn btn-sm btn-danger">
              Danger
            </button>
            <button type="button" className="btn btn-sm btn-warning">
              Warning
            </button>
            <button type="button" className="btn btn-sm btn-info">
              Info
            </button>
            <button type="button" className="btn btn-sm btn-light">
              Light
            </button>
            <button type="button" className="btn btn-sm btn-dark">
              Dark
            </button>
            <button type="button" className="btn btn-sm btn-link">
              Link
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Material;
