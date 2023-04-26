import throttle from "lodash.throttle"

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input[name="email"]');
const messageInput = document.querySelector('.feedback-form textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('submit', onSubmit);

  let formData = {};

  feedbackForm.addEventListener('input', throttle(e => { 
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500));

function onSubmit (e) {
    e.preventDefault();
    console.log(formData);
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

const storedData = localStorage.getItem(STORAGE_KEY);

if (storedData) {
    formData = JSON.parse(storedData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
}   else {
    emailInput.value = '';
    messageInput.value = '';
}
