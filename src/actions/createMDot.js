const createMDot = (state, i) => {
    let allDegrees = state.map(el => {
        return el.m_temp;
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

    let top = '';

    if (i === 0) {
        top = 45;
    } else {
        top = 45 + (state[0].m_temp - state[i].m_temp) * difference;
    }

    return top;
};

export default createMDot;