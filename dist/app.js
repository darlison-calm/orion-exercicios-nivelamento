import { lista, apagarItem, acharBio, alterarItem } from "./segundo-exercicio.js";
let container = document.querySelector('tbody');
function renderizarPessoas(lista) {
    lista.forEach((pessoa) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<tr scope="row">
      <th scope="row">${pessoa['id']}</th>
      <td>${pessoa['name']}</td>
      <td>${pessoa['bio']}</td>
      <td><button type="button" class="delete-btn btn btn-danger">DELETAR</button></td>
    </tr>`;
        const deleteButton = tr.querySelector('.delete-btn');
        deleteButton.addEventListener('click', () => {
            let id = pessoa['id'];
            apagarItem(id);
            limparTabela();
            renderizarPessoas(lista);
        });
        container.appendChild(tr);
    });
}
function mostrarBio() {
    const bioForm = document.getElementById('bio-form');
    const bioInput = document.getElementById('bio-input-id');
    bioForm.addEventListener('submit', (event) => {
        const bioText = document.querySelector("#bio-text");
        event.preventDefault();
        let id = Number(bioInput.value);
        bioText.innerHTML = acharBio(id);
    });
}
function limparTabela() {
    container.innerHTML = '';
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