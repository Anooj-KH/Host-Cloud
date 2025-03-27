import About from './components/About/about';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import OurService from './components/Service/ourservice';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Home />} ></Route>
    <Route path='/about' element={<About />} ></Route>
    <Route path='/service' element={<OurService />} ></Route>
    <Route path='/contact' element={<Contact />} ></Route>
    <Route path='/login' element={<Login/>} ></Route> 
    <Route path='/signup' element={<Signup />} ></Route>
    
    </>
  )
)

export default router;
