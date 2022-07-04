import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Income", "Expenses"],
  datasets: [
    {
      data: [300,500],
      backgroundColor: ["#65c70a", "#E20000"],
      hoverBackgroundColor: ["#65c70a", "#E20000"],
      borderWidth: 2,
    },
  ],
};
export default function Donut() {
  return <Doughnut data={data} />;
}
