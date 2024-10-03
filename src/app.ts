import { lista, apagarItem, acharBio, alterarItem } from "./segundo-exercicio.js";

let container = document.querySelector('tbody');

function renderizarPessoas(lista : Array<Object>) {
  
  lista.forEach((pessoa : Object) => {

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
        apagarItem(id);
        limparTabela();
        renderizarPessoas(lista);
    });

    container.appendChild(tr);
  })
}



function mostrarBio() :void {
  const bioForm = document.getElementById('bio-form') as HTMLFormElement;
  const bioInput = document.getElementById('bio-input-id') as HTMLInputElement;

  bioForm.addEventListener('submit', (event : Event) => {
    const bioText = document.querySelector(".bio-text") as HTMLParagraphElement;
    event.preventDefault();

    let id = Number(bioInput.value);
    bioText.innerHTML = acharBio(id);
  })
}


function limparTabela() :void {
  container.innerHTML = ''
}

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
      alterarItem(id, 'bio', novaBio )
    }

    if(novoNome) {
      alterarItem(id, 'name', novoNome )
    }
    limparTabela()
    renderizarPessoas(lista)
  })
}

renderizarPessoas(lista);
mostrarBio();
alteraçãoItemFuncionalidade()



