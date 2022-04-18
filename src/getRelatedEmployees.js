const data = require('../data/zoo_data');

function isManager(id) {
  const person = data.employees.some((element) => element.managers.includes(id));
  return person;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const is = data.employees.filter((employees) => employees.managers.includes(managerId));
    const employeesNames = is.map((name) => `${name.firstName} ${name.lastName}`);
    return employeesNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
