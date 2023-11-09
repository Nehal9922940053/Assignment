const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/foodComparison', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const FoodSchema = new mongoose.Schema({
  name: String,
  texture: String,
  odor: String,
  flavor: String,
  ingredients: [String],
  cookingMethods: [String],
});

const Food = mongoose.model('Food', FoodSchema);

app.post('/api/foods', async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.json({ success: true, food });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

app.get('/api/foods', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json({ success: true, foods });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
