const data = require('../data/zoo_data');

function nameSpecies(idSpecies) {
  const names = [];
  data.species.forEach((name) => {
    if (idSpecies.includes(name.id)) {
      names.push(name.name);
    }
  });
  return names;
}

function coberturaEmployees(element) {
  const name = `${element.firstName} ${element.lastName}`;
  const location = [];
  data.species.forEach((specie) => {
    if (element.responsibleFor.includes(specie.id)) {
      location.push(specie.location);
    }
  });
  const names = nameSpecies(element.responsibleFor);
  const result = {
    id: element.id,
    fullName: name,
    species: names,
    locations: location,
  };
  return result;
}

function generalEmployees() {
  const result = data.employees.map((employee) => coberturaEmployees(employee));
  return result;
}

function peopleEmployee(nameId) {
  const people = data.employees.find((obj) => {
    if (obj.id === nameId || obj.firstName === nameId || obj.lastName === nameId) {
      return obj;
    }
    return undefined;
  });
  return coberturaEmployees(people);
}

function testError(id) {
  const test = data.employees.some((idTest) => idTest.id === id);
  if (test === false) {
    throw new Error('Informações inválidas');
  }
  return peopleEmployee(id);
}

function getEmployeesCoverage(employee) {
  if (employee === undefined) {
    return generalEmployees();
  }
  if (employee.name !== undefined) {
    return peopleEmployee(employee.name);
  }
  if (employee.id !== undefined) {
    return testError(employee.id);
  }
}

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
