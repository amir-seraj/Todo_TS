import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/form/Form";
import { useState } from "react";
import TasksTable from "./components/table/tasksTable";

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, text: "", state: "" },
    { id: 1, text: "hi", state: "" },
    { id: 2, text: "bye", state: "" },
  ]);
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center ">
        <h3 className="text-danger">TODO LIST PROJECT</h3>
        <Form
          onSubmit={(data) => {
            setTasks([
              ...tasks,
              {
                id: tasks.length,
                text: data.todoText,
                state: "Uncompleted",
              },
            ]);
          }}
        />
        <h5>{JSON.stringify(tasks)}</h5>
        <TasksTable tasks={tasks} />
      </div>
    </>
  );
}

export default App;
