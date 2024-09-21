import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  let data = [
    {
      label: "Label 1",
      value: 55,
      color: "rgba(0, 43, 73, 1)",
      cutout: 130,
      spacing: 10,
      borderWidth: 1,
      borderRadius: 30,
    },
    {
      label: "Label 2",
      value: 15,
      color: "rgba(0, 103, 160, 1)",
      cutout: 130,
      spacing: 10,
      borderWidth: 1,
      borderRadius: 30,
    },
    {
      label: "Label 3",
      value: 80,
      color: "rgba(83, 217, 217, 1)",
      cutout: 130,
      spacing: 10,
      borderWidth: 1,
      borderRadius: 30,
    },
  ];

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };

  return (
    <div className="flex items-center">
      <Doughnut data={finalData} />
    </div>
  );
};

export default Chart;
