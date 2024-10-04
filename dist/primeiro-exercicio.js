function countVowal(text) {
    const matches = text.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
const form = document.getElementById('contar-vogais-form');
const result = document.querySelector('#result');
const word = document.getElementById('word-input');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const vowelCount = countVowal(word.value);
    result.textContent = `A palavra ${word.value} tem ${vowelCount} vogais.`;
});
//# sourceMappingURL=primeiro-exercicio.js.map