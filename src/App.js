import { Route, Routes } from "react-router-dom";

import FormPage from "./FormPage";
import Grid from "./Grid";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/grid/" element={<Grid />} />
        <Route path="grid">
          <Route path="users" element={<Grid />} />
          <Route path="posts" element={<Grid />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
