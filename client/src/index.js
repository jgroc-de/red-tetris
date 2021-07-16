import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './app/App'
import socketIOClient from 'socket.io-client'
//import reportWebVitals from './reportWebVitals'

let socket = socketIOClient(process.env.REACT_APP_ENDPOINT, {reconnectionAttempts: 5})
if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = '*'
}

ReactDOM.render(
  <React.StrictMode>
    <App socket={socket.volatile}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
