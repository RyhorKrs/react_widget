import rain from "./../images/rain.png";
import thunder from "./../images/thunder.png";
import cloud from "./../images/cloud.png";
import moon from "./../images/moon.png";

let state = {
    days: [
        {id: 1, day: 'Вчера', date:"06.06", m_img: rain, n_img: cloud, m_temp: 23, n_temp: 13},
        {id: 2, day: 'Сегодня', date:"07.06", m_img: rain, n_img: moon, m_temp: 23, n_temp: 14},
        {id: 3, day: 'Завтра', date:"08.06", m_img: thunder, n_img: cloud, m_temp: 24, n_temp: 14},
        {id: 4, day: 'Ср', date:"09.06", m_img: rain, n_img: moon, m_temp: 24, n_temp: 13},
        {id: 5, day: 'Чт', date:"10.06", m_img: rain, n_img: moon, m_temp: 22, n_temp: 13},
    ]
    
};

export default state;