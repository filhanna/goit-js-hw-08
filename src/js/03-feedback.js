var throttle = require('lodash.throttle');
const STORAGE_KEY = 'feedback-form-state';

const formData = {};
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  email: document.querySelector('.feedback-form input'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.email.addEventListener('input', throttle(onEmailInput, 500));

refs.form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  console.log(formData);
});
populateTextarea();
populateEmail();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}
function onEmailInput(evt) {
  const email = evt.target.value;
  localStorage.setItem(STORAGE_KEY, email);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
function populateEmail() {
  const savedEmail = localStorage.getItem(STORAGE_KEY);
  if (savedEmail) {
    refs.email.value = savedEmail;
  }
}
