import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const options = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Monthly Sales",
        },
      },
    };
    const labels = ["June", "July", "August", "September"];

    const data = {
      labels,
      datasets: [
        {
          label: "Total Sales",
          data: [755, 640, 800, 1286],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
    return (
      <>
        <Line
          width={250}
          height={300}
          style={{
            backgroundColor: "#ffff",
            borderRadius: "1vw",
            padding: "8px",
          }}
          options={options}
          data={data}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(LineChart);
