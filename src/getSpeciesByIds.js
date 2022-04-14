const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((obj) => ids.includes(obj.id));
}

module.exports = getSpeciesByIds;
