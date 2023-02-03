import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a  href="#Home"  
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
        
      </li>
      <li className="nav-item">
        <a  href="#About" 
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a  href="#Portfolio" 
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item"> 
        <a href="#Inspirations" 
        onClick={() => handlePageChange('Inspirations')} 
        className={currentPage === 'Inspirations' ? 'nav-link active' : 'nav-link'}
        >
          Inspirations
        </a>
      </li>
      <li className="nav-item">
        <a  href="#Contact"
         onClick = {() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'nav-link active': 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>



  );
}



export default Nav;

// const Nav = ({setCurrentPage}) => {

//     const arr = ["About", "Contact", "Projects"]
//   return (
//     <ul>

//         {arr.map(topic => (
//             <li onClick={()=> setCurrentPage(topic)} key={topic}>{topic}</li>
//         ))}
//     </ul>
//   )
// }