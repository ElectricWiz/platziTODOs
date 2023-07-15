import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <div className='container1'>
    <h1 className="TodoCounter">
      Has completado <span><strong>{completed}</strong></span> de <span><b>{total}</b></span> TODOs
    </h1>
    </div>
  );
}

export { TodoCounter };
