// import throttle from "lodash.throttle"

const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const submit = document.querySelector('.feedback-form submit');


input.addEventListener('input', onInput);
textarea.addEventListener('input', onTextArea);
submit.addEventListener('submit', onSubmit);

inputData();

function onInput(e) {
    const emailInput = e.currentTarget.value;
    localStorage.setItem('feedback-form-state', emailInput);
}

function onTextArea(e) {
    const messageInput = e.currentTarget.value;
    localStorage.setItem('feedback-form-state', messageInput);
}

function onSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    
}

function inputData() {
    const savedData = localStorage.getItem('feedback-form-state');

    if(savedData) {
        textarea.value = savedData;
    }
}
