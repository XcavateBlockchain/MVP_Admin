import { Routes, Route } from 'react-router-dom'

import './index.css'
import Home from './pages/Home'
import ToAttest from './pages/credentials/ToAttest'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/credentials/to-attest' element={<ToAttest />} />
    </Routes>
  )
}

export default App
