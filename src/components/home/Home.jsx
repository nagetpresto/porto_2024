import React from 'react'
import "./Home.css"
import Data from './Data'

const Home = ({activeNav, setActiveNav}) => {
  
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <div className="home__img"></div>
                <Data  activeNav={activeNav} setActiveNav={setActiveNav}/>
            </div>

            
        </div>
    </section>
  )
}

export default Home