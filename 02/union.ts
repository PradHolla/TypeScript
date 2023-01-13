let score: number | string = 112;

score = '113';

type user = {
    name: string
    id: number
}

type admin = {
    username: string
    id: number
}

let prad: user | admin = {name: 'prad', id: 1}
prad = {username: 'pnh', id: 1}

function getDb(id: number | string) {
    if (typeof id === 'string') {
        // do something
    } else {
        // do something else
    }
    return id
}

getDb(1)
getDb('1')

const data:(number | string | boolean)[] = [1,2,3,4,'5']

let seat: 'aisle' | 'window' | 'middle' = 'aisle'