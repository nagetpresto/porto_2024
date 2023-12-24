import React from 'react'

export const Data = ({ id, title, name, level }) => {
  return (
    
    <div className="skill__content">
        <h3 className="skill__title">{title}</h3>
        <div className="skill__box grid">
                {
                    name?.map((data,i) => {
                        return (
                            
                            <div key={i} className="skill__data">
                                <i className="bx bx-badge-check"></i>

                                <div>
                                    <h3 className="skill__name">{data}</h3>
                                    <span className="skill__level">{level[i]}</span>
                                </div>
                            </div>    
                                            
                        )
                    })
                }      
        </div>         
    </div>
  )
}
