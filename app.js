/* Imports */

import { redirectIfLoggedIn, signUpUser, signInUser } from './fetch-utils.js';

/* Get DOM Elements */
const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');

redirectIfLoggedIn();

/* Events */
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(data.get('email'), data.get('password'));

    if (user) {
        location.replace('other-page');
    }
});

// sign in form
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('sign-in-email'), data.get('sign-in-password'));

    if (user) {
        location.replace('other-page');
    }
});

/* Display Functions */

// don't forget to call any display functions you want to run on page load
