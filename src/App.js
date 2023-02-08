import './App.css';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Inspirations from './components/pages/Inspirations';
import { HashRouter as Router, Route, Routes, Link }from 'react-router-dom';

function App() {
    return (
        <div className = "Main">
            <Router>
                <div>
                    <ul>
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
                        <Link to="/inspirations">Inspirations</Link>
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
                    path="/inspirations"
                    element = {<Inspirations/>}
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


//     < >
//       <Nav setCurrentPage = {setCurrentPage}/>
//       {currentPage === "About" && <About />}
//       {currentPage === "Projects" && <Portfolio />}
//       {currentPage === "Contact" && <Contact />}
//       <Image someimage="http://placekitten.com/200/300" />
      

     

//       <Contact />
//     </>
//   );
// }
