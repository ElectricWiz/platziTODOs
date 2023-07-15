import "./CreateTodoButton.css"

function CreateTodoButton() {
  return (
    <div className="container" >
      <button className="CreateTodoButton" onChange={(event) => 
      console.log(event.target)
      }
      >+</button>
      

    </div>)
}
export { CreateTodoButton };
