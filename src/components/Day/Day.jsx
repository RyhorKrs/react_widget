import createDot from "../../actions/createDot";

let Day = (props) => {
  let morningTop = createDot(props.state.days, props.index, "m");
  let nightTop = createDot(props.state.days, props.index, "n");

  return (
    <div className="bodyItem">
      <div className="day">
        {props.day} <br />
        {props.date}
      </div>
      <div className="morningImg">
        <img src={props.mImg} alt="Current weather" />
      </div>
      <div className="morningTemp">
        <span style={{ top: morningTop - 25 + "px" }}>{props.mTemp}&deg;</span>
        <svg className="morningDot" width="10" height="10" style={{ top: morningTop + "px" }}>
          <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <div className="nightTemp">
        <span style={{ top: nightTop - 25 + "px" }}>{props.nTemp}&deg;</span>
        <svg className="nightDot" width="10" height="10" style={{ top: nightTop + "px" }}>
          <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <div className="nightImg">
        <img src={props.nImg} alt="Current weather" />
      </div>
    </div>
  );
};

export default Day;
