const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const eN = employeeName;
  const byName = data.employees.filter((name) => name.firstName === eN || name.lastName === eN);
  if (employeeName === undefined) {
    return {};
  }
  return byName[0];
}

module.exports = getEmployeeByName;
