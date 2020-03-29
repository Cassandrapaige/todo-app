import React, {useState, createRef, useEffect} from 'react'

import './todo-form.styles.scss'

const TodoForm = ({ addTodo, children }) => {
    const [value, setValue] = useState('');
    const inputRef = createRef();

    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('');
    };
  
    useEffect(() => {
      inputRef.current.focus()
    }, [addTodo]);

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          ref = {inputRef}
          placeholder = "I have so much to do today.."
          onChange={e => setValue(e.target.value)}
        />
        {children}
      </form>
    );
  }

export default TodoForm