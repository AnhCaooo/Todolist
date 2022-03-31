import React, { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { format } from "date-fns";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

function TodoList() {
  const [todo, setTodo] = useState({ description: "", date: "", priority: "" });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  const columns = [
    {
      field: "description",
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "date",
      sortable: true,
      filter: true,
      floatingFilter: true,
      valueFormatter: (params) => format(params.value, "dd.MM.yyyy"),
    },
    {
      field: "priority",
      sortable: true,
      filter: true,
      floatingFilter: true,
      cellStyle: (params) =>
        params.value === "High" ? { color: "red" } : { color: "black" },
    },
  ];

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: "", date: null, priority: "" });
  };

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(
        todos.filter(
          (todo, index) =>
            index !== gridRef.current.getSelectedNodes()[0].childIndex
        )
      );
    } else {
      alert("Select your deleted row first");
    }
  };

  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <TextField
          label="Description"
          name="description"
          variant="standard"
          value={todo.description}
          onChange={inputChanged}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date"
            placeholder="Date"
            value={todo.date}
            onChange={(newDate) => setTodo({ ...todo, date: newDate })}
            inputFormat="dd.MM.yyyy"
            mask="__.__.____"
            renderInput={(params) => (
              <TextField variant="standard" {...params} />
            )}
          />
        </LocalizationProvider>

        <TextField
          label="Priority"
          variant="standard"
          name="priority"
          value={todo.priority}
          onChange={inputChanged}
        />

        <Tooltip title="Add stuff to do">
          <Button variant="contained" endIcon={<AddIcon />} onClick={addTodo}>
            Add
          </Button>
        </Tooltip>

        <Tooltip title="Select a row to delete">
          <Button
            variant="contained"
            color="error"
            endIcon={<DeleteIcon />}
            onClick={deleteTodo}
          >
            Delete
          </Button>
        </Tooltip>
      </Stack>

      <div
        className="ag-theme-material"
        style={{ height: 400, width: 700, margin: "auto" }}
      >
        {" "}
        <AgGridReact
          rowData={todos}
          columnDefs={columns}
          ref={gridRef}
          rowSelection="single"
          animateRows={true}
          onGridReady={(params) => (gridRef.current = params.api)}
        />
      </div>
    </div>
  );
}

export default TodoList;
