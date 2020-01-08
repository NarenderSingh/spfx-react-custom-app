import * as React from "react";
import { SPComponentLoader } from "@microsoft/sp-loader";
import styles from "./App.module.scss";
import Home from "../../components/home/Home";
import Form from "../../components/form/Form";
import Material from "../../components/design/Material";
import ReactIcon from "../../components/design/ReactIcon";
import PrimeReact from "../../components/prime-react/PrimeReact";

export interface IAppProps {
  description: string;
  context: any;
}

export default class App extends React.Component<IAppProps, {}> {
  public constructor(props) {
    super(props);

    SPComponentLoader.loadCss(
      "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    );

    SPComponentLoader.loadCss(
      "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    );

    SPComponentLoader.loadCss(
      "https://localhost:4321/src/webparts/styles/style.css"
    );
  }

  public render(): React.ReactElement<IAppProps> {
    return (
      <div className={styles.app}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>
                <h4> Welcome to SharePoint Framework!</h4>
                <hr />
                <Home context={this.props.context} />
                <hr />
                <Form context={this.props.context} />
                <hr />
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
                <hr />
                <Material />
                <hr />
                <ReactIcon />
                <hr />
                {/* <PrimeReact /> */}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
