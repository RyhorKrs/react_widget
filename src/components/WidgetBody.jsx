import "./WidgetBody.css";

import Day from "./Day/Day";

let WidgetBody = (props) => {

    let daysElements = props.state.days.map(el => <Day day={el.day} date={el.date}
            m_temp={el.m_temp} n_temp={el.n_temp}
            m_img={el.m_img} n_img={el.n_img}
    />);
    return (
        <div className="widget_container">
            <h1>Прогноз на 5 дней</h1>
            <div className="widget_body">
                
                {daysElements}

                <svg className="morning_line" width="500" height="100">
                    <polyline points="50,50 150,50 250,40 350,40 450,60" fill="none" stroke="lightgray" strokeWidth="2" />
                </svg>
                <svg className="night_line" width="500" height="100">
                    <polyline points="50,50 150,40 250,40 350,50 450,50" fill="none" stroke="lightgray" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
};

export default WidgetBody;