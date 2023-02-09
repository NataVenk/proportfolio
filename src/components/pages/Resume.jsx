import React from "react";
import MyComponent from '../anime1';
import Footer from '../Footer';
import ResumeNV from '../pages/resume2023.pdf';

const Resume = () => {
  return (
    <div>
   
   <p>Experience with</p>
      <div>
<ul> 
  
<MyComponent/><li> 
       Adobe Creative Suite
    </li>
    <MyComponent/><li> 
       CSS and HTML
    </li>
    <MyComponent/><li> 
       JavaScript
    </li>
    <MyComponent/><li> 
       React
    </li>
    <MyComponent/><li> 
       Mongo, MySQL and GraphQL
    </li>


</ul>
   
  
      </div>

<a href={ResumeNV} download="Natalia-resume.pdf"> My Resume </a>



      <Footer />
    </div>
  );
};

export default Resume;
