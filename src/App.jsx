import './App.css';
import { Hero } from './components/Hero';
import { Route , Routes} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;