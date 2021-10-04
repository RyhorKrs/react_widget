const createPolyline = (state) => {

    let firstY = state[0].m_temp;
    
    let result = '';
    /* points="50,50 150,50 250,40 350,40 450,60" */

    for (let i = 0; i < state.length; i++) {
        if (i > 0) {
            let x = 50 + 100*i;
            let y = 50 + (state[0].m_temp - state[i].m_temp)*10;

            result += `${x},${y} `;
        } else {
            let x = 50;
            let y = 50;

            result += `${x},${y} `;
        }
    }

    return `points="${result}"`;
};