import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Passwordreset from './components/Passwordreset';
import Dashboard from './components/Dashboard';
import ResetPasswordPage from './components/ResetPasswordPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/register' element={<SignUp/>} />
          <Route path='/resetpassword' element={<Passwordreset/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/reset-password-page' element={< ResetPasswordPage/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
