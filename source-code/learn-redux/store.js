
import { createStore } from 'redux'

import { todoReducer } from './src/reducers'


const store = createStore(todoReducer)


export default store