import React from "react";
import style from "./Block.module.css"
import facebook1 from "./../../assets/img/Facebook.jpg"

export const Facebook=()=>{
    const facebook = {
        backgroundImage: `url(${facebook1})`,
    }
    return <div className={style.spanGeneral} style={facebook}></div>
}