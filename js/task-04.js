const refs = {
    decrementEl: document.querySelector('[data-action="decrement"]'),
    incrementEl: document.querySelector('[data-action="increment"]'),
};

const getValue = document.querySelector('#value');

let counterValue = 0;

refs.decrementEl.addEventListener('click', () => {
    getValue.textContent = counterValue -= 1;
});

refs.incrementEl.addEventListener('click', () => {
    getValue.textContent = counterValue += 1;
});