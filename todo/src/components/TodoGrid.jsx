
import { AgGridReact } from "ag-grid-react";
import { useState, useRef } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme
import { Button } from "@mui/material";


export default  function TodoGrid(props){

    const [columnDefs, setColumnDefs] = useState([
        {field: 'description', sortable: true, filter: true, floatingFilter: true},
        {field: 'date', sortable: true, filter: true, floatingFilter: true},
        {field: 'priority',sortable: true, filter: true, floatingFilter: true, 
        cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}}
        
      ]);

      const gridRef = useRef();

      const onDelete = () => {
        const removeId = gridRef.current.getSelectedNodes()[0].id;
        props.deleteByIndex(removeId);

      }

    return (
        <>
            
            
            <Button variant="contained" color="error" onClick={onDelete}>poista valittu</Button>
            <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={props.todos}
                    columnDefs={columnDefs}
                    rowSelection="single"
                />
            </div>
        </>
    )

}


