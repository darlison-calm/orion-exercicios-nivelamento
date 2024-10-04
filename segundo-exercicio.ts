interface Pessoa  {
  id: number,
  name: string,
  bio: string
}

let lista: Array <Pessoa> = [
  {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
  {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
  {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
  {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
]

//a) Crie uma função que retorne a bio do id passado
function acharBioFuncional(id: number): string {
  const pessoa = lista.find(p => p.id === id);
  
  if(!pessoa) {
    return "Biografia não encontrada pois id não existe"
  }

  if(pessoa.bio === null || pessoa.bio === undefined || pessoa.bio.trim() === '') {
    return "Biografia não esta disponível"
  }
  
  return pessoa.bio
};

// function acharBioFuncional(id: number, items :Array<Pessoa>) :string {
//   const ip= items.find(item => item.id === id)
//   return item || "Biografia não encontrada pois id não existe"
// }

//b) Crie uma função que retorne o name do id passado
function acharNome(id: number) :string {
  let pessoaNome : string;  
  
  lista.forEach(pessoa => {
    if (pessoa['id'] === id) {
      pessoaNome = pessoa['name']
    }
  });

  return pessoaNome || 'Nome não encotrado pois id não existe';
}

//c) Crie uma função que apague um item da lista a partir de um id passado
function apagarItem(id: number): void {
  let index : number;
  for (let i = 0; i < lista.length; i++) {
    
    if(lista[i]['id'] === id){
      index = i
    }
  }

  lista.splice(index, 1)
}

//d) Crie uma função que altere a bio ou o name a partir de um id passado
function alterarItem(id: number, campo: 'bio' | 'name', novoValor: string): void {
  let index: number = lista.findIndex(item => item['id'] === id);
  lista[index][campo] = novoValor
}

//e) Demonstre todas as funções com o paradigma funcional e com o imperativo
function apagarItemFuncional(id: number, items: Array<Object>) :Array <Object> {
  let index: number = items.findIndex(item => item['id'] === id);

  const novaLista = [...items.slice(0, index), ...items.slice(index+1, items.length)]
  return novaLista
}
function apagarItemImperativo(id: number): void {
  let index :number;
  for (let i = 0; i < lista.length; i++) {
    if(lista[i]['id'] === id){
      index = i
    }
  }
 
  lista.splice(index, 1)
}

function alterarItemImperativo(id: number, campo: 'bio' | 'name', novoValor: string): void {
  let index: number;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i]['id'] === id){
      index = i
    }
  }
  lista[index][campo] = novoValor
}


function alterarItemFuncional(id: number, campo: 'bio' | 'name', novoValor: string, items:Array<Object>):Array<Object> {
  let novaLista = [...items]
  let index: number = novaLista.findIndex(item => item['id'] === id);
  novaLista[index][campo] = novoValor
  return novaLista
}




function acharNomeImperativo(id: number) :string {
  let pessoaNome : string;  
  
  lista.forEach(pessoa => {
    if (pessoa['id'] === id) {
      pessoaNome = pessoa['name']
    }
  });

  return pessoaNome || 'Nome não encotrado pois id não existe';
}

function acharNomeFuncional(id: number, items :Array<Object>) :string {
  const pessoa = items.find(item => item['id'] == id)
  return pessoa['name'] || 'Nome não encotrado pois id não existe';
}



















