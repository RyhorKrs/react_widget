const createDot = (state, i, partOfDay) => {
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

  let top = "";

  if (partOfDay === "m") {
    top = i === 0 ? 45 : 45 + (state[0].mTemp - state[i].mTemp) * difference;
  } else if (partOfDay === "n") {
    top = i === 0 ? 45 : 45 + (state[0].nTemp - state[i].nTemp) * difference;
  }

  return top;
};

export default createDot;
