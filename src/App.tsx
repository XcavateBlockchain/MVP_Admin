import { Routes, Route } from 'react-router-dom'

import './index.css'
import Home from './pages/Home'
import ToAttest from './pages/credentials/ToAttest'
import Attested from './pages/credentials/Attested'
import CredentialDetail from './pages/credentials/Detail'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/credentials/to-attest' element={<ToAttest />} />
      <Route path='/credentials/attested' element={<Attested />} />
      <Route path='/credentials/credential' element={<CredentialDetail />} />
    </Routes>
  )
}

export default App
