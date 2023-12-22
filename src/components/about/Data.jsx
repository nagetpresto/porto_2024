import React from 'react'

export const Data = ({ id, icon, title, subtitle }) => {
  return (
      <div className="about__box">
          <i className={"bx bx-"+ icon +"  about__icon"}></i>
          <h3 className="about__title">{title}</h3>
          <span className="about__subtitle">{subtitle}</span>
      </div>    
  )
}

export const Education = ({ id, title, subtitle, date }) => {
  return (
    <div className={id%2 === 0 ? "about__dataEd about__dataEd-right" : "about__dataEd about__dataEd-left"}>
      <div>
        <h3 className="about__dataEd-title">{title}</h3>
        <span className="about__dataEd-subtitle">{subtitle}</span>
        <div className="about__dataEd-calendar">
          <i className="uil uil-calendar-alt">{date}</i>
        </div>
      </div>
      
      {/* <div>
        <span className="about__dataEd-rounder"></span>
        <span className="about__dataEd-line"></span>
      </div> */}
    </div>

  )
}