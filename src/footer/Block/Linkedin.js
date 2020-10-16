import React from "react";
import style from "./Facebook.module.scss"
import facebook1 from "./../../assets/img/Facebook.jpg"
import {faFacebook, faFacebookF, faFacebookSquare, faJs} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Craig=()=>{
    const facebook = {
        backgroundImage: `url(${facebook1})`,
    }
    return <div className={style.spanGeneral}>
        <FontAwesomeIcon icon={faFacebookSquare} className={style.faJs} />
    </div>
}