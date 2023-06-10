// 1.- Secuencia de Fibonacci
let fibo = [0,1]
let fiboPar = [0]
let fiboImpar = [1]
const fibonacci = (fn1, fn2) =>{
    if(fn1+fn2 >= 1000){
        return
    }
    fibo.push(fn1+fn2) 
    if((fn2+fn1) % 2 === 0){fiboPar.push(fn1+fn2)}
    else {fiboImpar.push(fn1+fn2)}
    
    return fibonacci(fn2+fn1, fn1)
}

fibonacci(1, 0, 2)
console.log("Secuencia: " + fibo)
console.log("Pares: " + fiboPar)
console.log("Impares: " + fiboImpar)

// 2.- Devolver el arreglo en mayúsculas
let pokemon =
[
 'Pikachu',
 'Charmander',
 'Bulbasaur',
 'Squirtle'
]

const resultPokemon = pokemon.map((poke) => poke.toUpperCase())
console.log(resultPokemon)

// 3.- Devolver los pokemon de tipo fuego
let pokemonTipos = [
    {
    nombre: 'Pikachu',
    tipo: 'Electrico'
    },
    {
    nombre: 'Charmander',
    tipo: 'Fuego',
    },
    {
    nombre: 'Bulbasaur',
    tipo: 'Planta'
    },
    {
    nombre: 'Squirtle',
    tipo: 'Agua'
    },
    {
    nombre: 'Charmeleon',
    tipo: 'Fuego'
    },
    {
    nombre: 'Weedle',
    tipo: 'bicho'
    },
    {
    nombre: 'Charizard',
    tipo: 'Fuego'
    }
   ]

   const resultPokemonTipos = pokemonTipos.filter((poke) => poke.tipo === 'Fuego')
   console.log(resultPokemonTipos)
   
let ejercicio1 = document.getElementById("ejercicio1")
const content1 = ejercicio1.innerHTML
ejercicio1.innerHTML = `<p>${"Secuencia: "+fibo}</p>`
ejercicio1.innerHTML += `<p>${"Pares: " + fiboPar}</p>`
ejercicio1.innerHTML += `<p>${"Impares: " + fiboImpar}</p>` 

let ejercicio2 = document.getElementById("ejercicio2")
const content2 = ejercicio2.innerHTML
ejercicio2.innerHTML = "Nombres en mayúsculas: "
resultPokemon.map((elemento) => ejercicio2.innerHTML += `<p>${elemento}</p>`) 

let ejercicio3 = document.getElementById("ejercicio3")
const content3 = ejercicio3.innerHTML
ejercicio3.innerHTML = "Pokemones tipo fuego: "
resultPokemonTipos.map((elemento) => ejercicio3.innerHTML += `<p>${"Nombre: " + elemento.nombre + ", Tipo: " + elemento.tipo}</p>`)