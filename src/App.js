import { Route, Routes } from "react-router-dom";

import Grid from "./Grid";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grid" element={<Grid />} />
      </Routes>
    </div>
  );
}

export default App;
