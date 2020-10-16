import React from 'react';
import style from "./Works.module.scss"
import styleContainer from "../common/styles/Container.module.css";
import {Work} from './work/Work'
import {Title} from "../common/components/title/Title";
import socialPhoto from "./../assets/img/logistics-socialnet.jpg"
import  todolistPhoto from "./../assets/img/todolist.jpg"




export function Works() {

    const todoList = {
        backgroundImage: `url(${todolistPhoto})`
    }
    const social = {
        backgroundImage: `url(${socialPhoto})`,
    }


    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <div className={style.title}>
                    <Title text={'Projects'}/>
                    {/*<h2>Projects</h2>*/}
                </div>

                <div className={style.works}>
                    <Work title={'Social Network'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                          style={social}/>
                    <Work title={'TodoList'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}
                          style={todoList}/>
                    <Work title={'TodoList'}style={social}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                    <Work title={'TodoList'}style={social}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>


                </div>
            </div>


        </div>
    );
}
