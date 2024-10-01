import { lista, apagarItem } from "./segundo-exercicio.js";
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
        apagarItem(id);
        limparTabela();
        renderizarPessoas(lista);
    }
}
function limparTabela() {
    const linhas = table.querySelectorAll('.content');
    console.log(linhas);
    linhas.forEach(linha => linha.remove());
}
if (table) {
    table.addEventListener('click', deletarItem);
}
renderizarPessoas(lista);
//# sourceMappingURL=app.js.map