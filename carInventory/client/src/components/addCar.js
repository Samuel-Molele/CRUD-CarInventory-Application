import React, { useState } from 'react';
import axios from 'axios';

const AddCar = () => {
  const [car, setCar] = useState({
    model: '',
    make: '',
    owner: '',
    registration: '',
    address: ''
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/cars', car)
      .then(response => {
        alert('Car added successfully!');
        setCar({
          model: '',
          make: '',
          registrationNumber: '',
          currentOwner: '',
          yearOfManufacture: ''
        });
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="model"
          placeholder="Model"
          value={car.model}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="make"
          placeholder="Make"
          value={car.make}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="owner"
          placeholder="Current Owner"
          value={car.owner}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="registration"
          placeholder="Registration"
          value={car.registration}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={car.address}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;
