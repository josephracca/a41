import { Form } from "react-bootstrap";

const FormField = (props) => {
  return (
    <>
      <Form.Control
        className={props.className}
        id={props.name}
        size={props.size}
        type={props.type}
        placeholder={props.name}
        onChange={props.onChange}
        name={props.name}
      />
    </>
  );
};

export default FormField;
