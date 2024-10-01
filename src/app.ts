import { lista } from "./segundo-exercicio";

function renderizarPessoas(lista : Array<Object>) {

  let table = document.getElementById('table');

  lista.forEach((pessoa : Object) => {
    let container = document.createElement('tr')
    container.innerHTML = `<tr>
            <td>${pessoa['id']}</td>
            <td>${pessoa['name']}</td>
            <td>${pessoa['bio']}</td>
        </tr>`
    table.appendChild(container)
  })
  
}

renderizarPessoas(lista);