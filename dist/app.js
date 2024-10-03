import { lista, apagarItem, acharBio, alterarItem } from "./segundo-exercicio.js";
let table = document.getElementById('table');
function renderizarPessoas(lista) {
    lista.forEach((pessoa) => {
        let container = document.createElement('tr');
        container.classList.add("content");
        container.innerHTML = `<tr>
            <td>${pessoa['id']}</td>
            <td>${pessoa['name']}</td>
            <td>${pessoa['bio']}</td>
        </tr>`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETAR';
        deleteButton.addEventListener('click', () => {
            let id = pessoa['id'];
            apagarItem(id);
            limparTabela();
            renderizarPessoas(lista);
        });
        container.appendChild(deleteButton);
        table.appendChild(container);
    });
}
function mostrarBio() {
    const bioForm = document.getElementById('bio-form');
    const bioInput = document.getElementById('bio-input-id');
    bioForm.addEventListener('submit', (event) => {
        const bioText = document.querySelector(".bio-text");
        event.preventDefault();
        let id = Number(bioInput.value);
        bioText.innerHTML = acharBio(id);
    });
}
function limparTabela() {
    const linhas = table.querySelectorAll('.content');
    linhas.forEach(linha => linha.remove());
}
function alteraçãoItemFuncionalidade() {
    const alterarDadosForm = document.getElementById('alterar-item-form');
    const inputId = document.getElementById('input-id-dados');
    const inputNovoNome = document.getElementById('novo-nome');
    const inputNovaBio = document.getElementById('nova-bio');
    alterarDadosForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let id = Number(inputId.value);
        let novaBio = inputNovaBio.value;
        let novoNome = inputNovoNome.value;
        if (novaBio) {
            alterarItem(id, 'bio', novaBio);
        }
        if (novoNome) {
            alterarItem(id, 'name', novoNome);
        }
        limparTabela();
        renderizarPessoas(lista);
    });
}
renderizarPessoas(lista);
mostrarBio();
alteraçãoItemFuncionalidade();
//# sourceMappingURL=app.js.map