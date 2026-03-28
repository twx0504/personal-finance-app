import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router";
import Auth from "./layouts/Auth.jsx";
import Dashboard from "./layouts/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Overview from "./pages/Overview";
import Budgets from "./pages/Budgets";
import Transaction from "./pages/Transaction";
import Bills from "./pages/Bills";
import Pots from "./pages/Pots";
import Loading from "./pages/Loading.jsx";

// ProtectedRoute checks isLogin state: Decide which layout to render: Auth or Dashboard - each has outlet to render the Page.
// - Navigate to Login if isLogin === false. Since the path is "/login", login page is rendered.
// - Otherwise, render Dashboard layout
// Route rendered into Outlet slot in Dashboard layout / Auth layout
// I will write conditional inside Auth to decide whether to render or navigate.

function App() {
  // Temporary variable to test the routes.

  // TODO: I am developing the dashboard page. Remember to change it back to false once finished.
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Routes>
      <Route element={<Auth isLoggedIn={isLoggedIn} />}>
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route element={<Dashboard isLoggedIn={isLoggedIn} />}>
        <Route path="/" element={<Overview />}></Route>
        <Route path="transactions" element={<Transaction />}></Route>
        <Route path="budgets" element={<Budgets />}></Route>
        <Route path="pots" element={<Pots />}></Route>
        <Route path="bills" element={<Bills />}></Route>
        <Route path="loading" element={<Loading />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
