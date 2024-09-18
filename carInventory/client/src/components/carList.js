import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cars')
      .then(response => setCars(response.data))
      .catch(error => console.error(error));
  }, []);

  const deleteCar = (id) => {
    axios.delete(`http://localhost:5000/api/cars/${id}`)
      .then(() => setCars(cars.filter(car => car._id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>All Cars</h2>
      <ul>
        {cars.map(car => (
          <li key={car._id}>
            {car.model} - {car.make} - {car.owner} - {car.registration}- {car.address}
            <button onClick={() => deleteCar(car._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
