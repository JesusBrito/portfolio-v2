import style from './CardExperience.module.scss'
import React from "react";

const CardExperience = ({job, company, description}) => {
    return(
        <React.Fragment>
            <div className={style.card_header}>
                <p>{job}</p>
                <p>{company}</p>
                <div/>
            </div>
            <div className={style.card_body}>
                <p>{description}</p>
            </div>

        </React.Fragment>
    )
}

export default CardExperience