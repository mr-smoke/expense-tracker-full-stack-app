const Transaction = () => {
  return (
    <div className="absolute bottom-0 h-screen w-full flex justify-center items-center pt-20 md:pt-0">
      <form className="flex flex-col gap-2 md:gap-4 mt-4 p-3 md:p-0 w-full md:w-1/2 xl:w-1/3">
        <div className="flex flex-col gap-1 md:gap-2">
          <label htmlFor="title">Transaction</label>
          <input
            className="border rounded-lg p-2 text-black"
            type="text"
            id="title"
            name="title"
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
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
              <option value="savings">Savings</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 md:gap-2 w-full">
            <label htmlFor="amoun">Amount</label>
            <input
              className="border rounded-lg p-2 text-black"
              type="number"
              id="amount"
              name="amount"
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
            />
          </div>
          <div className="flex flex-col gap-1 md:gap-2 w-full">
            <label htmlFor="date">Date</label>
            <input
              className="border rounded-lg p-2 text-black"
              type="date"
              id="date"
              name="date"
            />
          </div>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-400">
          Update transaction
        </button>
      </form>
    </div>
  );
};

export default Transaction;
