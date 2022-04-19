const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const age = entrants.reduce((acc, element) => {
    let resultado;
    if (element.age < 18) {
      resultado = { child: acc.child + 1, adult: acc.adult, senior: acc.senior };
    }
    if (element.age < 50 && element.age >= 18) {
      resultado = { child: acc.child, adult: acc.adult + 1, senior: acc.senior };
    }
    if (element.age >= 50) {
      resultado = { child: acc.child, adult: acc.adult, senior: acc.senior + 1 };
    }
    return resultado;
  }, { child: 0, adult: 0, senior: 0 });
  return age;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const idade = countEntrants(entrants);
  const valueChild = idade.child * data.prices.child;
  const valueAdult = idade.adult * data.prices.adult;
  const valueSenior = idade.senior * data.prices.senior;
  return valueChild + valueAdult + valueSenior;
}

module.exports = { calculateEntry, countEntrants };
