import './App.css';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import { HashRouter as Router, Route, Routes, Link }from 'react-router-dom';

function App() {
    return (
        <div className = "mainNav">
            <Router>
                <div>
                    
                    <ul className = "border d-flex justify-content-around">
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                        <Link to="/resume">Resume</Link>
                        </li>
                        <li>
                        <Link to="/contact">Contact</Link>
                        </li>
                       
                    </ul>
                </div>
                <Routes>
                    <Route
                    path="/"
                    element = {<Home/>}
                    />
                     <Route
                    path="/about"
                    element = {<About/>}
                    />
                     <Route
                    path="/portfolio"
                    element = {<Portfolio/>}
                    />
                     <Route
                    path="/resume"
                    element = {<Resume/>}
                    />
                     <Route
                    path="/contact"
                    element = {<Contact/>}
                    />



                </Routes>
            </Router>



        </div>
    );
}




export default App;

