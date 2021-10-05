import rain from "./../images/rain.png";
import thunder from "./../images/thunder.png";
import cloud from "./../images/cloud.png";
import moon from "./../images/moon.png";

let state = {
    days: [
        {id: 1, day: 'Вчера', date:"06.06", mImg: rain, nImg: cloud, mTemp: 23, nTemp: 13},
        {id: 2, day: 'Сегодня', date:"07.06", mImg: rain, nImg: moon, mTemp: 23, nTemp: 14},
        {id: 3, day: 'Завтра', date:"08.06", mImg: thunder, nImg: cloud, mTemp: 24, nTemp: 14},
        {id: 4, day: 'Ср', date:"09.06", mImg: rain, nImg: moon, mTemp: 24, nTemp: 13},
        {id: 5, day: 'Чт', date:"10.06", mImg: rain, nImg: moon, mTemp: 22, nTemp: 13},
    ]   
};

export default state;