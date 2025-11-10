type FunctionFilter<U> = (
    element: U,
    index?: number,
    array?: U[]
) => boolean

function myFilter<T>(array: T[], functionFilter: FunctionFilter<T>){
    const newArray = [];

    for(let i = 0; i < array.length; i++){
        const item = array[i];

        if(item === undefined) continue;

        if(functionFilter(item)) newArray.push(item);
    }

    return newArray;
}


console.log(myFilter([1,2,3,4], (value)=> value > 3))

/*
const array = [1,2,3,4,5];

const filterBusca = array.filter((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array)
    console.log("___________________")
});

console.log(filterBusca)
*/
