import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
function Footer() {
  return (
    <div className="footer bg-secondary p-1 text-white container-fluid fixed-bottom ">
        <div className="container hstack icon-value gap-3">
        <p className="text-center vstack">@Copyright by Iamniteshpandit</p>
        
           <a href="https://github.com/IAMNITESHPANDIT" target="_blank" rel="github">
           <AiFillGithub />
            </a>
           
           <a href="https://www.linkedin.com/in/iamniteshpandit/" target="_blank" rel="Linkdin">
           <BsLinkedin/>
           </a>
           
           <a  href="https://www.instagram.com/iamniteshpandit/" target="_blank" rel="Instagram">
           <AiOutlineInstagram/>
           </a>

        </div>

    </div>
  )
}

export default Footer