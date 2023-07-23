import { Button, Form } from "react-bootstrap";

function InputForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="task">Task</Form.Label>
        <Form.Control type="text" id="task" placeholder="Write the task..." />
      </Form.Group>
      <Button type="submit" variant="primary">
        ADD
      </Button>
    </Form>
  );
}

export default InputForm;
