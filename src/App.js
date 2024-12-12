import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router basename="/e-commerce-Digital">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
