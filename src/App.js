import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/TopBar/Topbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllUsers from "./pages/AllUsers/AllUsers";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-users" element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
