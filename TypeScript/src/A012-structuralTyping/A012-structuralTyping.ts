//TypeScript usa um sistema de tipagem estrutural, ou seja, ele verifica a forma(estrutura) de um objeto - e não o seu nome ou origem - para decidir se um valor é compatível com um tipo.

//OBS: Se dois tipos tem a mesma estrutura, o typescript os considera compatíveis.

//O Sistema estrutural não olha o nome do tipo, apenas a forma.
//EX:

type Coordenada2D = { x: number; y: number };
type Ponto = { x: number; y: number };
const coord: Coordenada2D = { x: 10, y: 20 };
const ponto: Ponto = coord;

//Mesmo que a Coordenada2D e Ponto sejam nomes diferentes, o typescript considera os dois iguais estruturalmente.

type Pessoa = { nome: string; idade: number };
const usuario = { nome: 'Paulo', idade: 21, cidade: 'CE' };
const pessoa: Pessoa = usuario;

//Mesmo que usuario tenha mais propriedades(cidade), o typescript aceita atribuição porque ele verifica a estrutura exigida pelo tipo Pessoa - e usuario tem tudo o que Pessoa exige (nome e idade.)
