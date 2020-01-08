import * as React from "react";
import { FaBeer } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";

class Material extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className="container">
        <h3>React Icons Component</h3>
        <div className="row">
          <div className="col">
            <FaBeer />
            <FaBeer />
            <FaBeer />
            <FaBeer />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <IoIosAirplane />
            <IoIosAirplane />
            <IoIosAirplane />
            <IoIosAirplane />
            <IoIosAirplane />
            <IoIosAirplane />
          </div>
        </div>
      </div>
    );
  }
}

export default Material;
