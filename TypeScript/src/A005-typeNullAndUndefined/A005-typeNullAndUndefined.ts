//Null e undefined representa no ts um não valor.

function createPerson(
  firstName: string,
  lastName?: string,
): { firstName: string; lastName?: string | undefined } {
  return { firstName, lastName };
}

function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}
