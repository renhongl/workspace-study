
import TodoList from './components/todo/TodoList'
import AddTodo from './components/todo/AddTodo'
import store from './store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <TodoList></TodoList>
        <AddTodo></AddTodo>
      </div>
    </Provider>
  )
}

export default App
