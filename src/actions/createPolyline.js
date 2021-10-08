const createPolyline = (state, partOfDay) => {
  let allDegrees = [];

  if (partOfDay === "m") {
    allDegrees = state.map(el => el.mTemp);
  } else if (partOfDay === "n") {
    allDegrees = state.map(el => el.nTemp);
  }

  allDegrees.sort((a, b) => a - b);

  let difference = allDegrees[allDegrees.length - 1] - allDegrees[0];

  if (difference < 7) {
    difference = 10;
  } else if (difference >= 7 && difference < 15) {
    difference = 5;
  } else if (difference >= 15 && difference < 25) {
    difference = 2;
  }

  let result = "";

  if (partOfDay === "m") {
    for (let i = 0; i < state.length; i++) {
      if (i === 0) {
        const x = 50;
        const y = 50;

        result += `${x},${y} `;
      } else {
        const x = 50 + 100 * i;
        const y = 50 + (state[0].mTemp - state[i].mTemp) * difference;

        result += `${x},${y} `;
      }
    }
  } else if (partOfDay === "n") {
    for (let i = 0; i < state.length; i++) {
      if (i === 0) {
        const x = 50;
        const y = 150;

        result += `${x},${y} `;
      } else {
        const x = 50 + 100 * i;
        const y = 150 + (state[0].nTemp - state[i].nTemp) * difference;

        result += `${x},${y} `;
      }
    }
  }

  return result;
};

export default createPolyline;
