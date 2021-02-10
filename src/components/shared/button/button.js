import { Button } from "react-bootstrap";
import "../../../App.css";


const NewButton = (props) => {
  return (
    <>
      <Button
        className={props.classes}
        as={props.as}
        to={props.to}
        onClick={props.onClick}
        variant={props.variant}
        aria-label={props.label}
        key={props.name}>
        {props.message}
      </Button>
    </>
  );
};

export default NewButton;
