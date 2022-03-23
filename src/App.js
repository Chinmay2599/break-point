import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Login from './screens/Login';

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='signup' element={<Signup />} />
      <Route path='/' element={<Login />} />
    </Routes>
  );
}

export default App;
