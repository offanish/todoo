import { CSSTransition } from 'react-transition-group'
import { useEffect, useRef, useState } from 'react'
import StyledTodo from './styled/Todo.styled'

const Todo = ({
  title,
  checked,
  id,
  ref,
  handleCheckTodo,
  handleDeleteTodo,
  handleEditTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newTodo, setNewTodo] = useState(title)
  const inputRef = useRef()

  const handleSetEditTodo = () => {
    setIsEditing(!isEditing)
  }
  const handleCancelEditTodo = () => {
    setIsEditing(false)
    setNewTodo(title)
  }
  const handleSaveEditTodo = () => {
    if (newTodo !== title) {
      handleEditTodo(id, newTodo)
    }
    setIsEditing(false)
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus()
    }
    setNewTodo(title)
  }, [isEditing])

  return (
    <StyledTodo ref={ref}>
      <div className='todo-title-container'>
        <div className='checkbox-container'>
          <input
            type='checkbox'
            className='checkbox-input'
            checked={checked}
            id={`checkbox-input-${id}`}
            onChange={() => handleCheckTodo(id)}
          />
          <label
            className='checkbox-label'
            htmlFor={`checkbox-input-${id}`}
          ></label>
        </div>
        {!isEditing ? (
          <h2 className={`${checked && 'crossed'}`}>{title}</h2>
        ) : (
          <input
            spellCheck='false'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            ref={inputRef}
            type='text'
            className='edit-todo'
          />
        )}
      </div>
      {!isEditing ? (
        // edit and delete buttons
        <div className='buttons'>
          <button onClick={() => handleSetEditTodo()}>
            <i className='fa-solid fa-pen-to-square'></i>
          </button>
          <button onClick={() => handleDeleteTodo(id)}>
            <i className='fa-solid fa-trash'></i>
          </button>
        </div>
      ) : (
        // cancel and save buttons
        <div className='buttons'>
          <button onClick={() => handleCancelEditTodo()}>
            <i className='fa-solid fa-xmark'></i>
          </button>
          <button onClick={() => handleSaveEditTodo(id)}>
            <i className='fa-solid fa-check'></i>
          </button>
        </div>
      )}
    </StyledTodo>
  )
}

export default Todo
