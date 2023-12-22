import React from 'react'
import "./About.css"
import Data from './Data'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <div className="about__data grid">
                <Data/>

                <p className="about__description">
                A recent graduate venturing into the development field, I began my career in June 2023 as a Junior Developer proficient in Nintex, JavaScript, and .NET Framework with C# 
                -- actively involved in developing ERP projects.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About