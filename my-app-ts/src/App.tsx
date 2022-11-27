import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { setConstantValue } from 'typescript';



function App() {
const [todo, setTodo] = useState<string>('')
const handleSubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
   e.preventDefault()
   setTodo('')
}
  return (
    <div className="App">
      <h1>Todo list</h1>
      <form onSubmit = {handleSubmit}>
        <input type="text" value={todo} onChange={e=>setTodo(e.target.value)} />
        <button>Add todo</button>
      </form>
    </div>
  );
}

export default App;
