import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login' 

const App = () => {
    return (
        <Routes>
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
        </Routes>
    )
}

export default App