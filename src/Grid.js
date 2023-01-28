import { useEffect, useState } from "react";

import { AgGridReact } from "ag-grid-react";
import { useParams } from "react-router-dom";

function Grid() {
  const [gridApi, setGridApi] = useState(null);
  const [columnDefs, setColumnDefs] = useState([]);
  const [rowData, setRowData] = useState([]);
  let { dataSet } = useParams();
  useEffect(() => {
    alert(dataSet);
    fetch(`https://jsonplaceholder.typicode.com/${dataSet}`)
      .then((res) => res.json())
      .then((data) => {
        setColumnDefs(data.columns);
        setRowData(data.rows);
      });
  }, [dataSet]);

  const onGridReady = (params) => {
    setGridApi(params.api);
    params.api.sizeColumnsToFit();
  };

  const onSortChanged = () => {
    gridApi.refreshCells();
  };

  return (
    <div
      className="ag-theme-material"
      style={{ height: "500px", width: "100%" }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        onGridReady={onGridReady}
        onSortChanged={onSortChanged}
        pagination={true}
        paginationPageSize={10}
        enableSorting={true}
        enableFilter={true}
      />
    </div>
  );
}

export default Grid;
