import React from 'react'
import { Todo } from '../../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';


type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const handleDone =(id:number)=>{
        setTodos(
            todos.map((todo)=>(
             todo.id === id ? {...todo , isDone:!todo.isDone} : todo   
            ))
        )
    }

    const handleDelete =(id:number)=>{
        setTodos(todos.filter((todo)=>todo.id!==id ))
    }

    return (
        <form>
            {
                todo.isDone ? (
                    <s>{todo.todo}</s>
                ):
                <span>{todo.todo}</span>
            }
            <div>
                <span>
                    <AiFillEdit />
                </span>
                <span>
                    <AiFillDelete onClick={()=>handleDelete(todo.id)} />
                </span>
                <span onClick={()=>handleDone(todo.id)} >
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo
