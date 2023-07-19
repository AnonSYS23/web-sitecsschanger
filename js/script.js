let colorPicker = document.querySelector('.color-picker input');
let text = document.querySelector('.text p');

colorPicker.addEventListener('change', () => {
  text.style.color = colorPicker.value;
});
