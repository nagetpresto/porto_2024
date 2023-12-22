import React from 'react'
import "./Experience.css"
import { DataReusable } from './DataReusable'
import { dataExperience } from '../../Data'

const Experience = () => {   

  return (
    <section className="experience section" id="experience">
        <h2 className="section__title">Experience</h2>
        <span className="section__subtitle">Employment History</span>

        <div className="experience__container container grid">
           {
            dataExperience?.slice().reverse().map((data,i) => {
                return (
                    <DataReusable
                        key={i}
                        {...data}
                    />
                )
            })
           }
        </div>
    </section>
  )
}

export default Experience