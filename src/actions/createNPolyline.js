const createNPolyline = (state) => {
    let allDegrees = state.map(el => {
        return el.n_temp;
    });

    allDegrees.sort((a,b) => a-b);

    let difference = allDegrees[allDegrees.length-1] - allDegrees[0];

    if (difference < 7) {
        difference = 10;
    } else if (difference >= 7 && difference < 15) {
        difference = 5;
    } else if (difference >= 15 && difference < 25) {
        difference = 2;
    } else {
        return;
    }

    let result = '';

    for (let i = 0; i < state.length; i++) {
        if (i === 0) {
            let x = 50;
            let y = 50;

            result += `${x},${y} `;
        } else {
            let x = 50 + 100 * i;
            let y = 50 + (state[0].n_temp - state[i].n_temp) * difference;

            result += `${x},${y} `;
        }
    }

    return result;
};

export default createNPolyline;