const data = require('../data/zoo_data');

function funcResponsible(idAnimal) {
  const animalObj = data.species.find((animal) => animal.id === idAnimal);
  let max;
  animalObj.residents.reduce((acc, n, index, array) => {
    let number;
    if (acc > n.age) {
      number = acc;
    } else {
      number = n.age;
      max = array[index];
    }
    return number;
  }, 0);
  return max;
}

function getOldestFromFirstSpecies(id) {
  const employeeObj = data.employees.find((employee) => employee.id === id);
  const responsibleAnimals = employeeObj.responsibleFor;
  const result = funcResponsible(responsibleAnimals[0]);
  return [result.name, result.sex, result.age];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
