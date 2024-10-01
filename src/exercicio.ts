function countVowal(text: string): number {
  const matches = text.match(/[aeiou]/gi);
  
  return matches ? matches.length : 0;
}

const form = document.getElementById('form') as HTMLFormElement
const result = document.querySelector('p') as HTMLElement;
const word = document.getElementById('word-input') as HTMLInputElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const vowelCount = countVowal(word.value);
  result.textContent = `A palavra ${word.value} tem ${vowelCount} vogais.`;
})





