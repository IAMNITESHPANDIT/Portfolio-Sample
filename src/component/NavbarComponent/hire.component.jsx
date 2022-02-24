import React from "react";
import androidImg from "../../assest/images/android.jpg";
import ecomImg from "../../assest/images/ecom.jpg";
import monsterImg from "../../assest/images/monster.jpg";
import ossImg from "../../assest/images/oss.jpg";
import portImg from "../../assest/images/port.jpg";


function Hire() {
  return (
    <div className="container">
      <p className="h2 text-center ">Why Should you Hire to Me </p>
      <hr className="divider" />
      <div className="container pt-2">
        <p className="h2 p-2">Projects</p>
        <div className="row row-cols-1 row-cols-md-2 g-4 pb-4 mb-5 myImg">
          <div className="col">
            <div className="card">
              <img src={ecomImg} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title h2 ">
                  E -Commerce Application with React
                </h5>
                <p className="card-text">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aut accusantium animi sit. Voluptatum repellendus eligendi porro, perspiciatis iure error.

                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={portImg} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title h2 ">PortFolio website</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aut accusantium animi sit. Voluptatum repellendus eligendi porro, perspiciatis iure error.

                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={monsterImg} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title h2 ">Monster website - A.P.I</h5>
                <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aut accusantium animi sit. Voluptatum repellendus eligendi porro, perspiciatis iure error.

                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={androidImg} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title h2 ">COPA I.T.I-Android Application</h5>
                <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aut accusantium animi sit. Voluptatum repellendus eligendi porro, perspiciatis iure error.

                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={androidImg} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title h2 ">C.S.A C.T.I-Android Application</h5>
                <p className="card-text">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aut accusantium animi sit. Voluptatum repellendus eligendi porro, perspiciatis iure error.

                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={ossImg} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title h2 ">
                  Open Source Contribution on Github
                </h5>
                <p className="card-text">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aut accusantium animi sit. Voluptatum repellendus eligendi porro, perspiciatis iure error.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hire;
