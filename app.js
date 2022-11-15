/* Imports */
import { getAllFoods } from './fetch-utils.js';
import { renderFood } from './render-utils.js';

/* Get DOM Elements */
const foodsContainer = document.getElementById('foods-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const foods = await getAllFoods();

    for (let food of foods) {
        console.log(food);
        const foodEl = renderFood(food);
        foodsContainer.append(foodEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
