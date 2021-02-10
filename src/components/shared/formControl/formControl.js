import { Form } from "react-bootstrap";

const FormField = (props) => {
  return (
    <>
      <Form.Control
        className={props.className}
        id={props.name}
        size={props.size}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        key={props.name}
      />
            <label for={props.name} className="sr-only" >{props.name}</label>

    </>
  );
};

export default FormField;
