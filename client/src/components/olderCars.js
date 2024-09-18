import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OlderCars = () => {
  const [olderCars, setOlderCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cars/older-than-5-years')
      .then(response => setOlderCars(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Cars Older Than 5 Years</h2>
      <ul>
        {olderCars.map(car => (
          <li key={car._id}>
            {car.model} - {car.make} - {car.owner} - {car.registration}- {car.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OlderCars;
