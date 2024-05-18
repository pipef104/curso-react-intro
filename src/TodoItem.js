function TodoItem(props) {
    return (
      <li>
        <span>V</span>
        <p>Llorar con la llorona {props.item}</p>
        <span>X</span>
      </li>
    );
  }

  export { TodoItem };