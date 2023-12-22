import React, { useState } from 'react'

export const DataReusable = ({ id, icon, company, position, year, description, point }) => {
    const [toggle, setToggle] = useState(0)
    const toggleTab = (index) => {
        setToggle(index)
    }
  return (
    <div className="experience__content">
        <div>
            <i className={"uil uil-"+ icon +" experience__icon"}></i>
            <h3 className="experience__title">
                {position.split('.').map((word, index) => (
                    <React.Fragment key={index}>
                    {word}
                    {index !== position.split('.').length - 1 && <br />}
                    </React.Fragment>
                ))}
            </h3>
            <p className="experience__subtitle">{company}</p>
            <span className="experience__subtitle">{year}</span>
        </div>

        <span className="experience__button" onClick={()=> toggleTab(1)}>
            View More <i className="uil uil-arrow-right experience__button-icon"></i>
        </span>

        <div className={toggle === 1 ? "experience__modal active-modal" :"experience__modal"}>
            <div className="experience__modal-content">
                <i className="uil uil-times experience__modal-close" onClick={()=> toggleTab(0)}></i>
                <h3 className="experience__modal-title">{position.replace('.',' ')}</h3>
                <p className="experience__modal-description">{description}</p>

                <ul className="experience__modal-experiences grid">
                    {
                        point?.map((data,i) => {
                            return (
                            <li  key={i} className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">{data}</p>
                            </li>                                
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    </div>
  )
}
