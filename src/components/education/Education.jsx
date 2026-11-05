import React from 'react'
import "../experience/Experience.css"
import { DataReusable } from '../experience/DataReusable'
import { dataEducation } from '../../Data'

const Education = () => {
  return (
    <section className="experience section" id="education">
        <h2 className="section__title">Education</h2>
        <span className="section__subtitle">Academic Background</span>

        <div className="experience__container container grid">
           {
            dataEducation?.slice().reverse().map((data,i) => {
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

export default Education
