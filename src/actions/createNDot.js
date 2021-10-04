const createMDot = (state, i) => {
    let allDegrees = state.map(el => {
        return el.n_temp;
    });

    allDegrees.sort((a,b) => a-b);

    let difference = allDegrees[allDegrees.length-1] - allDegrees[0];

    if (difference < 8) {
        difference = 10;
    } else {
        return;
    }

    let top = '';

    if (i === 0) {
        top = 45;
    } else {
        top = 45 + (state[0].n_temp - state[i].n_temp) * difference;
    }

    return top;
};

export default createMDot;