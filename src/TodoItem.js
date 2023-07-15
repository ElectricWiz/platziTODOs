import './TodoItem.css'

function TodoItem(props) {
  return (
    <li>
      <span className={`icon icon-check ${props.completed && "icon-check-active"}`}>☑</span>
      <p>{props.text}</p>
      <span class="icon icon-check false">☒</span>
    </li>
  );
}

export { TodoItem };