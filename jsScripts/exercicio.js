function countVowal(text) {
    const matches = text.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
countVowal('casa'); //retorna 2 
const form = document.getElementById('form');
const result = document.querySelector('p');
const word = document.getElementById('word-input');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const vowelCount = countVowal(word.value);
    result.textContent = `A palavra ${word.value} tem ${vowelCount} vogais.`;
});
//# sourceMappingURL=exercicio.js.map