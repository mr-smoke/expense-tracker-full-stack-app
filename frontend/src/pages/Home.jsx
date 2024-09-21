import Card from "../components/Card";
import Chart from "../components/Chart";
import TransactionForm from "../components/TransactionForm";
import { FaSignOutAlt } from "react-icons/fa";

const Home = () => {
  const data = [
    { id: 1, title: "Salary", amount: 5000 },
    { id: 2, title: "Rent", amount: -1000 },
    { id: 3, title: "Grocery", amount: -200 },
    { id: 4, title: "Internet", amount: -50 },
  ];
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto relative">
      <h2 className="text-4xl bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-400 inline-block text-transparent bg-clip-text font-bold pb-1 text-center">
        Track your expenses
      </h2>
      <section className="flex items-center gap-6 pt-6">
        <img
          className="w-16 h-16 rounded-full"
          src="/noavatar.png"
          alt="Avatar pic"
        />
        <FaSignOutAlt size={30} />
      </section>
      <section className="flex flex-col md:flex-row pt-10 gap-10">
        <Chart />
        <TransactionForm />
      </section>
      <section className="flex flex-wrap justify-center xl:justify-between gap-4 pt-20 ">
        {data.map((transaction, key) => (
          <Card key={key} />
        ))}
      </section>
    </div>
  );
};

export default Home;
