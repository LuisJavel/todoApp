import { useState } from "react"
import Todo from "./todo";
import './todoApp.css';


const TodoApp = () => {
    const [title, setTitle] = useState('hola');
    const [todos, setTodos] = useState([])
    // function handleClick (e){
    //     e.preventDefault();
    //     setTitle('masaquiza')
    // }
    function handleChange(event){
        const value = event.target.value;

        setTitle(value);
    }

function handleSubmit(e){
    e.preventDefault()

    const newTodo = {
        id:crypto.randomUUID(),
        title: title,
        completed: false,
    }

    const temp = [...todos]
    temp.unshift(newTodo)

    setTodos(temp)
    setTitle('')
}

function handleUpdae(id, value) {
    const temp = [...todos]
    const item = temp.find((item) => item.id === id)
    item.title = value
    setTodos(temp)
}

function handleDelete(id){
    const temp = todos.filter(item => item.id !== id)
    setTodos(temp);
}

  return (
    <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" value={title} />
            <input onClick={handleSubmit} type="submit" value= "create todo" className="buttonCreate" />
        </form>
        <div className="todosContainer">
            {todos.map((item) =>(
                <Todo key={item.id} item={item} onUpdate={handleUpdae} onDelete={handleDelete}/>
            ))}
        </div>
    </div>
  )
}

export default TodoApp