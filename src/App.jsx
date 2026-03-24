import "./App.css";
import { Routes, Route } from "react-router";
import Auth from "./layouts/Auth.jsx";
import Dashboard from "./layouts/Dashboard.jsx";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Overview from "./pages/Overview.jsx";
import Budgets from "./pages/Budgets.jsx";
import Transaction from "./pages/Transaction.jsx";
import Bills from "./pages/Bills.jsx";
import Pots from "./pages/Pots.jsx";

// ProtectedRoute checks isLogin state: Decide which layout to render: Auth or Dashboard - each has outlet to render the Page.
// - Navigate to Login if isLogin === false. Since the path is "/login", login page is rendered.
// - Otherwise, render Dashboard layout
// Route rendered into Outlet slot in Dashboard layout / Auth layout
// I will write conditional inside Auth to decide whether to render or navigate.

function App() {
  // Temporary variable to test the routes.
  const user = false;
  return (
    <Routes>
      <Route element={<Auth user={user} />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route element={<Dashboard user={user} />}>
        <Route path="/" element={<Overview />}></Route>
        <Route path="transaction" element={<Transaction />}></Route>
        <Route path="budgets" element={<Budgets />}></Route>
        <Route path="pots" element={<Pots />}></Route>
        <Route path="bills" element={<Bills />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
