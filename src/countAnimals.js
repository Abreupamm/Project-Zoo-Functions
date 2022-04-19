const data = require('../data/zoo_data');

function countAnimals(animal) {
  let qtdAnimal;
  qtdAnimal = data.species.reduce((qtds, species) => {
    const obj = qtds;
    obj[species.name] = species.residents.length;
    return obj;
  }, {});
  if (animal !== undefined) {
    const animais = data.species.filter((specie) => specie.name === animal.specie);
    qtdAnimal = animais[0].residents.reduce((qtd, animal1) => {
      let num = qtd;
      if (Object.keys(animal).length === 1 || animal1.sex === animal.sex) {
        num += 1;
      }
      return num;
    }, 0);
  }
  return qtdAnimal;
}

module.exports = countAnimals;
