import { useState } from 'react';
import './App.css';
import {Nav, About, Projects, Contact} from './components';
import Image from './components/Image';

function App() {
const [currentPage, setCurrentPage] = useState("About")

  return (
    < >
      <Nav setCurrentPage = {setCurrentPage}/>
      {currentPage === "About" && <About />}
      {currentPage === "Projects" && <Projects />}
      {currentPage === "Contact" && <Contact />}
      <Image someimage="http://placekitten.com/200/300" />
      <Image someimage="http://placekitten.com/100/300" />
      <Image someimage="http://placekitten.com/300/300" />
    </>
  );
}

export default App;
