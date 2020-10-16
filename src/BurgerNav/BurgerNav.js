import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import style from './Nav.module.css';

export function Nav() {
    return (
        <div className={style.nav}>
       {/*    <a href="">About</a>*/}
       {/*<a href="#projects">Skills</a>*/}
            <Link
                activeClass={style.active}
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >About</Link>
            <Link
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Skills</Link>
            <Link
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Projects</Link>
            <Link
                activeClass={style.active}
                to="contact"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Contact</Link>

           {/*<a  href='#projects'>Projects</a>*/}
           {/*<a href="">Contact</a>*/}


        </div>
    );
}

