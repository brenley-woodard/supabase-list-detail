export function renderFood(food) {
    const foodEl = document.createElement('a');
    // foodEl.href = `./`;
    const nameEl = document.createElement('p');
    nameEl.textContent = food.name;
    nameEl.classList.add('food-name');

    const imgEl = document.createElement('img');
    imgEl.src = food.img;
}
