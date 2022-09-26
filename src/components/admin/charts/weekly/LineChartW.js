import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
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

export class LineChartW extends Component {
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
          text: "Weekly Sales",
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
          label: "Total Sales",
          data: [286, 450, 144, 406],
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
export default connect(mapStateToProps, mapDispatchToProps)(LineChartW);
