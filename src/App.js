import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css"
import Home from "./pages/Home";
import Home1 from "./pages/Home1";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home1/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
