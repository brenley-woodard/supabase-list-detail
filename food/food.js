import { getFood } from '../fetch-utils.js';

window.addEventListener('load', async () => {
    await getFood(1);
});
