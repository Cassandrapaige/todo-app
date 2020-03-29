import React, {useEffect, useRef} from 'react'

import './list-container-styles.scss'

import TodoItem from '../todo-item/todo-item.component'

const ListContainer = ({todos, children, pickedColor, finishTodo, deleteTodo}) => {

    const endOfList = useRef(null)

    const scrollToBottom = () => {
        if(todos.length > 5) {
        endOfList.current.scrollIntoView({ 
            behaviour: 'smooth'
        })}
    }

    useEffect(scrollToBottom, [todos])

    return (
        <div className="todo-list-container" style = {{backgroundColor: pickedColor}}>
        {
            todos.map((todo, index) => (
        <TodoItem
            key={index}
            index={index}
            item={todo}
            id={Math.random()}
            finishTodo = {finishTodo}
            deleteTodo = {deleteTodo}
          />
        ))}
            <div ref = {endOfList} />
            {children}
        </div>
    )
}

export default ListContainer