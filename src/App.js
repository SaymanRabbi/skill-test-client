import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Components/RequireAuth';
import RequireAuthLogin from './Components/RequireAuthLogin';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#3D4451' }}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<RequireAuth>
          <Home></Home>
        </RequireAuth>}></Route>
        <Route path='/login' element={<RequireAuthLogin>
          <Login></Login>
        </RequireAuthLogin>}></Route>
        <Route path='/register' element={<RequireAuthLogin>
          <Register></Register>
        </RequireAuthLogin>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
