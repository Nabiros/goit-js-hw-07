const inputTxt = document.querySelector('#name-input');
const outputTxt = document.querySelector('#name-output');

inputTxt.addEventListener('input', (event) => {
    outputTxt.textContent = event.currentTarget.value;
    if (outputTxt.textContent.length === 0) {
        return outputTxt.textContent = 'незнакомец';
    }
});