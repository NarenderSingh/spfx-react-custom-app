import * as React from "react";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";

class Home extends React.Component<any, any> {
  componentDidMount() {
    this.props.context.spHttpClient
      .get(
        this.props.context.pageContext.web.absoluteUrl +
          `/_api/web/lists?$filter=Hidden eq false`,
        SPHttpClient.configurations.v1
      )
      .then((response: SPHttpClientResponse) => {
        console.log("LIST DATA", response.json());
      });
  }

  public render() {
    return (
      <div>
        <h3>Home Component</h3>
      </div>
    );
  }
}

export default Home;
