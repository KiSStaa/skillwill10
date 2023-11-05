import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../assets/Gabi.jpg'
export const UserProfileCard = () => {
  return (
    <div className="upc">
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={profile_icon} alt="" />
            <div className="profile-title">Gabriela Guimaraes</div>
            <div className="profile-description">Gabriela Braga Guimarães, nickname Gabi, born 19 May, 1994 is a Brazilian professional indoor volleyball player. She plays as an outside spiker.</div>
        </div>
        <div className="profile-buttom"><a href="mailto:Gabiguimaraes@gmail.com">Contact me</a></div>
    </div>
  )
}

export default UserProfileCard