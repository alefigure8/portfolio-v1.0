import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

{/*
    MENSAJE DE CONSOLA
*/}
console.log(
    `%c🚀 Realizado con React y Tailwinds 🚀\n%c💻 Alejandro Gomez Nieto\n%c🎮 Programador Backend`,
    'color: #48d0f8; font-weight: bold; text-decoration: underline; font-size: 20px;',
    'color: #fac000; font-weight: bold; font-size: 20px;',
    'color: #5eead4; font-weight: bold; font-size: 20px;',
  );

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
