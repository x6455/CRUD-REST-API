const express = require('express');
const router = express.Router();
const CityService = require('../cities');

router.get('/', (req, res) => {
  const cities = CityService.getAll();
  res.status(200).json({ cities, count: cities.length });
});

router.get('/:id', (req, res) => {
  const city = CityService.getById(req.params.id);
  if (!city) {
    return res.status(404).json({ error: 'City not found' });
  }
  res.status(200).json({ city });
});

router.post('/', (req, res) => {
  const { name, country, population } = req.body;
  if (!name || !country || !population) {
    return res.status(400).json({ error: 'Name, country, and population are required' });
  }
  const city = CityService.create(req.body);
  res.status(201).json({ city });
});

router.put('/:id', (req, res) => {
  const city = CityService.update(req.params.id, req.body);
  if (!city) {
    return res.status(404).json({ error: 'City not found' });
  }
  res.status(200).json({ city });
});

router.delete('/:id', (req, res) => {
  const deleted = CityService.delete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: 'City not found' });
  }
  res.status(200).json({ message: 'City deleted successfully' });
});

module.exports = router;
