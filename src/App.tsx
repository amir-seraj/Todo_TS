import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/form/Form";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([{ id: 0, text: "", dateNow: Date.now() }]);
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center ">
        <h3 className="text-danger">TODO LIST PROJECT</h3>
        <Form
          onSubmit={(data) => {
            setTask([
              ...task,
              { id: task.length, text: data.todoText, dateNow: Date.now() },
            ]);
            console.log(data);
          }}
        />
      </div>
      <div>{JSON.stringify(task)}</div>
    </>
  );
}

export default App;
