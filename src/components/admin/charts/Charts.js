import React, { Component } from "react";
import { connect } from "react-redux";
import PieChart from "./monthly/PieChart";
import LineChart from "./monthly/LineChart";
import HorizontalChart from "./monthly/HorizontalChart";
import HorizontalChartW from "./weekly/HorizontalChartW";
import LineChartW from "./weekly/LineChartW";
import PieChartW from "./weekly/PieChartW";

export class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timezone: "monthly",
    };
  }

  render() {
    console.log(this.state.timezone);
    return (
      <>
        <div className="container mt-4">
          <div className="row offset-sm-4 offset-md-5 offset-lg-3 mb-5">
            <div className="col-3">
              <select
                className="form-select "
                onChange={(e) => this.setState({ timezone: e.target.value })}
                aria-label="Large select"
              >
                <option defaultValue="monthly" value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>
          </div>

          <div className="row offset-sm-4 offset-md-5 offset-lg-3 mb-5">
            <div className="col-sm-8 col-md-7 col-lg-8">
              {this.state.timezone === "monthly" ? <PieChart /> : <PieChartW />}
            </div>
            <div className="col-sm-4 col-md-5 col-lg-4 align-self-center">
              {this.state.timezone === "monthly" ? (
                <HorizontalChart />
              ) : (
                <HorizontalChartW />
              )}
            </div>
          </div>
          <div className="row offset-sm-4 offset-md-5 offset-lg-3">
            <div className="col-sm-8 col-md-7 col-lg-8">
              {this.state.timezone === "monthly" ? (
                <LineChart />
              ) : (
                <LineChartW />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Charts);

// import { render } from "@testing-library/react";

// export class Admin extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       first,
//     };
// }
// render() {
//     return(
//         <>
//         </>
//     )
// }

// }
// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};
// export default connect(mapStateToProps, mapDispatchToProps)(Chars);
