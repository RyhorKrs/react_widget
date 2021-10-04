import "./WidgetBody.css";
import Day from "./Day/Day";
import createMPolyline from "./../actions/createMPolyline";
import createNPolyline from "./../actions/createNPolyline";

let WidgetBody = (props) => {

    let daysElements = props.state.days.map((el, index) => <Day day={el.day} date={el.date}
            m_temp={el.m_temp} n_temp={el.n_temp}
            m_img={el.m_img} n_img={el.n_img}
            state={props.state} index={index}
    />);

    return (
        <div className="widget_container">
            <h1>Прогноз на 5 дней</h1>
            <div className="widget_body">
                
                {daysElements}

                <svg className="morning_line" width="500" height="100">
                    <polyline points={createMPolyline(props.state.days)} fill="none" stroke="lightgray" strokeWidth="2" />
                </svg>
                <svg className="night_line" width="500" height="100">
                    <polyline points={createNPolyline(props.state.days)} fill="none" stroke="lightgray" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
};

export default WidgetBody;