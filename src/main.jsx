import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './components/Error404.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path="/:idPage/:search"  element={<App />} />
        <Route path="*"  element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  
  </Provider>,
)
