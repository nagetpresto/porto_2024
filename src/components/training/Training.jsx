import React from 'react'
import "../experience/Experience.css"
import { DataReusable } from '../experience/DataReusable'
import { dataTraining } from '../../Data'

const Training = () => {
  return (
    <section className="experience section" id="training">
        <h2 className="section__title">Training & Certifications</h2>
        <span className="section__subtitle">Courses & Certificates</span>

        <div className="experience__container container grid">
           {
            dataTraining?.slice().reverse().map((data,i) => {
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

export default Training
