
import { lista } from "./segundo-exercicio.js";

function renderizarPessoas(lista) {
    let table = document.getElementById('table');
    lista.forEach((pessoa) => {
        let container = document.createElement('tr');
        container.innerHTML = `<tr>
            <td>${pessoa['id']}</td>
            <td>${pessoa['name']}</td>
            <td>${pessoa['bio']}</td>
        </tr>`;
        table.appendChild(container);
    });
}
renderizarPessoas(lista);
//# sourceMappingURL=app.js.map