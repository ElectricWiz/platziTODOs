import './TodoList.css'

function TodoList(props) {
  return (
    <div id="zweite" className='f'>
    <ul className="TodoList">
      {props.children}
    </ul>
    </div>
  );
}

export { TodoList };

