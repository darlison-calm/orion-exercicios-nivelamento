/**
* countVowels
*
* Retorna a quantidade de vogais em um texto fornecido.
*
* @param text - A string onde as vogais serão contadas.
* @returns O número de vogais no texto.
*/
function countVowels(text) {
    const regex = /[aeiouáéíóúâêôàãõü]/gi;
    return text.match(regex)?.length || 0;
}
const form = document.getElementById('contar-vogais-form');
const result = document.querySelector('#result');
const word = document.getElementById('word-input');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const vowelCount = countVowels(word.value);
    result.textContent = `A palavra ${word.value} tem ${vowelCount} vogais.`;
});
//# sourceMappingURL=primeiro-exercicio.js.map