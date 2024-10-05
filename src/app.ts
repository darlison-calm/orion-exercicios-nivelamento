import {lista, apagarItemImperativo, acharBioImperativa, alterarItemImperativo, Pessoa } from "./segundo-exercicio.js";

let container = document.querySelector('tbody');

/**
 * renderizarPessoas
 *
 * Renderiza a lista de pessoas em uma tabela HTML.
 * Para cada pessoa na lista, cria uma linha na tabela contendo
 * o ID, nome, biografia e um botão para deletar a pessoa.
 *
 * @param lista - Um array de objetos do tipo Pessoa a ser renderizado na tabela.
 *                Cada objeto deve ter as propriedades 'id', 'name', e 'bio'.
 */
function renderizarPessoas(lista: Array<Pessoa>) {
  
  lista.forEach((pessoa: Pessoa) => {

    const tr = document.createElement('tr')
    
    tr.innerHTML = `<tr scope="row">
      <th scope="row">${pessoa['id']}</th>
      <td>${pessoa['name']}</td>
      <td>${pessoa['bio']}</td>
      <td><button type="button" class="delete-btn btn btn-danger">DELETAR</button></td>
    </tr>`
 
    const deleteButton = tr.querySelector('.delete-btn');
    
    deleteButton.addEventListener('click', () => {
        let id = pessoa['id'];
        apagarItemImperativo(id);
        limparTabela();
        renderizarPessoas(lista);
    });

    container.appendChild(tr);
  })
}


/**
 * mostrarBio
 *
 * Configura um evento para mostrar a biografia de uma pessoa
 * com base no ID fornecido pelo usuário em um formulário.
 * Ao enviar o formulário, a biografia correspondente é exibida.
 */
function mostrarBio() :void {
  const bioForm = document.getElementById('bio-form') as HTMLFormElement;
  const bioInput = document.getElementById('bio-input-id') as HTMLInputElement;

  bioForm.addEventListener('submit', (event : Event) => {
    const bioText = document.querySelector("#bio-text") as HTMLParagraphElement;
    event.preventDefault();

    let id = Number(bioInput.value);
    bioText.innerHTML = acharBioImperativa(id);
  })
}

/**
 * limparTabela
 *
 * Limpa o conteúdo da tabela HTML
 * Essa função é chamada antes de renderizar a lista atualizada para 
 * que não haja dados antigos.
 */
function limparTabela() :void {
  container.innerHTML = ''
}

/**
 * alteraçãoItemFuncionalidade
 *
 * Configura um evento para alterar os dados de uma pessoa na lista
 * Permite ao usuário alterar o nome e/ou a biografia de uma pessoa,
 * com base nos valores de um formulario.
 */
function alteraçãoItemFuncionalidade() {
  const alterarDadosForm = document.getElementById('alterar-item-form') as HTMLFormElement;
  const inputId = document.getElementById('input-id-dados') as HTMLInputElement;
  const inputNovoNome = document.getElementById('novo-nome') as HTMLInputElement;
  const inputNovaBio = document.getElementById('nova-bio') as HTMLInputElement;

  alterarDadosForm.addEventListener('submit', (e : Event) => {
    e.preventDefault()
    
    let id = Number(inputId.value)
    let novaBio = inputNovaBio.value
    let novoNome = inputNovoNome.value

    if(novaBio) {
      alterarItemImperativo(id, 'bio', novaBio )
    }

    if(novoNome) {
      alterarItemImperativo(id, 'name', novoNome )
    }
    limparTabela()
    renderizarPessoas(lista)
  })
}

renderizarPessoas(lista);
mostrarBio();
alteraçãoItemFuncionalidade()



