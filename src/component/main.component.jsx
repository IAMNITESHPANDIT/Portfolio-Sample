import React from 'react'
import Diamond from '../assest/programming.svg';
import Typical from  'react-typical';
function Main() {
  return (
    <div className="container">
      <div className="row pt-3">
        <div className="col-12 pt-5 text-center col-md-6">
            <div className="row">
              <div className="col-md-2 col-12 text-md-end p-0">
                <h1>I'm</h1>
              </div>
              <div className="col-md-10 col-12 pt-2 text-start">

                <h1 className="text-center text-md-start">
                <Typical className="myText h2" loop={Infinity}
              steps={[
                "Frontend Developer ",
                2000,
                "React Developer  👨‍💻",
                2000,
                "Android Developer ",
                2000,
                "Web Developer",
                2000,
                "Self-Taught Developer 💻",
                2000,
                
              ]}
                />
                </h1>
              </div>
              <p className="p-2 ">Frontend developer. I enjoy developing scalable web applications with intuitive UX accompanied by simple UI. A web application is worthless without these principles.
                I have learned and continue to learn mostly on my own. I set myself challenges beyond what I think is possible because I consider it to be the best way to learn. Some of my projects would not have been possible if it had not been for that philosophy.
                Html ,CSS, JavaScript, React-(redux,context-api etc), SASS, Bootstrap and Node.js among other technologies.
                Passionate about technology, programming, the stock market, sports and technologies for a sustainable future.
                Certificate of National Institute of Electronics and Information Technology (N.I.E.L.I.T) and largely self-taught.
              </p>
            </div>

        </div>
        <div className="col-12 col-md-6 p-4 mb-5">
         <img className="img-fluid" alt="programming logo" src={Diamond}/>
        </div>
      </div>
      
    </div>
  )
}

export default Main