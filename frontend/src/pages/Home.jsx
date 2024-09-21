import Chart from "../components/Chart";
import TransactionForm from "../components/TransactionForm";
import { FaSignOutAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto relative">
      <h2 className="text-4xl">Track your expenses</h2>
      <section className="flex items-center gap-6 pt-6">
        <img
          className="w-16 h-16 rounded-full"
          src="/noavatar.png"
          alt="Avatar pic"
        />
        <FaSignOutAlt size={30} />
      </section>
      <section className="flex pt-10 gap-10">
        <Chart />
        <TransactionForm />
      </section>
      <section className="flex"></section>
    </div>
  );
};

export default Home;
