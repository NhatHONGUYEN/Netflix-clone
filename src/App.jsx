import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./page/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import Account from "./page/Account";
import ProtectRoute from "./components/ProtectRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectRoute>
                <Account />
              </ProtectRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
