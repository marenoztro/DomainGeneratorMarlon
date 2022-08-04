let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let domain = ['.us','.net','.com','.cr','.it','.vzl','.ar','.io','.nz','.lt','.zzz','.mx','gov','.godaddy','test','.lol']
console.log(domain.length)
// Esto es para saber "cuantos" domain habia, porque metimos varios al azar y queriamos practicar "como contar" haciendolo usando codigo
function getDomain(){
for(let i = 0; i < pronoun.length; i++){ // este es el for para "pronoun"
for(let j = 0; j < adj.length; j++){ // este es el for para "adj"
for(let k = 0; k < noun.length; k++){ // este es el for para "noun"
for(let v = 0; v < domain.length; v++){ // este es el for para "domain"
let x = Math.floor(Math.random()*15) // Aca quisimos crear los dominios "al azar" para ver como podia hacerse esto, funciono..! :)!!!
console.log(pronoun[i] + adj[j] + noun[k] +
domain[x] ) // aca se imprimira la posicion "i", "j", "k", "x" para generar el dominio del sitio web
}
}
}
}
}
getDomain() // con esto llamamos la funcion para poder ver el resultado finalgit
