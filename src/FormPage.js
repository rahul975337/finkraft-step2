import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // or ag-theme-bootstrap

import React, { useState } from "react";

///
import { useNavigate } from "react-router-dom";

////

function FormPage() {
  const [dataSet, setDataSet] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/grid/data=${dataSet}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Data Set:
        <select value={dataSet} onChange={(e) => setDataSet(e.target.value)}>
          <option value="posts">Posts</option>
          <option value="comments">Comments</option>
          <option value="users">Users</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormPage;
