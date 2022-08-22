import React from 'react'
import Line from '../line-dec.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faTwitter, faTiktok, faSkype} from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const SingleTeacherDesc = () => {
  return (
    <div className="col-md-7">
      <div className="single-teacher__desc">
         <div className="single-teacher__header">
            <h3>Ayla Mamedova</h3>
            <span>İnformatika müəllimi</span>
            <img src={Line} />
         </div>
         <div className="single-teacher__icons">
            <ul>
               <li><a href='#'><FontAwesomeIcon className='single-teacher__icon' icon={faFacebookF} size="x"/></a></li>
               <li><a href='#'><FontAwesomeIcon className='single-teacher__icon'icon={faInstagram} size="x"/></a></li>
               <li><a href='#'><FontAwesomeIcon className='single-teacher__icon' icon={faTwitter} size="x"/></a></li>
               <li><a href='#'><FontAwesomeIcon className='single-teacher__icon' icon={faTiktok} size="x"/></a></li>
            </ul>
         </div>
         <div className="single-teacher__text">
            
            <h4>MC office teacher</h4>
            <p>İT Brains Academy</p>
            <ul>
               <li><FontAwesomeIcon className='single-teacher__contact' icon={faPhone} size="x"/>910-213-7890</li>
               <li><FontAwesomeIcon className='single-teacher__contact' icon={faEnvelope} size="x"/>Aylam@gmail.com</li>
               <li><FontAwesomeIcon className='single-teacher__contact' icon={faSkype} size="x"/>Ayla Mamedova</li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default SingleTeacherDesc