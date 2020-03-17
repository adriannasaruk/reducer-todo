import React, {useReducer, useState} from 'react';
import './App.css';
import {reducer, initialState} from "./reducers/reducer"


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [newTodo, setnewTodo] = useState ('');
  const handleChanges = e => {
    setnewTodo(e.target.value)
  }
console.log(state)
  return (
    <div className = "App">
    <div>
      <form onSubmit = {(event) => event.preventDefault(dispatch ({type: "ADD_TODO", payload: newTodo}))} className = "form" >
                <input
                type = "text"
                name = "item"
                value = {newTodo}
                onChange = {handleChanges}
                />
                <br></br>
                <button className = "button" type = "submit">Add Todo</button>
            </form>
            <button className = "button">Clear Completed</button>
    </div>
    <div>
    {state.map(item => (
        <div onClick = {() => dispatch ({ type:"COMPLETED_ITEM", id:item.id})} className = {state.completed ?  ' completed' : ""}>
      {item.item}
      </div>))}
      </div>
      </div>
  );
}
export default App;