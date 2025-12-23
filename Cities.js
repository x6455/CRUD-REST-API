let cities = [
  { id: 1, name: 'Addis Ababa', country: 'Ethiopia', population: 5000000 },
  { id: 2, name: 'Nairobi', country: 'Kenya', population: 4700000 }
];

let nextId = 3;

const CityService = {
  getAll() {
    return cities;
  },

  getById(id) {
    return cities.find(city => city.id === parseInt(id));
  },

  create(cityData) {
    const city = { id: nextId++, ...cityData };
    cities.push(city);
    return city;
  },

  update(id, cityData) {
    const index = cities.findIndex(city => city.id === parseInt(id));
    if (index === -1) return null;
    cities[index] = { ...cities[index], ...cityData };
    return cities[index];
  },

  delete(id) {
    const index = cities.findIndex(city => city.id === parseInt(id));
    if (index === -1) return false;
    cities.splice(index, 1);
    return true;
  }
};

module.exports = CityService;
