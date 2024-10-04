/**
* countVowels
*
* Retorna a quantidade de vogais em um texto fornecido.
*
* @param text - A string onde as vogais serão contadas.
* @returns O número de vogais no texto.
*/

function countVowels(text: string): number {
  const regex = /[aeiouáéíóúâêôàãõü]/gi;
  return text.match(regex)?.length || 0
}

const form = document.getElementById('contar-vogais-form') as HTMLFormElement
const result = document.querySelector('#result') as HTMLElement;
const word = document.getElementById('word-input') as HTMLInputElement;

form.addEventListener('submit', (event : Event) => {
  event.preventDefault();
  const vowelCount = countVowels(word.value);
  result.textContent = `A palavra ${word.value} tem ${vowelCount} vogais.`;
})





