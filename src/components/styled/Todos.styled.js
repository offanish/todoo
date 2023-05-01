import styled from 'styled-components'

const StyledTodos = styled.main`
  .no-todos {
    text-align: center;
    font-size: 1.5rem;
    margin: 1rem 0;
    font-weight: 500;
  }
  .todo-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .todo-enter-active {
    opacity: 1;
    transform: translateX(0%);
    transition: opacity 400ms ease-in, transform 400ms ease-in;
  }
  .todo-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  .todo-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 400ms ease-in, transform 400ms ease-in;
  }
`

export default StyledTodos
