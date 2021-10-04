let Day = (props) => {
    return (
        <div className="body_item">
            <div className="day">
                {props.day} <br />
                {props.date}
            </div>
            <div className="morning_img">
                <img src={props.m_img} alt="Current weather" />
            </div>
            <div className="morning_temp">
                <span>{props.m_temp}&deg;</span>
                <svg className="morning_dot" width="10" height="10">
                    <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2" />
                </svg>
            </div>
            <div className="night_temp">
                <span>{props.n_temp}&deg;</span>
                <svg className="night_dot" width="10" height="10">
                    <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2" />
                </svg>
            </div>
            <div className="night_img">
                <img src={props.n_img} alt="Current weather" />
            </div>
        </div>
    );
};

export default Day;