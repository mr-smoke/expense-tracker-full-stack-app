import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Transaction from "./pages/Transaction";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@apollo/client";
import { GET_AUTH_USER } from "./graphql/queries/user.query";

function App() {
  const { data, loading, error } = useQuery(GET_AUTH_USER);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <BrowserRouter>
        {data.authUser && <Header />}
        <Routes>
          <Route
            path="/"
            element={data?.authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={data?.authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={data?.authUser ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/transaction/:id"
            element={
              data?.authUser ? <Transaction /> : <Navigate to="/login" />
            }
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
