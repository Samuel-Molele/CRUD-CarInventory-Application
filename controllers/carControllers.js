const express = require('express');
const router = express.Router();
const Car = require('../models/carModels');

// Add a car
router.post('/', async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a single car
router.put('/:id', async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCar);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update multiple cars
router.put('/', async (req, res) => {
  try {
    const { ids, update } = req.body;
    const updatedCars = await Car.updateMany({ _id: { $in: ids } }, update);
    res.json(updatedCars);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a specific car
router.delete('/:id', async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    res.json(deletedCar);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// List all cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// List cars older than 5 years
router.get('/older-than-5-years', async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    const cars = await Car.find({ model: { $lt: currentYear - 5 } })
                          .select('model make owner registration address');
    res.json(cars);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
