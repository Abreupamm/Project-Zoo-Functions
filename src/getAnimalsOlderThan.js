const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.filter((animalSpecie) => animalSpecie.name === animal);
  return specie.every((animal1) => animal1.residents.every((dadosAnimal) => dadosAnimal.age > age));
}

module.exports = getAnimalsOlderThan;
