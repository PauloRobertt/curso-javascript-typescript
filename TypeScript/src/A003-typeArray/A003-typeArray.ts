//Array<T> - T[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

function concatenaString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
console.log(result);
