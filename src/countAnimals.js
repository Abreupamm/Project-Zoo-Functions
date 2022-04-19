const data = require('../data/zoo_data');

function countAnimals(animal) {
  let qtdAnimal;
  qtdAnimal = data.species.reduce((qtds, species) => {
    qtds[species.name] = species.residents.length;
    return qtds;
  }, {});
  if (animal !== undefined) {
    const animais = data.species.filter((specie) => specie.name === animal.specie);
    qtdAnimal = animais[0].residents.reduce((qtd, animal1) => {
      if (Object.keys(animal).length === 1 || animal1.sex === animal.sex) {
        qtd += 1;
      }
      return qtd;
    }, 0);
  }
  return qtdAnimal;
}

module.exports = countAnimals;
