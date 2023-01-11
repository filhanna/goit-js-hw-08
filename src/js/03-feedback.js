var throttle = require('lodash.throttle');
const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  email: document.querySelector('.feedback-form input'),
};
formData.email =
  JSON.parse(localStorage.getItem(STORAGE_KEY)) === null
    ? ''
    : JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
// formData.email = JSON.parse(localStorage.getItem(STORAGE_KEY)).email || '';
formData.message =
  JSON.parse(localStorage.getItem(STORAGE_KEY)) === null
    ? ''
    : JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
refs.email.value = formData.email;
refs.textarea.value = formData.message;

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener(
  'input',
  throttle(evt => {
    if (evt.target.name == 'email') {
      formData.email = evt.target.value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
    if (evt.target.name == 'message') {
      formData.message = evt.target.value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }),
  500
);

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';

  formData.message = '';
}
