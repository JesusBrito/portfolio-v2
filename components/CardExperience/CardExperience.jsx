
const CardExperience = ({job, company, description}) => {
    return(
        <div className={style.card}>
            <div className={style.card_header}>
                <p>{job}</p>
                <p>{company}</p>
                <div/>
            </div>
            <div className={style.card_body}>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default CardExperience