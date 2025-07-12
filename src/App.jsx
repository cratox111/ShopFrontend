import { Route, Routes, Navigate } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login' 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App