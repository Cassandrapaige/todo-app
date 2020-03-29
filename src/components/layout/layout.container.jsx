import React, { useState } from "react";
import {animated, useSpring, config} from 'react-spring'

import TodoItem from '../todo-item/todo-item.component'
import ListContainer from '../list-container/list-container.component'
import TodoForm from '../todo-form/todo-form.component'
import Colors from '../colors/colors.component'

import './layout.styles.scss'

const Layout = () => {
    const props = useSpring({
        from: {
            opacity: 0,
            transform: 'translateY(20px)',
            display: 'flex',
            flexDirection: 'column'
        },
        to: {
            opacity: 1,
            transform: 'translateY(0)',
        },
        config: config.gentle
    })

    const [checked, setIsChecked] = useState(false);
    const [todos, setTodos] = useState([
        {todo: 'Make a damn todo app', id: 1},
        {todo: 'Binge the office all day', id: 2}
    ]);
    const [color, setColor] = useState('#F23D5D');
    const [filteredTodos, setFilteredTodos] = useState([])

    const addTodo = (todo, id) => {
        id = Math.random();
        const newTodos = [...todos, {todo , id}];
        const filteredList = [...filteredTodos, {todo, id}];

        if(!checked) setTodos(newTodos);
        if(checked) setFilteredTodos(filteredList)
    };

    const handleCheckboxChange = event => {
        setIsChecked(event.target.checked)
    }

    const clearData = () => {
        setFilteredTodos([]);
    }

    const updateColorTheme = event => {
        const pickedColor = event.target.style.backgroundColor;
        setColor(pickedColor)
    }

    const finishTodo = id => {
        const toDos = todos.filter(todo => todo.id !== id)
        const finishedTodo = todos.filter(todo => todo.id == id);
        setTodos(toDos);
        setFilteredTodos([...filteredTodos, ...finishedTodo])
    }

    const deleteTodo = id => {
        const toDos = todos.filter(todo => todo.id !== id)
        setTodos(toDos);
    }

  return (
    <div className="container">
        <Colors handleClick = {updateColorTheme} pickedColor = {color}/>
    <div>
        <h2>Goals</h2>
            <ListContainer 
            todos = {todos} 
            finishTodo = {finishTodo}
            deleteTodo ={deleteTodo}/>
    </div>

<div style = {{backgroundColor: color}}>
    <h2>Successes</h2>
        <ListContainer 
            todos = {filteredTodos}
            pickedColor = {color}>

            <animated.div style= {props} className = 'clear-data-btn'>
            {filteredTodos.length == 0 ?
                <span>You haven't {filteredTodos.length == 0 && todos.length === 0 ? 
                    'set' 
                    : 'completed' } any goals yet..</span> 
            :
            <>
                <span>Awesome. You've completed {filteredTodos.length} of your {todos.length + filteredTodos.length} goals for today!</span>
                <button onClick = {clearData}>
                    Clear List
                </button> 
            </>
             }
            </animated.div>
        </ListContainer>
      </div>  

    <div className="form">
        <TodoForm addTodo={addTodo} /> 
            <div className="checkbox">
                <label htmlFor="important">..but at least this is done.</label>
                <input 
                    type="checkbox" 
                    id='important' 
                    checked = {checked}
                    onChange = {handleCheckboxChange} />
                    <span class="checkmark"/>
                </div>
        </div>
    </div>
  );
}
  export default Layout;