import { checkAuth, logout } from '../fetch-utils.js';

const logOutButton = document.getElementById('logout');

checkAuth();

logOutButton.addEventListener('click', async () => {
    await logout();
});
