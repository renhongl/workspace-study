

import { configureStore } from "@reduxjs/toolkit"

import todoReducer from './components/todo/slice'

const store = configureStore({
    reducer: {
        todoReducer
    },
})

export default store