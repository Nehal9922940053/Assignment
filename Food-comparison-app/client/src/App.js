import React, { useState, useEffect } from 'react';
import './App.css';

function App() {



  const [foods, setFoods] = useState([]);
  const [food1, setFood1] = useState({});
  const [food2, setFood2] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/foods')
      .then((res) => res.json())
      .then((data) => setFoods(data.foods))
      .catch((error) => console.error(error));
  }, []);

  const handleCompare = () => {
    // Add logic to compare foods (texture, odor, flavor, etc.)
    if (food1 && food2) {
      console.log(`Comparing ${food1.name} and ${food2.name}:`);
      console.log(`Texture: ${food1.texture} vs ${food2.texture}`);
      console.log(`Odor: ${food1.odor} vs ${food2.odor}`);
      console.log(`Flavor: ${food1.flavor} vs ${food2.flavor}`);
      console.log(`Ingredients: ${food1.ingredients.join(', ')} vs ${food2.ingredients.join(', ')}`);
      console.log(`Cooking Methods: ${food1.cookingMethods.join(', ')} vs ${food2.cookingMethods.join(', ')}`);
    } else {
      console.log('Please select two foods for comparison.');
    }
  };



  return (
    <div className="App">
    <h1>Food Comparison App</h1>
      <label>Select Food 1:</label>
      <select onChange={(e) => setFood1(foods.find((food) => food.name === e.target.value))}>
        <option value="">Select Food</option>
        {foods.map((food) => (
          <option key={food._id} value={food.name}>
            {food.name}
          </option>
        ))}
      </select>

      <label>Select Food 2:</label>
      <select onChange={(e) => setFood2(foods.find((food) => food.name === e.target.value))}>
        <option value="">Select Food</option>
        {foods.map((food) => (
          <option key={food._id} value={food.name}>
            {food.name}
          </option>
        ))}
      </select>

      <button onClick={handleCompare}>Compare</button>
    </div>
  );
}

export default App;
