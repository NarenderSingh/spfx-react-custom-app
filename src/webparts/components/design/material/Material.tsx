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
      <div>
        <h3>Material Component</h3>
        <a className="waves-effect waves-light btn">button</a>
        <a className="waves-effect waves-light btn">
          <i className="material-icons left">cloud</i>button
        </a>
        <a className="waves-effect waves-light btn">
          <i className="material-icons right">cloud</i>button
        </a>

        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <button type="button" className="btn btn-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-success">
          Success
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
        <button type="button" className="btn btn-light">
          Light
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button>
        <button type="button" className="btn btn-link">
          Link
        </button>
      </div>
    );
  }
}

export default Material;
