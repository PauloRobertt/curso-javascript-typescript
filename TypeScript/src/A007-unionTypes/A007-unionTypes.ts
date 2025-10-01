// Variavel, parametro ou retorno de função pode ter mais de um tipo.

// string | number | boolean

function add(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') return x + y;
  return `${x}${y}`;
}

console.log(add(1, 2));
console.log(add('a', 'b'));
