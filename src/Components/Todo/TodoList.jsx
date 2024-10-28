import React, { useState } from 'react';
import { addTodo, deleteTodo, toggleTodo, updateTodo } from './Slice';
import { useDispatch, useSelector } from 'react-redux';


const TodoList = () => {
    const [input, setInput] = useState('');
    const [editingId, setEditingId] = useState(null); 
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleClick = () => {
        if (input.trim()) {
            if (editingId) {
                
                dispatch(updateTodo({ id: editingId, text: input }));
                setEditingId(null); 
            } else {
                
                dispatch(addTodo(input));
            }
            setInput(''); 
        }
    };

    const handleEdit = (todo) => {
        setInput(todo.text); 
        setEditingId(todo.id);
    };

    return (
        <div>
            <input
                type="text"
                placeholder='Add/Edit Todo'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleClick}>
                {editingId ? 'Update Todo' : 'Add Todo'}
            </button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}
                        style={{
                            textDecoration: todo.completed ? "line-through" : 'none',
                            cursor: "pointer"
                        }}
                        onClick={() => dispatch(toggleTodo(todo.id))}
                    >
                        {todo.text}
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>
                            Delete
                        </button>
                        <button onClick={() => handleEdit(todo)}>
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
