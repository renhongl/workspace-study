import './style.css'

import { TodoList, AddTodo } from './src/components'

new TodoList(document.querySelector('.list'))
new AddTodo(document.querySelector('.action'))
