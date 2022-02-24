import React from 'react'
import Typical from  'react-typical';
import aboutImg from "../../assest/about us.svg";


function About() {
  return (
    <div className="container">
      <div className="m-4 p-4">
       <p className="h1 text-center">About Us</p>
       <hr class="dropdown-divider"/>
       <div className="row p-5">
          <div className="shadow-lg col-12 col-md-5 bg-body m-1 rounded">
              <div className="row">
                <div className="col-6 text-start">
                    <p className="h2">Skills :-</p>
                   <br/>
                    <p className="h2">Github :-</p>
                   <br/>
                    <p className="h2">Linkdin :-</p>
                   <br/>
                    <p className="h2">Insta :-</p>
                  </div>
         <div className="col-6 "> 
             <p className="h2">
                <span>
                  <Typical className="myText h2 text-start" loop={Infinity}
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
                         "Android Dev",
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
          <div className="col-12 col-md-6 m-1 shadow-lg bg-body rounded ">
            <img src={aboutImg} alt="about image" className="img-fluid p-3" />
          </div>
      </div>

      </div>                 
    </div>
  )
}

export default About;