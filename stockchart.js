import { Line } from "react-chartjs-2";
import "chart.js/auto";

export const StockChart = ({ stock }) => {
  const data = {
    labels: stock.prices.map(price => price.date),
    datasets: [
      {
        label: stock.name,
        data: stock.prices.map(price => price.value),
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};