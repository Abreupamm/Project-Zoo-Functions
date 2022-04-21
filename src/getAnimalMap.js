const data = require('../data/zoo_data');

function optionsUndefined() {
  const resultado = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((animal) => {
    resultado[animal.location].push(animal.name);
  });
  return resultado;
}

function criaArrayNamesSex(animal, sex) {
  const sexAnimais = [];
  animal.residents.forEach((nome) => {
    if (nome.sex === sex) {
      sexAnimais.push(nome.name);
    }
  });
  return sexAnimais;
}

function criaArrayNames(animal) {
  return animal.residents.map((nome) => nome.name);
}

function pushObj(location, animal, sorted) {
  const specie = animal.name;
  const obj = {};
  const names = criaArrayNames(animal);
  if (sorted === true) {
    obj[specie] = names.sort();
  } else {
    obj[specie] = names;
  }
  return location.push(obj);
}

function pushObjSex(location, animal, sex, sorted) {
  const specie = animal.name;
  const obj = {};
  const names = criaArrayNamesSex(animal, sex);
  if (sorted === true) {
    obj[specie] = names.sort();
  } else {
    obj[specie] = names;
  }
  return location.push(obj);
}

function ifSexFamale(options) {
  const resultado = { NE: [], NW: [], SE: [], SW: [] };
  let animalLocation;
  if (options.sorted === true) {
    data.species.forEach((animal) => {
      animalLocation = resultado[animal.location];
      pushObjSex(animalLocation, animal, 'female', true);
    });
  }
  if (options.sorted === undefined && options.includeNames === true) {
    data.species.forEach((animal) => {
      animalLocation = resultado[animal.location];
      pushObjSex(animalLocation, animal, 'female');
    });
  }
  return resultado;
}

function ifSexMale(options) {
  const resultado = { NE: [], NW: [], SE: [], SW: [] };
  let animalLocation;
  if (options.sorted === true) {
    data.species.forEach((animal) => {
      animalLocation = resultado[animal.location];
      pushObjSex(animalLocation, animal, 'male', true);
    });
  }
  if (options.sorted === undefined && options.includeNames === true) {
    data.species.forEach((animal) => {
      animalLocation = resultado[animal.location];
      pushObjSex(animalLocation, animal, 'male');
    });
  }
  return resultado;
}
function isSex(options) {
  if (options.sex === 'female') {
    return ifSexFamale(options);
  }
  return ifSexMale(options);
}

function includeNamesIsTrue(options) {
  const resultado = { NE: [], NW: [], SE: [], SW: [] };
  let animalLocation;
  if (options.sorted === true && options.sex === undefined) {
    data.species.forEach((animal) => {
      animalLocation = resultado[animal.location];
      pushObj(animalLocation, animal, true);
    });
  }

  if (options.sorted === undefined && options.sex === undefined) {
    data.species.forEach((animal) => {
      animalLocation = resultado[animal.location];
      pushObj(animalLocation, animal);
    });
  }
  return resultado;
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return optionsUndefined();
  }
  if (options.sex !== undefined) {
    return isSex(options);
  }
  if (options.includeNames === true) {
    return includeNamesIsTrue(options);
  }
}

module.exports = getAnimalMap;
