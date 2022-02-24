import React from 'react'
import SupportImg from '../../assest/support.svg';

function Support() {
  return (
    <div className="container">
      <p className="h2 mt-3">SUPPORT US</p>
      <hr className="divider" />
      <div className="row m-4 p-4 ">
        <div className="col-12 col-md-6 mt-4 order-2 order-md-1">
          
          <p>We're developing awesome and scalable applications for Open Source Applications and Applications
            <strong> Now We've Started Developing business Application</strong>
            We hope you'll encourage to us with your contributions.
          </p>
          <button className="btn btn-primary m-3">Support Open Source Contribution</button>
          <button className="btn btn-primary ">Share</button>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2">
          <img className="img-fluid p-3" src={SupportImg} alt="Support image"/>
        </div>
      </div>
    </div>
  )
}

export default Support;