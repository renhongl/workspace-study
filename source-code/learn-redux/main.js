import './style.css'

import { TodoList, AddTodo } from './components'

new TodoList(document.querySelector('.list'))
new AddTodo(document.querySelector('.action'))
