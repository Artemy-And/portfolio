import React from 'react';
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css";





export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>

                </div>
            </div>


        </div>
    );
}
