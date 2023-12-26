import React from "react";
import Footer from '../Footer';
import ResumeNV from '../pages/ResumeNataliaVenkatesh.pdf';

const Resume = () => {
  return (
    <div>
     <p className= "skillset">Summary</p> 
   <p className="intro"> With over 20 years of progressive experience designing consumer products, I have a proven track record of bringing value to leading retailers like Walmart, Home Depot, and QVC. As a highly organized and self-motivated professional, I approach each project with attention to details and timelines, proactively addressing challenges and ensuring collaborative working relationships with all stakeholders. As a recent Full Stack Developer Bootcamp graduate from UPenn, I have developed expertise in <strong>HTML, CSS, JavaScript, React, Node.js, MySQL, and MongoDB</strong> to build scalable web applications that enable differentiated customer experience</p>
   <p className= "skillset">Technical skills</p>
      
        
<ul className="skillset2"> 

  
    <li> 
    JavaScript, HTML, CSS, SASS, React, Node.js, MySQL, MongoDB, NoSQL
    </li>
    <li> 
    Jira, ALM
    </li>
    <li> 
    Adobe Creative Suit (InDesign, Photoshop, Illustrator)
    </li>
    <li> 
    Microsoft Office (Word, Excel, PowerPoint, Outlook)
    </li>
    <li> 
       Mongo, MySQL and GraphQL
    </li>


</ul>


     <p className= "skillset">Experience</p> 
   <p className="intro"> <strong> Qurate Retail Group (QVC INC.,)</strong>  
   <li>Responsible for Functional and User Acceptance Testing, resulting  in improved customer experience and increased customer satisfaction experience and conversion rate of products on QVC.COM 
      </li>
<li>Formulated  Product Standardization database and integrated the process to create reports and assessment matrixes  for merchants, vendors, and customer service teams</li>
<li>Collaborated with the Vendor Relations team to integrate the knowledge database in the vendor portal, resulting in reducing vendor calls by 40%</li>
</p>
   
<p className="intro"> <strong> NEWELL RUBBERMAID INC.,</strong>  
   <li>Led Product Marketing and managed several product lines for Wal-Mart; identified and developed product offerings based on market basket analysis, consumer research, current trends, and sales volume. 
      </li>
<li>Led a cross-functional team responsible for packaging, product development, and creative projects for a portfolio of ~1500+ SKU’s supporting major retailers.</li>
<li>Extensive experience collaborating with global sourcing (China, Thailand, and Taiwan) matrix methodologies in developing products with quality and efficiency</li>
</p>
      <div>
  
      </div>
      <div class="d-grid gap-2">
      <button type="button " className="btn btn-outline-secondary justify-content-around resumeButton">
        <a href={ResumeNV} style={{ textDecoration: 'none' }} download="ResumeNataliaVenkatesh.pdf"> Download My Resume PDF </a>

        </button>
      </div>


      <Footer />
    </div>
  );
};

export default Resume;
