import React, { useState } from "react";

import Select from "react-dropdown-select";
import { useNavigate } from "react-router-dom";

function Home() {
  const [value, setValue] = useState();
  const options = [
    {
      id: 1,
      name: "users",
    },
    {
      id: 2,
      name: "categories",
    },
    {
      id: 3,
      name: "products",
    },
  ];
  const navigate = useNavigate();
  return (
    <div>
      <Select
        options={options}
        labelField="name"
        valueField="id"
        onChange={(value) => setValue(value)}
      />

      {/* navigate(`grid/${value[0]["name"]}`) */}
      <button
        onClick={() =>
          (window.location.href = `http://localhost:3000/grid/${value[0]["name"]}`)
        }
      >
        Submit
      </button>
      {/* window.location.href = `https://careers.techle.in/confirm/${payment_id}/${order_id}` */}
    </div>
  );
}

export default Home;
