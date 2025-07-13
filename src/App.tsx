import "./App.css";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Books from "./Books";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;
