import { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <div className="absolute bottom-0 h-screen w-full flex justify-center items-center">
      <div className="border rounded-lg bg-gray-100 text-gray-900 flex flex-col p-4 w-72 md:w-96">
        <h3 className="text-2xl font-bold text-center p-4">Login</h3>
        <p className="text-center text-gray-500 font-semibold">
          Log in to your account
        </p>
        <form className="flex flex-col gap-2 pt-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              className="border rounded-lg p-2 text-black"
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              className="border rounded-lg p-2 text-black"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-blue-500 text-white rounded-lg p-2 mt-4 hover:opacity-80"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 font-semibold pt-4">
          Don't have an account?{" "}
          <a href="/register" className="font-bold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
