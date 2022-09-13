import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const style = {
    li: `text-xl flex justify-between bg-slate-200 p-4 my-2 capitalize rounded`,
    liComplete: `text-xl flex justify-between bg-slate-400 p-4 my-2 capitalize rounded`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`
}

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <li className={todo.completed ? style.liComplete : style.li}>
            <div className='flex'>
                <input
                    type={'checkbox'}
                    className='cursor-pointer'
                    checked={todo.completed ? 'checked' : ''}
                    onChange={() => toggleComplete(todo)}
                />
                <p className={todo.completed ? style.textComplete : style.text} onClick={() => toggleComplete(todo)}>{todo.text}</p>
            </div>
            <button onClick={() => deleteTodo(todo.id)} className='cursor-pointer flex items-center p-1 bg-red-500 hover:bg-red-600 rounded transition'>
                <FaRegTrashAlt />
            </button>
        </li>
    )
}

export default Todo;