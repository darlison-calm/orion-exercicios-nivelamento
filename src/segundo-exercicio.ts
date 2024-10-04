export interface Pessoa {
  id: number,
  name: string,
  bio: string
}

export let lista: Array <Pessoa> = [
  {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
  {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
  {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
  {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
]

/* acharPessoa
 *
 * Retorna uma pessoa da lista com base no ID fornecido.
 *
 * @param id - O ID da pessoa que está sendo procurada.
 * @param lista - Um array de objetos do tipo Pessoa onde a busca será realizada.
 * @returns A pessoa correspondente ao ID fornecido ou undefined se não encontrada.
 */

function acharPessoa(id: number, lista: Array<Pessoa>) :Pessoa {
  return lista.find(p => p.id === id)
}
/*
 * acharBioFuncional
 *
 * Retorna a biografia de uma pessoa com base no ID fornecido.
 * Se a pessoa não existir ou sua biografia não estiver disponível, 
 * retorna uma mensagem apropriada.
 *
 * @param id - O ID da pessoa cuja biografia está sendo procurada.
 * @param lista - Um array de objetos do tipo Pessoa onde a busca será realizada.
 * @returns A biografia da pessoa correspondente ao ID, uma mensagem de erro 
 * se o ID não existir, ou uma mensagem informando que a biografia 
 * não existe.
 */

function acharBioFuncional(id: number, lista: Array<Pessoa>): string {
  const pessoa = acharPessoa(id, lista)

  if (!pessoa) {
    return "Biografia não encontrada pois id não existe"
  }

  if (pessoa.bio === null || pessoa.bio === undefined || pessoa.bio.trim() === '') {
    return "Biografia não esta disponível"
  }
  
  return pessoa.bio
};
/**
 * acharBioImperativa
 *
 * Retorna a biografia de uma pessoa pelo ID fornecido.
 * Se o ID não existir ou a biografia não estiver disponível, 
 * retorna uma mensagem apropriada.
 *
 * @param id - O ID da pessoa cuja biografia está sendo procurada.
 * @returns A biografia da pessoa ou mensagens de erro se necessário.
 */
export function acharBioImperativa(id: number): string {
 const pessoa = acharPessoa(id, lista)
  
  if (!pessoa) {
    return "Biografia não encontrada pois id não existe"
  }

  if (pessoa.bio === null || pessoa.bio === undefined || pessoa.bio.trim() === '') {
    return "Biografia não esta disponível"
  } 
  
  return pessoa.bio
};

/**
 * acharNomeFuncional
 *
 * Retorna o nome de uma pessoa pelo ID fornecido.
 * Se o ID não existir ou o nome não estiver disponível, 
 * retorna uma mensagem apropriada.
 *
 * @param id - O ID da pessoa cujo nome está sendo procurado.
 * @param lista - Array de objetos do tipo Pessoa onde a busca será realizada.
 * @returns O nome da pessoa, ou mensagens de erro se a biografia ou a pessoa não existir.
 */

function acharNomeFuncional(id: number, lista: Array<Pessoa>) :string {
  const pessoa = acharPessoa(id, lista)

  if (!pessoa) {
    return "Biografia não encontrada pois id não existe"
  }

  if (pessoa.name === null || pessoa.name === undefined || pessoa.name.trim() === '') {
    return "Biografia não esta disponível"
  }
  
  return pessoa.name
}

/**
 * acharNomeImperativa
 *
 * Retorna o nome de uma pessoa pelo ID fornecido.
 * Se o ID não existir ou o nome não estiver disponível, 
 * retorna uma mensagem apropriada.
 *
 * @param id - O ID da pessoa cujo nome está sendo procurado.
 * @returns O nome da pessoa ou erro se a pessoa ou o nome da pessoa não existir.
 */
function acharNomeImperativa(id: number) :string {
  const pessoa = acharPessoa(id, lista)

  if (!pessoa) {
    return "Biografia não encontrada pois id não existe"
  }

  if (pessoa.name === null || pessoa.name === undefined || pessoa.name.trim() === '') {
    return "Biografia não esta disponível"
  }
  
  return pessoa.name
}

/**
 * apagarItemImperativo
 *
 * Remove uma pessoa da lista com base no ID fornecido.
 * Se o ID não existir, não faz nenhuma alteração na lista.
 *
 * @param id - O ID da pessoa a ser removida da lista.
 */
export function apagarItemImperativo(id: number): void {
  const index: number = lista.findIndex(pessoa => pessoa.id === id)

  if (index !== undefined) {
    lista.splice(index, 1);
  }
}

/**
 * apagarItemFuncional
 *
 * Remove uma pessoa da lista com base no ID fornecido.
 * Retorna uma nova lista sem a pessoa cujo ID foi especificado.
 *
 * @param id - O ID da pessoa a ser removida da lista.
 * @param lista - Um array de objetos do tipo Pessoa de onde a pessoa será removida.
 * @returns Uma nova lista de pessoas sem a pessoa com o ID especificado.
 */
function apagarItemFuncional(id: number, lista: Array<Pessoa>): Array<Pessoa> {
  return lista.filter(pessoa => pessoa.id !== id);
}

/**
 * alterarItemImperativo
 *
 * Altera o campo especificado (bio ou name) de uma pessoa na lista
 * com base no ID fornecido. A alteração é feita diretamente na lista.
 *
 * @param id - O ID da pessoa cujo campo será alterado.
 * @param campo - O campo a ser alterado, pode ser 'bio' ou 'name'.
 * @param novoValor - O novo valor a ser atribuído ao campo.
 */
export function alterarItemImperativo(id: number, campo: 'bio' | 'name', novoValor: string): void {
  let index: number = lista.findIndex(item => item.id === id);
  lista[index][campo] = novoValor
}

/**
 * alterarItemFuncional
 *
 * Altera o campo especificado (bio ou name) de uma pessoa em uma nova lista
 * com base no ID fornecido. Retorna uma nova lista com a alteração aplicada.
 *
 * @param id - O ID da pessoa cujo campo será alterado.
 * @param campo - O campo a ser alterado, pode ser 'bio' ou 'name'.
 * @param novoValor - O novo valor a ser atribuído ao campo.
 * @param lista - Um array de objetos do tipo Pessoa de onde a pessoa será alterada.
 * @returns Uma nova lista de pessoas com a alteração aplicada.
 */

export function alterarItemFuncional(id: number, campo: 'bio' | 'name', novoValor: string, lista: Array<Pessoa>): Array<Pessoa> {
  const novaLista = [...lista]
  let index: number = novaLista.findIndex(pessoa => pessoa.id === id);

  if (index !== -1) {
    novaLista[index][campo] = novoValor;
  }
  return novaLista
}


























