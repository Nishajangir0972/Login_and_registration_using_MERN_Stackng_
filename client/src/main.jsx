import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './app.css'
import Login from './Login.jsx'
import {Routes , Route , BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/register' element={<App/>} ></Route>
    <Route path='/login ' element={<Login/>} ></Route>

  </Routes>
  </BrowserRouter>
)
