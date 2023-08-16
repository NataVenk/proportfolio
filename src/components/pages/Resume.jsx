import React from "react";
import Footer from '../Footer';
import ResumeNV from '../pages/resume2023.pdf';

const Resume = () => {
  return (
    <div>
   
   <p className= "skillset">Skill Set</p>
      <div>
<ul className="skillset2"> 
  
    <li> 
       Adobe Creative Suite
    </li>
    <li> 
       CSS and HTML
    </li>
    <li> 
       JavaScript
    </li>
    <li> 
       React
    </li>
    <li> 
       Mongo, MySQL and GraphQL
    </li>


</ul>
   
  
      </div>
      <div class="d-grid gap-2">
      <button type="button " className="btn btn-outline-secondary justify-content-around resumeButton">
        <a href={ResumeNV} style={{ textDecoration: 'none' }} download="Natalia-resume.pdf"> My Resume </a>

        </button>
      </div>


      <Footer />
    </div>
  );
};

export default Resume;
