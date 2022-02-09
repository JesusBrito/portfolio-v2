import style from './CardExperience.module.scss'
import React from "react";

const CardExperience = ({job, company, description, icons}) => {
    return(
        <React.Fragment>
            <div className={style.card_header}>
                <p>{job}</p>
                <p>{company}</p>
                <div className={style.divider}/>
                <div className={style.container_brands}>
                    {
                        icons.map((icon, key) => <div key={key} className={icon.class}><i className={icon.icon}/></div>)
                    }
                </div>
            </div>
            <div className={style.card_body}>
                <p>{description}</p>
            </div>

        </React.Fragment>
    )
}

export default CardExperience