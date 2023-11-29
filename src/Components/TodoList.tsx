import React from 'react'
import { Todo } from '../model';
import SingleTodo from './Components/SingleTodo'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div>
            {todos.map((todo) => (
                <SingleTodo
                    todo={todo}
                    setTodos={setTodos}
                    key={todo.id}
                    todos={todos}
                />
            ))}
        </div>
    )
}

export default TodoList
