import "./TodoItem.css";
import { CompleteIcon } from "../icons/CompleteIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onCompleted={props.onCompleted}
      />
      {/* <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onCompleted}
      >
        V
      </span> */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      {/* // <span className="Icon Icon-delete" onClick={props.onDeleted}>
      //   X
      // </span> */}
      <DeleteIcon onDeleted={props.onDeleted} />
    </li>
  );
}

export { TodoItem };
