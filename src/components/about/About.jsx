import React from 'react'
import "./About.css"
import {Data} from './Data'
import { dataAboutMe} from '../../Data'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            {/* <div className="about__Ed">
              {
                  dataEducation?.map((data,i) => {
                      return (
                          <Education
                              key={i}
                              {...data}
                          />
                      )
                  })
                } 
            </div> */}
           
            <div className="about__data grid">
              <div className="about__info grid">
                {
                  dataAboutMe?.map((data,i) => {
                      return (
                          <Data
                              key={i}
                              {...data}
                          />
                      )
                  })
                }                
              </div>
              
              <p className="about__description">
                Software Engineer with 3+ years of experience building backend systems and workflow automation across various industries. Mechanical engineering graduate turned developer, currently working on a multi-tenant document extraction platform (OCR and LLM) built with ASP.NET Core, PostgreSQL, and RabbitMQ. Experienced in turning business requirements into technical designs and coordinating tasks with design, frontend, and mobile teams.
              </p>
            </div>
        </div>
    </section>
  )
}

export default About