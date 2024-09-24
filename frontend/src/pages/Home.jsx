import { useMutation, useQuery } from "@apollo/client";
import Chart from "../components/Chart";
import TransactionForm from "../components/TransactionForm";
import Cards from "../components/Cards";
import { FaSignOutAlt } from "react-icons/fa";
import { GET_AUTH_USER } from "../graphql/queries/user.query";
import { LOGOUT } from "../graphql/mutations/user.mutation";
import toast from "react-hot-toast";

const Home = () => {
  const { data } = useQuery(GET_AUTH_USER);
  const [logout, { loading, client }] = useMutation(LOGOUT, {
    refetchQueries: ["GetAuthUser"],
  });

  const handleLogout = async () => {
    try {
      await logout();
      client.clearStore();
      toast.success("Logged out successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-7xl mx-auto relative">
      <h2 className="text-4xl bg-gradient-to-r from-pink-600 via-indigo-500 to-pink-400 inline-block text-transparent bg-clip-text font-bold pb-1 text-center">
        Track your expenses
      </h2>
      <section className="flex items-center gap-6 pt-6">
        <img
          className="w-16 h-16 rounded-full"
          src={data?.authUser?.profilePic}
          alt="Avatar pic"
        />
        <FaSignOutAlt className="cursor-pointer" size={30} onClick={logout} />
      </section>
      <section className="flex flex-col md:flex-row pt-10 gap-10">
        <Chart />
        <TransactionForm />
      </section>
      <section className="flex flex-wrap justify-center xl:justify-between gap-4 pt-20 ">
        <Cards />
      </section>
    </div>
  );
};

export default Home;
