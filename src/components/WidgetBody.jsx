import "./WidgetBody.css";

import rain from "./../images/rain.png";
import thunder from "./../images/thunder.png";
import cloud from "./../images/cloud.png";
import moon from "./../images/moon.png";

let WidgetBody = (props) => {
    return (
        <div className="widget_container">
            <h1>Прогноз на 5 дней</h1>
            <div className="widget_body">
                <div className="body_item">
                    <div className="day">
                        Вчера<br />
                        06.06
                    </div>
                    <div className="morning_img">
                        <img src={rain} alt="Current weather" />
                    </div>
                    <div className="morning_temp">
                        <span>23&deg;</span>
                        <svg className="morning_dot" width="10" height="10">
                            <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="night_temp">
                        <span>13&deg;</span>
                        <svg className="night_dot" width="10" height="10">
                            <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="night_img">
                        <img src={cloud} alt="Current weather" />
                    </div>
                </div>
                <div className="body_item">
                    <div className="day">
                        Сегодня <br />
                        07.06
                    </div>
                    <div className="morning_img">
                        <img src={rain} alt="Current weather" />
                    </div>
                    <div className="morning_temp">
                        <span>23&deg;</span>
                        <svg className="morning_dot" width="10" height="10">
                            <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="night_temp">
                        <span>14&deg;</span>
                        <svg className="night_dot" width="10" height="10">
                            <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="night_img">
                        <img src={moon} alt="Current weather" />
                    </div>
                </div>
                <div className="body_item">
                    <div className="day">
                        Завтра <br />
                        08.06
                    </div>
                    <div className="morning_img">
                        <img src={thunder} alt="Current weather" />
                    </div>
                    <div className="morning_temp">
                        <span>24&deg;</span>
                        <svg className="morning_dot" width="10" height="10">
                            <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="night_temp">
                        <span>14&deg;</span>
                        <svg className="night_dot" width="10" height="10">
                            <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="night_img">
                        <img src={cloud} alt="Current weather" />
                    </div>
                </div>
                <div className="body_item">
                    <div className="day">
                        Ср <br />
                        09.06
                    </div>
                    <div className="morning_img">
                        <img src={rain} alt="Current weather" />
                    </div>
                    <div className="morning_temp">
                        <span>24&deg;</span>
                        <svg className="morning_dot" width="10" height="10">
                            <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="night_temp">
                        <span>13&deg;</span>
                        <svg className="night_dot" width="10" height="10">
                            <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="night_img">
                        <img src={moon} alt="Current weather" />
                    </div>
                </div>
                <div className="body_item">
                    <div className="day">
                        Чт <br />
                        10.06
                    </div>
                    <div className="morning_img">
                        <img src={rain} alt="Current weather" />
                    </div>
                    <div className="morning_temp">
                        <span>22&deg;</span>
                        <svg className="morning_dot" width="10" height="10">
                            <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="night_temp">
                        <span>13&deg;</span>
                        <svg className="night_dot" width="10" height="10">
                            <circle r="3" cx="50%" cy="50%" fill="white" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                    <div className="night_img">
                        <img src={moon} alt="Current weather" />
                    </div>
                </div>
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