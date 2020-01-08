import * as React from "react";
import { Checkbox } from "primereact/checkbox";

class PrimeReact extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      checked: false
    };
  }

  public render() {
    return (
      <div className="container">
        <h3>Prime React Component</h3>
        <div className="row">
          <div className="col">
            {/* <Checkbox
              checked={this.state.checked}
              onChange={e => this.setState({ checked: e.checked })}
            /> */}
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default PrimeReact;
