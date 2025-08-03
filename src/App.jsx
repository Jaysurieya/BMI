import './App.css';
import { Hero } from './components/Hero';
import { Route , Routes} from 'react-router-dom';


function App() {
  return(
    <Routes>
      <Route path='/' element={<Hero />} />
    </Routes>
  );
}

export default App;