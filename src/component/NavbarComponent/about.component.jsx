import React from 'react'
import Typical from  'react-typical';

function About() {
  return (
    <div className="container">
       <p className="h1 text-center mt-4 ">About Us</p>
       <hr class="dropdown-divider"/>
      <div className="shadow-lg p-3 mb-5 bg-body mt-5 ms-5 p-4 rounded">
       <div className="row">
         <div className="col-6">
         <p className="h2">Name :-</p>
         <p className="h2">Skills :-</p>
         <p className="h2">Github :-</p>
         <p className="h2">Linkdin :-</p>
         <p className="h2">Insta :-</p>
         </div>
         <div className="col-6">
          
         <p className="h2">
         <Typical className="nameText h2" loop={Infinity}
              steps={[
                "NITESH KUMAR PANDEY",
                1000,
                "KUMAR",
                1000,
                "PANDEY",
                1000,
      
              ]}
              />
         </p>
         <p className="h2">
         <span>
         <Typical className="myText h2" loop={Infinity}
              steps={[
                "Mysql",
                1000,
                "Reactjs",
                1000,
                "Saas",
                1000,
                "C++",
                1000,
                "Python",
                1000,
                "Android Development",
                1000,
                "Data Structures",
                1000,
                "C",
                1000,
                "HTML5",
                1000,
                "Mongo Db",
                1000,
                "Git Bash",
                1000,
                "Problem Solving",
                1000,
                "JavaScript",
                1000,
                "PHP",
                1000,
                "Bootstrap",
                1000,
                
              ]}
              />
         </span>
         </p>
         <br/>

         <a href="https://github.com/IAMNITESHPANDIT">Github</a>
         <br/>
         <br/>
         <a href="https://www.linkedin.com/in/iamniteshpandit/">Linkdin</a>
         <br/>
         <br/>
         <a href="https://www.instagram.com/iamniteshpandit/">Instagram</a>
         </div>
       </div>


      </div>



    </div>
  )
}

export default About;