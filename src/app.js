"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const segundo_exercicio_1 = require("./segundo-exercicio");
let table = document.getElementById('table');
function renderizarPessoas(lista) {
    lista.forEach((pessoa) => {
        let container = document.createElement('tr');
        container.classList.add("content");
        container.innerHTML = `<tr>
            <td>${pessoa['id']}</td>
            <td>${pessoa['name']}</td>
            <td>${pessoa['bio']}</td>
            <td><button class="delete-button" id="${pessoa['id']}"> Deletar</button></td>
        </tr>`;
        table.appendChild(container);
    });
}
function deletarItem(event) {
    const target = event.target;
    ;
    if (target && target.classList.contains('delete-button')) {
        const id = parseInt(target.getAttribute('data-id'));
        (0, segundo_exercicio_1.apagarItem)(id);
        limparTabela();
        renderizarPessoas(segundo_exercicio_1.lista);
    }
}
function limparTabela() {
    const linhas = table.querySelectorAll('content');
    linhas.forEach(linha => linha.innerHTML = '');
}
if (table) {
    table.addEventListener('click', deletarItem);
}
renderizarPessoas(segundo_exercicio_1.lista);
