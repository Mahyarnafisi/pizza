import "./App.css";
import Navbar from "./components/navbar";
// import Header from "./components/header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/menu" Component={Menu}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/contact" Component={Contact}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
