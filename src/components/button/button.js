import { Button } from "react-bootstrap";
import "../../App.css";


const AButton = (props) => {
  return (
    <>
      <Button className={props.classes} as={props.as} to={props.to} onClick={props.onClick}>{props.message}</Button>
    </>
  );
};

export default AButton;
