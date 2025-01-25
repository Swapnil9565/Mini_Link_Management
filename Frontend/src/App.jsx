import { BrowserRouter as Router ,Routes,Route, Links } from 'react-router-dom'
import './App.css'
import AuthForms from './Components/AuthForms'
import Dashboard from "./Pages/Dashboard"
import LinksPage from "./Pages/LinksPage"
import Analytics from "./Pages/Analytics"
import Settings from './Pages/Settings'
import Home from './Components/Home'
function App() {
  return (
<>
        <Router>
          <Routes>
            <Route path='/' element={<AuthForms/>}/>
            <Route element={<Home/>}>
            <Route path='/dashboard' element={<Dashboard/>}/>      
            <Route path='/links' element={<LinksPage/>}/>
            <Route path='/analytics' element={<Analytics/>}/>
            <Route path='/settings' element={<Settings/>}/>
            </Route>
          </Routes>
        </Router>
</>
  )
}

export default App
