import { Table } from "react-bootstrap";

interface Props {
  id: number;
  task: string;
  date: Date;
}
function tasksTable({ id, task, date }: Props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Submit Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default tasksTable;
