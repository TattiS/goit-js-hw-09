const localStorageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };

const fillFormFromLS = () => {
  try {
    if (!localStorage.length) {
      return;
    }

    const dataLS = JSON.parse(localStorage.getItem(localStorageKey));

    formData = dataLS;

    for (const key in dataLS) {
      form.elements[key].value = dataLS[key];
    }
  } catch (error) {
    console.log(error);
  }
};

fillFormFromLS();

const onFormElementInput = event => {
  const {
    target: { name: elementName, value: elementValue },
  } = event;
  formData[elementName] = elementValue.trim();

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};

const onFormSubmit = event => {
  event.preventDefault();
  if (!formData.email.length || !formData.message.length) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  formData = { email: '', message: '' };
  event.currentTarget.reset();
  localStorage.removeItem(localStorageKey);
  console.log(formData);
};

form.addEventListener('input', onFormElementInput);

form.addEventListener('submit', onFormSubmit);
