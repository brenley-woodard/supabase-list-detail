export function renderFood(food) {
    const foodEl = document.createElement('a');
    foodEl.href = `./food/?id=${food.id}`;
    foodEl.classList.add('food-card');

    const nameEl = document.createElement('p');
    nameEl.textContent = food.name;
    nameEl.classList.add('food-name');

    const locationEl = document.createElement('p');
    locationEl.textContent = food.location;
    locationEl.classList.add('food-location');

    const mealTypeEl = document.createElement('p');
    mealTypeEl.textContent = food.meal_type;
    mealTypeEl.classList.add('meal-type');

    const imgEl = document.createElement('img');
    imgEl.src = food.img;
    imgEl.classList.add('food-img');

    foodEl.append(nameEl, locationEl, mealTypeEl, imgEl);
    return foodEl;
}
