import { Route, Routes } from 'react-router-dom';
import './App.css';
import Component1 from './Component1';
import Navbar from './Navbar';
import Score from './Score';
import Home from './Home';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/component' element={<Component1/>}/> 
      <Route path="/score" element={<Score/>}/>
    </Routes>
    </>
  );
}

export default App;
