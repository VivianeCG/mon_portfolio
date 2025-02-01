import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Mentionslegales from './pages/mentionslegales';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mentionslegales' element={<Mentionslegales/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
