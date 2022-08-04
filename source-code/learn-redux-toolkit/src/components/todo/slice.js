

import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: [
            {
                id: 0,
                text: 'some text'
            }
        ]
    },
    reducers: {
        add: (state, action) => {
            state.todoList.push(action.payload)
        }
    }
})

export const fetchData = (params) => {
    console.log(params)
    return (dispatch, getState) => {
        console.log('before fetch', getState())
        setTimeout(() => {
            dispatch(add({
                id: Math.random(),
                text: 'load from api'
            }))
            console.log('after fetch', getState())
        }, 3000)
    }
}

export const { add } = todoSlice.actions

export default todoSlice.reducer