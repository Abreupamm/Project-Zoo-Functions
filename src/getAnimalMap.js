const data = require('../data/zoo_data');

function optionsUndefined() {
  const resultado = {
    NE: [],
    NW: [],
    SE: [],
    SW: []
  };
  const pushLocation = (location, animal) => location.push(animal.name)

  const location = data.species.forEach((animal) => {
    if (animal.location === 'NE') {
      const { NE } = resultado;
      pushLocation(NE, animal);
    }
    if (animal.location === 'NW') {
      const { NW } = resultado;
      pushLocation(NW, animal);
    }
    if (animal.location === 'SE') {
      const { SE } = resultado;
      pushLocation(SE, animal);
    }
    if (animal.location === 'SW') {
      const { SW } = resultado;
      pushLocation(SW, animal);
    }
  })
  return resultado;
}

function criaArrayNames(animal) {
  return animal.residents.map((nome) => nome.name);
}

function criaArrayNamesSexSorted(location, animal, sex) {
  const sorted = criaArrayNamesSex(animal, sex)
    sorted.sort();
  const specie = animal.name;
  const obj = {};
  const names = sorted
  obj[specie] = names
  return location.push(obj);
}

function criaArrayNamesSex(animal, sex) {
  const sexAnimais = []
  
  const animais = animal.residents.forEach((nome) => {
    if (nome.sex === sex) {
 sexAnimais.push(nome.name)
   }
  })

  return sexAnimais;
}


function pushObjSorted(location, animal) {
  const specie = animal.name;
  const obj = {};
  names = criaArrayNames(animal)
  obj[specie] = names.sort()
  return location.push(obj);
}

function pushObj(location, animal) {
  const specie = animal.name;
  const obj = {};
  const names = criaArrayNames(animal)
  obj[specie] = names
  return location.push(obj);
}

function pushObjSex(location, animal, sex) {
  const specie = animal.name;
  const obj = {};
  const names = criaArrayNamesSex(animal, sex)
  obj[specie] = names
  return location.push(obj);
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === false || options.includeNames === undefined) {
    return optionsUndefined();
  }
  const resultado = {
    NE: [],
    NW: [],
    SE: [],
    SW: []
  };
  const { NE } = resultado;
  const { NW } = resultado;
  const { SE } = resultado;
  const { SW } = resultado;

  if (options.sex === 'female' && options.sorted === true) {
    const locationFamale = data.species.forEach((animal) => {
      if (animal.location === 'NE') {
        criaArrayNamesSexSorted(NE, animal, 'female');
      }
      if (animal.location === 'NW') {
        criaArrayNamesSexSorted(NW, animal, 'female');
      }
      if (animal.location === 'SE') {
        criaArrayNamesSexSorted(SE, animal, 'female');
      }
      if (animal.location === 'SW') {
        criaArrayNamesSexSorted(SW, animal, 'female');
      }
    });
  }

  if (options.sex === 'male' && options.sorted === true) {
    const locationMale = data.species.forEach((animal) => {
      if (animal.location === 'NE') {
        criaArrayNamesSexSorted(NE, animal, 'male');
      }
      if (animal.location === 'NW') {
        criaArrayNamesSexSorted(NW, animal, 'male');
      }
      if (animal.location === 'SE') {
        criaArrayNamesSexSorted(SE, animal, 'male');
      }
      if (animal.location === 'SW') {
        criaArrayNamesSexSorted(SW, animal, 'male');
      }
    });
  }

  if (options.sex === 'female' && options.sorted === undefined) {
    const locationFamale = data.species.forEach((animal) => {
      if (animal.location === 'NE') {
        pushObjSex(NE, animal, 'female');
      }
      if (animal.location === 'NW') {
        pushObjSex(NW, animal, 'female');
      }
      if (animal.location === 'SE') {
        pushObjSex(SE, animal, 'female');
      }
      if (animal.location === 'SW') {
        pushObjSex(SW, animal, 'female');
      }
    });
  }
  
  if (options.sex === 'male' && options.sorted === undefined) {
    const locationMale = data.species.forEach((animal) => {
      if (animal.location === 'NE') {
        pushObjSex(NE, animal, 'male');
      }
      if (animal.location === 'NW') {
        pushObjSex(NW, animal, 'male');
      }
      if (animal.location === 'SE') {
        pushObjSex(SE, animal, 'male');
      }
      if (animal.location === 'SW') {
        pushObjSex(SW, animal, 'male');
      }
    });
  }

  if (options.sorted === true && options.includeNames === true && options.sex === undefined) {
    const locationSorted = data.species.forEach((animal) => {
      if (animal.location === 'NE') {
        pushObjSorted(NE, animal);
      }
      if (animal.location === 'NW') {
        pushObjSorted(NW, animal);
      }
      if (animal.location === 'SE') {
        pushObjSorted(SE, animal);
      }
      if (animal.location === 'SW') {
        pushObjSorted(SW, animal);
      }
    });
  }

  if (options.includeNames === true && options.sorted === undefined && options.sex === undefined) {
    const locationIncludeNames = data.species.forEach((animal) => {
      if (animal.location === 'NE') {
        pushObj(NE, animal);
      }
      if (animal.location === 'NW') {
        pushObj(NW, animal);
      }
      if (animal.location === 'SE') {
        pushObj(SE, animal);
      }
      if (animal.location === 'SW') {
        pushObj(SW, animal);
      }
    });
  }

 

return resultado;
}
  

console.log(getAnimalMap({ includeNames: true, sorted: true, sex: 'female'}));
module.exports = getAnimalMap;
