import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_TRANSACTION } from "../graphql/mutations/transaction.mutation";
import { toast } from "react-hot-toast";

const TransactionForm = () => {
  const [form, setForm] = useState({
    description: "",
    type: "card",
    category: "expense",
    amount: 0,
    location: "",
    date: "",
  });

  const [addTransaction] = useMutation(ADD_TRANSACTION, {
    refetchQueries: ["GetTransactions"],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTransaction({
        variables: { input: { ...form, amount: parseFloat(form.amount) } },
      });
      toast.success("Transaction added succesfully.");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <form className="flex flex-col gap-2 md:gap-4 mt-4 p-3 md:p-0">
      <div className="flex flex-col gap-1 md:gap-2">
        <label htmlFor="description">Description</label>
        <input
          className="border rounded-lg p-2 text-black"
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <div className="flex flex-col gap-1 md:gap-2 w-full">
          <label className="text-nowrap" htmlFor="type">
            Payment Type
          </label>
          <select
            className="border rounded-lg p-2 text-black"
            name="type"
            id="type"
            onChange={handleChange}
          >
            <option value="card">Card</option>
            <option value="cash">Cash</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 md:gap-2 w-full">
          <label htmlFor="category">Category</label>
          <select
            className="border rounded-lg p-2 text-black"
            name="category"
            id="category"
            onChange={handleChange}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
            <option value="saving">Savings</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 md:gap-2 w-full">
          <label htmlFor="amoun">Amount</label>
          <input
            className="border rounded-lg p-2 text-black"
            type="number"
            id="amount"
            name="amount"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <div className="flex flex-col gap-1 md:gap-2 w-full">
          <label htmlFor="location">Location</label>
          <input
            className="border rounded-lg p-2 text-black"
            type="text"
            id="location"
            name="location"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-2 w-full">
          <label htmlFor="date">Date</label>
          <input
            className="border rounded-lg p-2 text-black"
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-400"
        onClick={handleSubmit}
      >
        Add transaction
      </button>
    </form>
  );
};

export default TransactionForm;
