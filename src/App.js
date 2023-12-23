import "./App.css";
import Home from "./Componanats/Home";
import Signup from "./Componanats/Signup";
import Profile from "./Componanats/Profile";
import Blogs from "./Componanats/Blogs";
import FAQ from "./Componanats/FAQ";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
