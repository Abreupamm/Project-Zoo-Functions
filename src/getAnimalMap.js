const data = require('../data/zoo_data');

function optionsUndefined() {
  const resultado = {
    NE: [],
    NW: [],
    SE: [],
    SW: []
  }
  const location = data.species.forEach((animal) => {
    if (animal.location === 'NE') {
      const { NE } = resultado;
      NE.push(animal.name)
    }
    if (animal.location === 'NW') {
      const { NW } = resultado;
      NW.push(animal.name)
    }
    if (animal.location === 'SE') {
      const { SE } = resultado;
      SE.push(animal.name)
    }
    if (animal.location === 'SW') {
      const { SW } = resultado;
      SW.push(animal.name)
    }
  })
  return resultado
}

function getAnimalMap(options) {
  if (options === undefined) {
    return optionsUndefined()
  }
  const resultado = {
    NE: [],
    NW: [],
    SE: [],
    SW: []
  }

  if (options.includeNames === true) {
    const location = data.species.forEach((animal) => {
      if (animal.location === 'NE') {
        const specie = animal.name
        const names = animal.residents.map((nome) => nome.name);
        const obj = {}
        obj[specie] = names
        const { NE } = resultado;
        NE.push(obj)

      }
      if (animal.location === 'NW') {
        const specie = animal.name
        const names = animal.residents.map((nome) => nome.name);
        const obj = {}
        obj[specie] = names
        const { NW } = resultado;
        NW.push(obj)

      }
      if (animal.location === 'SE') {
        const specie = animal.name
        const names = animal.residents.map((nome) => nome.name);
        const obj = {}
        obj[specie] = names
        const { SE } = resultado;
        SE.push(obj)

      }
      if (animal.location === 'SW') {
        const specie = animal.name
        const names = animal.residents.map((nome) => nome.name);
        const obj = {}
        obj[specie] = names
        const { SW } = resultado;
        SW.push(obj)

      }
    })
    return resultado
  }

  return optionsUndefined()
}

console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
