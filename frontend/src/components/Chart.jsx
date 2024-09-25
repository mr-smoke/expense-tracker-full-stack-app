import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useQuery } from "@apollo/client";
import { GET_STATISTICS } from "../graphql/queries/transaction.query";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const { data } = useQuery(GET_STATISTICS);
  console.log(data);
  let datas = [
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

  const chartColors = {
    expense: "rgba(0, 43, 73, 1)",
    income: "rgba(0, 103, 160, 1)",
    saving: "rgba(83, 217, 217, 1)",
  };

  const finalData = {
    labels: data.getStatistics.map((item) => item.category),
    datasets: [
      {
        label: "$",
        data: data.getStatistics.map((item) => item.total),
        backgroundColor: data.getStatistics.map(
          (item) => chartColors[item.category]
        ),
        borderColor: data.getStatistics.map(
          (item) => chartColors[item.category]
        ),
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
