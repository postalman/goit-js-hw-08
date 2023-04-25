import throttle from "lodash.throttle"

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input[name="email"]');
const messageInput = document.querySelector('.feedback-form textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

//   emailInput.addEventListener('input', throttle(onEmailInput, 500));
//   messageInput.addEventListener('input', throttle(onMessageInput, 500));
  feedbackForm.addEventListener('submit', onSubmit);

  let formData = {
    // email: '',
    // message: '',
  };

  feedbackForm.addEventListener('input', throttle(e => { 
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500));

// function onEmailInput (e) {
//     formData.email = e.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function onMessageInput (e) {
//     formData.message = e.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

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


   

