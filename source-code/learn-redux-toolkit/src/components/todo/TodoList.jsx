import React from 'react'
import { useSelector } from 'react-redux'

export default function TodoList() {
    const list = useSelector(state => state.todoReducer.todoList)
    return (
        <div>
            <div>TODO</div>
            {
                list.map(item => <div key={item.id}>{item.text}</div>)
            }
        </div>
    )
}
