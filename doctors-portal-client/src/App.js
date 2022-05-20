import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appoinement/Appointment';
import Footer from './Pages/Footer/Footer';
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
     <Footer></Footer>
    </div>
  );
}

export default App;
