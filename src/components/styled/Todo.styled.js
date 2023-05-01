import styled from 'styled-components'

const StyledTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background-color: #f9ddbb;
  border-radius: 5px;
  padding: 1rem;

  .todo-title-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .buttons {
    display: flex;
    gap: 10px;
  }

  button {
    background-color: transparent;
    border: none;
    color: #474747;
    border-radius: 5px;
    padding: 0.4rem 0.8rem;
    transition: 0.2s;
  }
  button:hover {
    background-color: #ffa559;
  }
  h2 {
    font-weight: 500;
  }

  .edit-todo {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 1.5rem;
    color: #474747;
  }
  .crossed {
    text-decoration: line-through;
    text-decoration-color: #ff6000;
    transition: 0.2s;
  }

  .fa-xmark,
  .fa-trash {
    color: #e53e2c;
  }
  .fa-check {
    color: green;
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 1rem;
    }
    .edit-todo {
      font-size: 1rem;
    }
    .fa-solid {
      font-size: 0.9rem;
    }
  }
`

export default StyledTodo
