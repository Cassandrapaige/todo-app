import React, { Fragment } from 'react'
import {animated, useSpring, config} from 'react-spring'

import './todo-item.styles.scss'

const TodoItem = ({item, finishTodo, deleteTodo}) => {

    const props = useSpring({
        from: {
            opacity: 0,
            transform: 'translateY(-20px)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0)',
        },
        config: config.gentle
    })

    return (
            <animated.div className = 'item' style = {props}>
                <h3>{item.todo}</h3>
                <div className="buttons">
                    <button onClick = {() => {finishTodo(item.id)}}>
                        <i className="fas fa-check-circle"></i>
                    </button>
                    <button onClick = {() => {deleteTodo(item.id)}}>
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </animated.div>
    )
}

export default TodoItem