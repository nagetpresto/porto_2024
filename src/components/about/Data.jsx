import React from 'react'

const Data = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-award  about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1+ Year Experience</span>
        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">3+ Projects</span>
        </div>

        <div className="about__box">
            <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Base</h3>
            <span className="about__subtitle">Jakarta</span>
        </div>
    </div>
  )
}

export default Data