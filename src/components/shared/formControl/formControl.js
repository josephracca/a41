import { Form } from "react-bootstrap";

const FormField = (props) => {
  return (
    <>
      <Form.Control
        className="mt-3 wordsAll"
        id={props.name}
        size={props.size}
        type={props.type}
        placeholder={props.name}
      />
    </>
  );
};

export default FormField;
