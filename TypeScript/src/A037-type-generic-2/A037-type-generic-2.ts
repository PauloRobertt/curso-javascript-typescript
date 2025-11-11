//Promise<number>
async function promiseAsync(){
    return 1;
}

function myPromise(): Promise<number>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1);
        },1000)
    })
}

promiseAsync().then((value)=>{console.log(value)})
myPromise().then((value)=>{console.log(value)})
