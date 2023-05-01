import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  
body {
  background-color: #FFE6C7;
  color: #454545;
  font-family: 'Montserrat', sans-serif;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
}
@media (max-width: 600px) {
  body {
    margin-top: 1rem;
  }
}
header {
  margin-bottom: 2rem;
}

h1 {
  color: #FF6000;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    min-height: 95vh;
    max-width: 800px;
    margin: 0 auto;
    .create-todos {
      display: flex;
      margin-bottom: 2rem;
      input {
        width: 100%;
        flex: 4;
        padding: 0.5rem;
        background-color: transparent;
        border: 1px solid #454545;
        border-radius: 5px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      button {
        flex: 1;
        background-color: #FFA559;
        border: 1px solid #454545;
        border-left: none;
        border-radius: 5px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        transition: 0.2s;
      }
      button:hover {
        background-color: #FF6000;
      }
      @media (max-width: 600px) {
      input {
        flex: 3;
      }
  }
      @media (max-width: 400px) {
      input {
        flex: 2;
      }
  }
    }
    .todos-container {
      display: flex;    
      flex-direction: column;
      gap: 10px;
    }
  }
  footer {
    margin-top: auto;
    padding-top: 3rem;
    padding-bottom: 2rem;
    text-align: center;
    a {
      text-decoration-color: #FF6000;
      color: #FF6000;
        }
  }
  
`

export default GlobalStyles
