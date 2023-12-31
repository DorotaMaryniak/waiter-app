import { addTableRequest, getAllTables } from "../../../redux/tableReducer";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { Button } from "react-bootstrap";

const TableForm = () => {

  const dispatch = useDispatch();
  const tables = useSelector(getAllTables);
  const [newTableId, setNewTableId] = useState(""); 
  let tableUnique = true;

  const handleAddTable = event => {
    event.preventDefault();
    const newTable = {
      id: parseInt(newTableId),
      status: "Free",
      peopleAmount: 0,
      maxPeopleAmount: 4,
      bill: 0
    };
    if (newTable.id >= 10) {
      alert('WE HAVE ONLY 10 TABLES');
      tableUnique = false;
    }
    for (let table of tables) {
      if (table.id === newTable.id) {
          alert(`TABLE ${newTable.id} ALREADY EXISTS`);
          tableUnique = false;
          break;
      } 
    }
    if (tableUnique) {
      dispatch(addTableRequest(newTable));
    }
  }

  return (
    <div className="col-12 d-flex flex-column justify-content-center align-items-center gap-2">
      <h4 className="mt-4">Add New Table</h4>
      <div className="col-12 mb-5 d-flex flex-row justify-content-center align-items-center gap-2"> 
      <input className="col-1" value={newTableId} placeholder="New Table..." onChange={event => setNewTableId(event.target.value)}></input>
      <Button className="col-1 btn btn-sm" onClick={event => handleAddTable(event)} variant="primary">
        Add Table
      </Button>
      </div>
    </div>
  );
};

export default TableForm;