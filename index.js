let cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    cats.push(name)
    cats.concat("Broom")
    
}

function destructivelyPrependCat(name){
    cats.unshift(name)

}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function destructivelyRemoveLastCat(){
    cats.pop()
}


function appendCat(name){
    let newArray = cats.concat(name)
    return newArray
}


function prependCat(){
    let newArray = ["Arnold", ...cats]
    return newArray
}

function removeLastCat(){
    let newArray = cats.slice(0, 2)
    return newArray
}

function removeFirstCat(){
    let newArray = cats.slice(1,3)
    return newArray
}