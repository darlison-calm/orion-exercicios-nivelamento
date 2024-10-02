import { lista, apagarItem, acharBio, alterarItem } from "./segundo-exercicio";

let table = document.getElementById('table') as HTMLTableElement;

function renderizarPessoas(lista : Array<Object>) {
  
  lista.forEach((pessoa : Object) => {
    let container = document.createElement('tr')
    container.classList.add("content")
    
    container.innerHTML = `<tr>
            <td>${pessoa['id']}</td>
            <td>${pessoa['name']}</td>
            <td>${pessoa['bio']}</td>
        </tr>`
    const deleteButton = document.createElement('button') 
    deleteButton.textContent = 'DELETAR'
    
    deleteButton.addEventListener('click', () => {
      let id = pessoa['id'];
      apagarItem(id);
      renderizarPessoas(lista);
    }) 

    container.appendChild(deleteButton)
    table.appendChild(container)
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
  const linhas = table.querySelectorAll('.content');
  linhas.forEach(linha => linha.remove());
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



