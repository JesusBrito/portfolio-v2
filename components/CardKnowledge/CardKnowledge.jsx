import style from './CardKnowledge.module.scss'
import React from "react";

const CardKnowledge = ({icon, title, text, classIcon}) => {
    return(
        <React.Fragment>
            <div className={style.card_header}>
                <div className={classIcon}><i className={icon}/></div>
                <p>{title}</p>
            </div>
            <div className={style.card_body}>
                <div dangerouslySetInnerHTML={{__html: text}}/>
            </div>

        </React.Fragment>
    )
}

export default CardKnowledge