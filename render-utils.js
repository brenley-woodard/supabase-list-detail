export function renderFood(food) {
    const foodEl = document.createElement('a');
    foodEl.href = `./food/?id=${food.id}`;
    foodEl.classList.add('food-card');

    const nameEl = document.createElement('p');
    nameEl.textContent = food.name;
    nameEl.classList.add('food-name');

    const imgEl = document.createElement('img');
    imgEl.src = food.img;
    imgEl.classList.add('food-img');

    foodEl.append(nameEl, imgEl);
    return foodEl;
}

export function renderFoodDetail(foodItem) {
    const div = document.createElement('div');

    const nameEl = document.createElement('p');
    nameEl.textContent = foodItem.name;

    const locationEl = document.createElement('p');
    locationEl.textContent = foodItem.location;

    const mealTypeEl = document.createElement('p');
    mealTypeEl.textContent = foodItem.meal_type;

    const imgEl = document.createElement('img');
    imgEl.src = foodItem.img;

    div.append(nameEl, locationEl, mealTypeEl, imgEl);
    return div;
}
