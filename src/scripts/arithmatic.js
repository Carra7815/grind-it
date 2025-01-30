function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// A + B = C

function add([minA, maxA, minB, maxB, minC, maxC]) {
  var C = 0;
  do {
    let A = randint(minA, maxA);
    let B = randint(minB, maxB);
    C = A + B;
  } while (C > maxC || C < minC);
  return [C];
}

// A - B = C

function sub([minA, maxA, minB, maxB, minC, maxC]) {
  var C = 0;
  do {
    let A = randint(minA, maxA);
    let B = randint(minB, maxB);
    C = A - B;
  } while (C > maxC || C < minC);
  return [C];
}

// A * B = C

function mul([minA, maxA, minB, maxB, minC, maxC]) {
  var C = 0;
  do {
    let A = randint(minA, maxA);
    let B = randint(minB, maxB);
    C = A * B;
  } while (C > maxC || C < minC);
  return [C];
}

// A / B = C

function div([minA, maxA, minB, maxB, minC, maxC]) {
  var C = 0;
  do {
    let A = randint(minA, maxA);
    let B = randint(minB, maxB);
    C = A / B;
  } while (C > maxC || C < minC || C % 1 != 0);
  return [C];
}

const arithmatic = [
  {
    id: 1,
    name: "Addition",
    description: "lala Reactsdfsd lalaloooo",
    options: [],
    code: add,
  },
  {
    id: 2,
    name: "Subtraction",
    description: "Engaging with local programs to promote STEM",
    options: [],
    code: sub,
  },
  {
    id: 3,
    name: "Multiplication",
    description: "Hands-on learning with cutting-edge robotics",
    options: [],
    code: mul,
  },
  {
    id: 4,
    name: "Division",
    description: "Hands-on learning with cutting-edge robotics",
    options: [],
    code: div,
  },
];

export default arithmatic;
