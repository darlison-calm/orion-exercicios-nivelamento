/**
* findVowels
*
* Retorna a quantidade de vogais em um texto fornecido.
*
* @param text - A string onde as vogais serão contadas.
* @returns O número de vogais no texto.
*/
export function countVowels(text: string): number {
  const regex = /[aeiouáéíóúâêôàãõü]/gi;
  return text.match(regex)?.length || 0;
  }

const form = document.getElementById('form') as HTMLFormElement
const result = document.querySelector('p') as HTMLElement;
const word = document.getElementById('word-input') as HTMLInputElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const vowelCount = countVowels(word.value);
  result.textContent = `A palavra ${word.value} tem ${vowelCount} vogais.`;
})





