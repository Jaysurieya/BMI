import './App.css';
import { Hero } from './components/Hero';
import { Route , Routes} from 'react-router-dom';
import Stepper from './components/Stepper/Stepper';


function App() {
  return(
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/signup' element={<Stepper />} />
    </Routes>
  );
}

export default App;