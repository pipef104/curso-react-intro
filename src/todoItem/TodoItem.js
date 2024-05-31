import "./TodoItem.css";
import { CompleteIcon } from '../icons/CompleteIcon';
import { DeleteIcon } from '../icons/DeleteIcon';
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon/>
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
      <DeleteIcon/>
    </li>
  );
}

export { TodoItem };
