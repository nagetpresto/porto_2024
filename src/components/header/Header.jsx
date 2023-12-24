import React, { useState } from "react";
import "./Header.css"

const Header = ({activeNav, setActiveNav}) => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")

        if(this.scrollY >= 80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })

    const[Toggle, showMenu] = useState(false)
    const handleSetActiveNav = (val) => {
        setActiveNav(val);
      };

    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Bilqist</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" 
                            onClick={()=> handleSetActiveNav('#home')} 
                            className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={()=> handleSetActiveNav('#about')} 
                            className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#experience" 
                            onClick={()=> handleSetActiveNav('#experience')} 
                            className={activeNav === "#experience" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>
                                Experience
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#project"
                            onClick={()=> handleSetActiveNav('#project')} 
                            className={activeNav === "#project" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i>
                                Project
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skill" onClick={()=> handleSetActiveNav('#skills')} 
                            className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i>
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={()=> handleSetActiveNav('#contact')} 
                            className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                    
                    <i class="uil uil-times nav__close" onClick={() => showMenu (!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
