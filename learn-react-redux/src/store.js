

import { createStore, combineReducers } from 'redux'

import { todoReducer, testReducer } from './reducers'

const reducers = combineReducers({
    todoReducer,
    testReducer
})

const store = createStore(reducers)

export default store