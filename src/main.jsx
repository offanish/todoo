import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/reset.css'
import './index.css'
import GlobalStyles from './components/styled/Global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <App />
  </>
)
