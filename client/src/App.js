import React from 'react';

import CarList from './components/carList';
import AddCar from './components/addCar';
import EditCar from './components/editCar';
import OlderCars from './components/olderCars';

function App() {
  return (
    
      <div className="App">
        <h1>Car Inventory</h1>
        
          <CarList />
          <AddCar />
          <EditCar />
          <OlderCars />
        
      </div>
  
  );
}

export default App;
