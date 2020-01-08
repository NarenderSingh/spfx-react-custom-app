import * as React from "react";
import styles from "./App.module.scss";
import Home from "../../components/home/Home";
import Form from "../../components/form/Form";
import Material from "../../components/design/material/Material";
import { SPComponentLoader } from "@microsoft/sp-loader";

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
  }

  public render(): React.ReactElement<IAppProps> {
    return (
      <div className={styles.app}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>
                Welcome to SharePoint Framework!
                <Home context={this.props.context} />
                <Form context={this.props.context} />
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
                <hr />
                <Material />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
