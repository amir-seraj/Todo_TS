import { Table } from "react-bootstrap";

interface Props {
  tasks: Task[];
}

interface Task {
  id: number;
  text: string;
  state: string;
}

function TasksTable({ tasks }: Props) {
  if (tasks.length === 0) return null;

  return (
    <>
      <select name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.id}</td>
              <td>{task.text}</td>
              <td>{task.state}</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TasksTable;
