// Type Predicate (Predicado de tipos)

function isNumber(value:unknown): value is number{
    return typeof value === 'number';
}

function soma<T>(...args: T[]): number{
    const somaTotal = args.reduce((soma, value) => {
        if(isNumber(soma) && isNumber(value)){
            return soma + value;
        }

        return soma;
    }
    ,0);

    return somaTotal;
}
