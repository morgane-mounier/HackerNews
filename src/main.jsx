import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path="/:search/:idPage"  element={<App />} />
      </Routes>
    </BrowserRouter>
  
  </Provider>,
)
