import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import React, { useEffect, useState } from "react";

import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Grid() {
  let { selected } = useParams();
  const usersHeader = ["id", "email", "password", "name", "role"];
  const [users, setUsers] = React.useState(null);
  const baseURL = "https://api.escuelajs.co/api/v1/";
  useEffect(() => {
    axios.get(baseURL + "users").then((response) => {
      setUsers(response.data);
    });
  }, []);
  if (!users) return <h1>error</h1>;
  console.log(selected + "-----------");
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      {/* <AgGridReact rowData={users} columnDefs={usersHeader}></AgGridReact> */}
      {users.map((user, key) => (
        <h1>{user["name"]}</h1>
      ))}
    </div>
  );
}

export default Grid;
