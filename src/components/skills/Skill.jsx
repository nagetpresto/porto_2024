import React from 'react'
import {Data} from './Data'
import "./Skill.css"
import { dataSkill } from '../../Data'

const Skill = () => {
  return (
    <section className="skill section" id="skill">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Strengths & Expertise</span>

        <div className="skill__container container grid">
        {
            dataSkill?.map((data,i) => {
                return (
                    <Data
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

export default Skill