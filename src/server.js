const express = require("express");
const app = express();
const config = require('./config');
const request = require('superagent');
const cors = require('cors');

app.use(cors());

app.get('/api/ingredients/text', async (req, res) => {
  const recipe_name = req.headers.recipe_name
  const response = await request.get('https://api.tasty.co/search/recipes'+ '?q=(name:"' + recipe_name + '")')
  .set({
    'X-AUTH-TOKEN': config.config,
    'X-Tasty-User-Access-Token': config.config,
    'Accept': "application/json",
    "Content-Type": "application/json",
    "Fastly": 1
  });

  const resp = JSON.parse(response.text)
  const ingredient_list = []
  const components = resp.results[0].sections[0].components
  for (var i = 0, len = components.length; i < len; ++i) {
    const ingredient_info = components[i].raw_text
    if (ingredient_info !== 'n/a') {
      ingredient_list.push(ingredient_info)
    }
  }
  res.send(ingredient_list);
});

app.get('/api/ingredients/obj', async (req, res) => {
  const recipe_name = req.headers.recipe_name
  const response = await request.get('https://api.tasty.co/search/recipes'+ '?q=(name:"' + recipe_name + '")')
  .set({
    'X-AUTH-TOKEN': config.config,
    'X-Tasty-User-Access-Token': config.config,
    'Accept': "application/json",
    "Content-Type": "application/json",
    "Fastly": 1
  });

  const resp = JSON.parse(response.text)
  const ingredients_obj = {}
  const components = resp.results[0].sections[0].components
  // console.log(components);
  for (let i = 0, len = components.length; i < len; i++) {
    const quantity = components[i].measurements[0].quantity
    let unit = components[i].measurements[0].unit.display_singular
    if (parseInt(quantity) > 1) {
      let unit = components[i].measurements[0].unit.display_plural
    }
    const ingredient = components[i].ingredient.name
    
    ingredients_obj[ingredient.toString()] = {'quantity': quantity, 'unit': unit}
  }
  console.log(ingredients_obj);
  res.send(ingredients_obj);
});

app.get('/api/nutrition', async (req, res) => {
  const recipe_name = req.headers.recipe_name
  const response = await request.get('https://api.tasty.co/search/recipes'+ '?q=(name:"' + recipe_name + '")')
  .set({
    'X-AUTH-TOKEN': config.config,
    'X-Tasty-User-Access-Token': config.config,
    'Accept': "application/json",
    "Content-Type": "application/json",
    "Fastly": 1
  });

  const resp = JSON.parse(response.text)
  const nutrition_info = resp.results[0].nutrition
  res.send(nutrition_info);
});

app.get('/api/num_servings', async (req, res) => {
  const recipe_name = req.headers.recipe_name
  const response = await request.get('https://api.tasty.co/search/recipes'+ '?q=(name:"' + recipe_name + '")')
  .set({
    'X-AUTH-TOKEN': config.config,
    'X-Tasty-User-Access-Token': config.config,
    'Accept': "application/json",
    "Content-Type": "application/json",
    "Fastly": 1
  });

  const resp = JSON.parse(response.text)
  const num_servings = resp.results[0].num_servings
  res.send({num_servings: num_servings});
});

app.get('/api/video', async (req, res) => {
  const recipe_name = req.headers.recipe_name
  const response = await request.get('https://api.tasty.co/search/recipes'+ '?q=(name:"' + recipe_name + '")')
  .set({
    'X-AUTH-TOKEN': config.config,
    'X-Tasty-User-Access-Token': config.config,
    'Accept': "application/json",
    "Content-Type": "application/json",
    "Fastly": 1
  });

  const resp = JSON.parse(response.text)
  const video_url = resp.results[0].video_url
  res.send({video_url: video_url});
});

app.listen(5000, () => {
  console.log('Starting server now.')
});