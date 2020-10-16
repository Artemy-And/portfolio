import React from 'react';
import style from "./Works.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {Work} from './work/Work'


export function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <div className={style.title}>
                    <h2>Projects</h2>
                </div>

                <div className={style.works}>
                    <Work title={'Social Network'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Work title={'TodoList'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>  <Work title={'TodoList'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>  <Work title={'TodoList'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>


                </div>
            </div>


        </div>
    );
}
