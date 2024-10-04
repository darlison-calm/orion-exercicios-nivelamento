export let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function acharPessoa(id, lista) {
    return lista.find(p => p.id === id);
}
//a) Crie uma função que retorne a bio do id passado
function acharBioFuncional(id, lista) {
    const pessoa = acharPessoa(id, lista);
    if (!pessoa) {
        return "Biografia não encontrada pois id não existe";
    }
    if (pessoa.bio === null || pessoa.bio === undefined || pessoa.bio.trim() === '') {
        return "Biografia não esta disponível";
    }
    return pessoa.bio;
}
;
export function acharBioImperativo(id) {
    const pessoa = acharPessoa(id, lista);
    if (!pessoa) {
        return "Biografia não encontrada pois id não existe";
    }
    if (pessoa.bio === null || pessoa.bio === undefined || pessoa.bio.trim() === '') {
        return "Biografia não esta disponível";
    }
    return pessoa.bio;
}
;
//b) Crie uma função que retorne o name do id passado
function acharNomeFuncional(id, lista) {
    const pessoa = acharPessoa(id, lista);
    if (!pessoa) {
        return "Biografia não encontrada pois id não existe";
    }
    if (pessoa.name === null || pessoa.name === undefined || pessoa.name.trim() === '') {
        return "Biografia não esta disponível";
    }
    return pessoa.name;
}
export function acharNomeImperativo(id) {
    const pessoa = acharPessoa(id, lista);
    if (!pessoa) {
        return "Biografia não encontrada pois id não existe";
    }
    if (pessoa.name === null || pessoa.name === undefined || pessoa.name.trim() === '') {
        return "Biografia não esta disponível";
    }
    return pessoa.name;
}
//c) Crie uma função que apague um item da lista a partir de um id passado
export function apagarItemImperativo(id) {
    const index = lista.findIndex(pessoa => pessoa.id === id);
    if (index !== undefined) {
        lista.splice(index, 1);
    }
}
function apagarItemFuncional(id, items) {
    const index = items.findIndex(item => item.id === id);
    const novaLista = [...items.slice(0, index), ...items.slice(index + 1, items.length)];
    return novaLista;
}
//d) Crie uma função que altere a bio ou o name a partir de um id passado
export function alterarItemImperativo(id, campo, novoValor) {
    let index = lista.findIndex(item => item.id === id);
    lista[index][campo] = novoValor;
}
function alterarItemFuncional(id, campo, novoValor, lista) {
    const novaLista = [...lista];
    let index = novaLista.findIndex(pessoa => pessoa.id === id);
    novaLista[index][campo] = novoValor;
    return novaLista;
}
//# sourceMappingURL=segundo-exercicio.js.map