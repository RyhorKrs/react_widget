import "./WidgetBody.css";
import Day from "./Day/Day";
import createPolyline from "../actions/createPolyline";

let WidgetBody = (props) => {
  let daysElements = props.state.days.map( (el, index) => (
    <Day
      day={el.day} date={el.date}
      mTemp={el.mTemp} nTemp={el.nTemp}
      mImg={el.mImg} nImg={el.nImg}
      state={props.state} index={index}
    />
  ));

  return (
    <div className="widgetContainer">
      <h1>Прогноз на 5 дней</h1>
      <div className="widgetBody">
        {daysElements}

        <svg className="polylines" width="500" height="200">
          <polyline points={createPolyline(props.state.days, "m")}
            fill="none" stroke="lightgray" strokeWidth="2" />
          <polyline points={createPolyline(props.state.days, "n")}
            fill="none" stroke="lightgray" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default WidgetBody;
