function countVowal(text) {
    var matches = text.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
countVowal('casa'); //retorna 2 
var form = document.getElementById('form');
var result = document.querySelector('p');
var word = document.getElementById('word-input');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var vowelCount = countVowal(word.value);
    result.textContent = "A palavra ".concat(word.value, " tem ").concat(vowelCount, " vogais.");
});
//# sourceMappingURL=exercicio.js.map