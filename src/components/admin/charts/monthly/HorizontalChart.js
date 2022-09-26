import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export class HorizontalChart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const options = {
        maintainAspectRatio: false,
      indexAxis: "y",
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: "none",
        },
        title: {
          display: true,
          text: "Total Members Monthly",
        },
      },
    };
    const labels = [
        "June", "July", "August", "September"
    ];
    const data = {
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: [448, 486, 500, 768],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
    return (
      <>
        <Bar
           width={288}
           height={200}
          style={{
            backgroundColor: "#ffff",
            borderRadius: "1vw",
            padding: "8px",
            transform: "rotate(270deg)"
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
export default connect(mapStateToProps, mapDispatchToProps)(HorizontalChart);
