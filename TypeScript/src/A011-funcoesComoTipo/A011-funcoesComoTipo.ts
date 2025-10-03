type MapStringCallBack = (item: string) => string;

function mapString(array: string[], callBackfn: MapStringCallBack): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callBackfn(item));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];
const abdMapped = mapString(abc, (item) => item.toUpperCase());
