import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import AdminDashboard from './pages/AdminDashboard';

import UserDashboard from './pages/UserDashboard';
import { PrivateRoute } from './components/PrivateRoute';
import AddCategory from './pages/AddCategory';

const App = () => {
  return (
    <div >
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/admin/dashboard' element={<PrivateRoute role='admin'><AdminDashboard/></PrivateRoute>}/>
          <Route path='/user/dashboard' element={<PrivateRoute role='user'><UserDashboard/></PrivateRoute>}/>
          <Route path="/admin/add-category" element={<AddCategory />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App