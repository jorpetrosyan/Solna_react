import './App.css';
import logo from '../src/objectPic/up/solana.png';
import { NavLink, Routes, Route } from 'react-router-dom';
import { SlArrowDown } from "react-icons/sl";
import First from './home/First';
import Footer from './Footer';
// Ejayin, For Pages;
import Learn from './learn/Learn';
import Build from './build/Build';
import NetWork from './netWork/NetWork'
import Comunnity from './comunnity/Comunnity';

function App() {
  return (
    <div className="App">
        <header>
            <div className="box">
                <NavLink to='/'><img src={logo} alt="" /></NavLink>
                <ul>
                  <NavLink to='/learn'>Learn <SlArrowDown /></NavLink>
                  <NavLink to='/build'>Build <SlArrowDown /></NavLink>
                  <NavLink to='/netWork'>Network <SlArrowDown /></NavLink>
                  <NavLink to='/comunnity'>Community <SlArrowDown /></NavLink>
                </ul>
            </div>
        </header>
        <Routes>
            <Route path='/'      element={<First />}></Route>
            <Route path='/learn' element={<Learn />}></Route>
            <Route path='/build' element={<Build />}></Route>
            <Route path='/netWork' element={<NetWork />}></Route>
            <Route path='/comunnity' element={<Comunnity />}></Route>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
