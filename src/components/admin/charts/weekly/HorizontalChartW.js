import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
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
export class HorizontalChartW extends Component {
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
          borderWidth: 5,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: "none",
        },
        title: {
          display: true,
          text: "Total Members Weekly",
        },
      },
    };

    const labels = [
      [moment().subtract(28, "days").format("D"),moment().subtract(21, "days").format("D")],
      [moment().subtract(21, "days").format("D"),moment().subtract(14, "days").format("D")],
      [moment().subtract(14, "days").format("D"),moment().subtract(7, "days").format("D")],
      [moment().subtract(7, "days").format("D"),moment().subtract(0, "days").format("D")]
    
    ];
    const data = {
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: [130, 244, 148, 246],
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
            transform: "rotate(270deg)",
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
export default connect(mapStateToProps, mapDispatchToProps)(HorizontalChartW);
