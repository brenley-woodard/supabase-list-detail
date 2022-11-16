import { getFood } from '../fetch-utils.js';
import { renderFoodDetail } from '../render-utils.js';

const foodDetailContainer = document.getElementById('food-detail-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const detail = await getFood(id);

    const foodDetailEl = renderFoodDetail(detail);
    foodDetailContainer.append(foodDetailEl);
});
