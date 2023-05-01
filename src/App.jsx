import { useState, useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Todo from './components/Todo'
import StyledTodos from './components/styled/Todos.styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const todosFromStorage = JSON.parse(localStorage.getItem('todos')) || []

const App = () => {
  const [todos, setTodos] = useState(todosFromStorage)
  const [newTodo, setNewTodo] = useState('')
  const newTodoRef = useRef(null)

  const createNewTodo = () => {
    if (newTodo) {
      const newTodos = [
        {
          id: uuid(),
          title: newTodo,
          completed: false,
        },
        ...todos,
      ]
      localStorage.setItem('todos', JSON.stringify(newTodos))
      setTodos(newTodos)
      setNewTodo('')
    }
  }
  const handleEditTodo = (id, value) => {
    const newTodos = [...todos]
    newTodos[id].title = value
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
  }
  const handleCheckTodo = (id) => {
    const newTodos = [...todos]
    newTodos[id].completed = !newTodos[id].completed
    setTodos(newTodos)
  }
  const handleDeleteTodo = (id) => {
    const newTodos = [...todos]
    newTodos.splice(id, 1)
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  useEffect(() => {
    newTodoRef.current.focus()
  }, [])

  return (
    <div className='main-container'>
      <header>
        <h1>Todoo</h1>
        <p>Boost your productivity with our feature-rich task manager</p>
      </header>
      <StyledTodos>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='create-todos'>
            <input
              ref={newTodoRef}
              type='text'
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder='Create a new todo'
            />
            <button onClick={createNewTodo}>Add Todo</button>
          </div>
        </form>
        <TransitionGroup className='todos-container'>
          {todos.map((todo, index) => (
            <CSSTransition key={todo.id} timeout={400} classNames='todo'>
              <Todo
                key={todo.id}
                id={index}
                title={todo.title}
                checked={todo.completed}
                handleCheckTodo={handleCheckTodo}
                handleEditTodo={handleEditTodo}
                handleDeleteTodo={handleDeleteTodo}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
        {!todos.length && <h3 className='no-todos'>No todos yet</h3>}
      </StyledTodos>
      <footer>
        <p>
          Created by{' '}
          <a target='_blank' href='https://github.com/offanish'>
            Anish Gautam
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
