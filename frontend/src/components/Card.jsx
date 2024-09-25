import {
  FaCartPlus,
  FaCashRegister,
  FaEdit,
  FaIdCard,
  FaLocationArrow,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { DELETE_TRANSACTION } from "../graphql/mutations/transaction.mutation";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";

const Card = ({ card }) => {
  const [deleteTransaction] = useMutation(DELETE_TRANSACTION, {
    refetchQueries: ["GetTransactions"],
  });

  const handleDelete = async () => {
    try {
      await deleteTransaction({ variables: { id: card._id } });
      toast.success("Transaction deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border rounded-lg flex flex-col p-4 gap-2 w-72 md:w-96 mx-4 md:mx-0">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl">Salary</h3>
        <div className="flex items-center gap-4">
          <button onClick={handleDelete}>
            <FaTrash />
          </button>
          <Link to={`/transaction/${card._id}`}>
            <FaEdit />
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FaIdCard />
        <p className="text-lg text-red-500">Description: Bit</p>
      </div>
      <div className="flex items-center gap-2">
        <FaCartPlus />
        <p className="text-lg text-red-500">Payment Type: Card</p>
      </div>
      <div className="flex items-center gap-2">
        <FaCashRegister />
        <p className="text-lg text-red-500">Amount: $5000</p>
      </div>
      <div className="flex items-center gap-2">
        <FaLocationArrow />
        <p className="text-lg text-red-500">Location: Lagos</p>
      </div>
    </div>
  );
};

export default Card;
