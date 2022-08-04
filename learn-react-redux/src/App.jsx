import './App.css'
import { TodoList, AddTodo } from './components'
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
