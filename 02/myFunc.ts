function addTwo(num: number){
    return num + 2;
}

let myNum = 10;
let myNum2 = addTwo(myNum);

const myHello = (name: string):string => {
    return "Hello " + name;
}

const heroes = ['Flash', 'Arrow', 'Superman', 'Batman'];

heroes.map((hero) => {
    console.log(hero);
})

function consoleError (error: string):void { // void means it doesn't return anything
    console.log(error);
}

function throwError (error: string):never { // never means it will never return anything
    throw new Error(error);
}

export {}