import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState({
    model: '',
    make: '',
    owner: '',
    registration: '',
    address: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/cars/${id}`)
      .then(response => setCar(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/cars/${id}`, car)
      .then(response => alert('Car updated successfully!'))
      .catch(error => console.error(error));
  };
  return (
    <div>
      <h2>Edit Car</h2>
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
        <button type="submit">Update Car</button>
      </form>
    </div>
  );
};

export default EditCar;
