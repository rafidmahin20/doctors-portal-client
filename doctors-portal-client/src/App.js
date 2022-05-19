import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appoinement/Appointment';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/appointment' element={<Appointment/>}/>
     </Routes>
    </div>
  );
}

export default App;
