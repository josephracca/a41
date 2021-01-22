import { Form } from "react-bootstrap";

const FormField = (props) => {
  return (
    <>
      <Form.Control
        className="mt-3"
        id={props.name}
        size="md"
        type="text"
        placeholder={props.name}
      />
    </>
  );
};

export default FormField;
