import createMDot from "./../../actions/createMDot";
import createNDot from "./../../actions/createNDot";

let Day = (props) => {

    let morningTop = createMDot(props.state.days, props.index);
    let nightTop = createNDot(props.state.days, props.index);

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
                <span style={{top: morningTop - 25  + 'px'}}>{props.m_temp}&deg;</span>
                <svg className="morning_dot" width="10" height="10" style={{top: morningTop + 'px'}}>
                    <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2" />
                </svg>
            </div>
            <div className="night_temp">
                <span style={{top: nightTop - 25  + 'px'}}>{props.n_temp}&deg;</span>
                <svg className="night_dot" width="10" height="10" style={{top: nightTop + 'px'}}>
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