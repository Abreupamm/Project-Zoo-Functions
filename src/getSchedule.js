const data = require('../data/zoo_data');

const everyDays = {};

const funcMonday = () => {
  const monday = {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return monday;
};

function animals(day) {
  const animais = [];
  data.species.forEach((specie) => {
    if (specie.availability.includes(day)) {
      animais.push(specie.name);
    }
  });
  return animais;
}

function hoursEndAnimals(day) {
  if (day === 'Monday') {
    everyDays.Monday = funcMonday().Monday;
  } else {
    everyDays[day] = {};
    const { open, close } = data.hours[day];
    everyDays[day].officeHour = `Open from ${open}am until ${close}pm`;
    everyDays[day].exhibition = animals(day);
  }
  return everyDays;
}

function everyHoursEndAnimals(days) {
  days.forEach((day) => hoursEndAnimals(day));
  return everyDays;
}

function dyasAnimal(scheduleTarget) {
  const animal = data.species.find((specie) => specie.name === scheduleTarget);
  return animal.availability;
}

function getSchedule(scheduleTarget) {
  const everyAnimals = data.species.map((animal) => animal.name);
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  let result;
  if (everyAnimals.includes(scheduleTarget)) {
    result = dyasAnimal(scheduleTarget);
  } else if (days.includes(scheduleTarget) && scheduleTarget !== 'Monday') {
    result = {};
    result[scheduleTarget] = hoursEndAnimals(scheduleTarget)[scheduleTarget];
  } else if (scheduleTarget === 'Monday') {
    result = funcMonday();
  } else {
    result = everyHoursEndAnimals(days);
  }
  return result;
}

module.exports = getSchedule;
