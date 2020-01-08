import * as React from "react";
import styles from "./App.module.scss";
import Home from "../../components/home/Home";
import Form from "../../components/form/Form";

export interface IAppProps {
  description: string;
  context: any;
}

export default class App extends React.Component<IAppProps, {}> {
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
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
