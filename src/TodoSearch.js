import './TodoSearch.css'

function TodoSearch() {
  return (
    <div id="erste" className="container">
    <input
      placeholder="Buscar"
      className="TodoSearch" 
      onChange={(event) => console.log(event.target.value)}/>
    </div>
  );
}

export { TodoSearch };
