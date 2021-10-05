const createDot = (state, i, partOfDay) => {
    let allDegrees = [];

    if (partOfDay === 'm') {
        allDegrees = state.map(el => {
            return el.mTemp;
        });
    } else if (partOfDay === 'n') {
        allDegrees = state.map(el => {
            return el.nTemp;
        });
    }

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

    if (partOfDay === 'm') {
        if (i === 0) {
            top = 45;
        } else {
            top = 45 + (state[0].mTemp - state[i].mTemp) * difference;
        }
    } else if (partOfDay === 'n') {
        if (i === 0) {
            top = 45;
        } else {
            top = 45 + (state[0].nTemp - state[i].nTemp) * difference;
        }
    }

    return top;
};

export default createDot;