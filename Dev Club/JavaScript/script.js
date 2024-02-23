// let cont = 2
// let soma = 0


// // gerar tabuada
// for(let i = 1; i<11 ; i++) {
//     console.log(`${i} X ${cont} = ${i*cont}`)
// }

// //somar números impares entre 100 e 200
// for(i = 100; i<=200; i++){
//     if(i%cont != 0) {
//         console.log(i)
// }}


// //somar numeros impares multiplos de 3 entre 0 e 500
// for(i = 0; i<=500; i++){
//     if(i%cont != 0) {
//         if(i%3 == 0){
//             soma+=i
//         } 
// }}
// console.log(soma)

// //número aleatório
// let tentativas = 0
// let objetivo = 6
// i = 0
// do{
//     i = Math.floor(Math.random() * 6) + 1
//     tentativas++
// } while(i !== objetivo)
// console.log(tentativas)

// // calcular fatorial
// const num = 5
// let fatorial = 1

// for(i = 2; i<= num; i++) {
//     fatorial *=i
// }
// console.log(fatorial)


// //funções para matemática básica
// function soma(a,b){
//     return a+b
// }
// function subtracao(a,b){
//     return a-b
// }
// function multiplicacao(a,b){
//     return a*b
// }
// function dividir(a,b){
//     return a/b
// }

// //maior número

// function maiorNumero(a,b) {
//     if (a > b) {
//         return a
//     } else
//     {return b}
// }
// // calcular media das notas 


// function mediaAritmetica (a,b,c) {
//     return(a + b + c) *3
// }

// function mediaPonderada (a,b,c) {
//     return(5 * a + 3 * b + 2 * c)/10
// }

// function calcularMedia (a,b,c, tipoMedia) {
//     if(tipoMedia==="A") {
//         return mediaAritmetica(a,b,c)
//     }
//     if(tipoMedia==="P") {
//         return mediaPonderada(a,b,c)
//     }
// }

// //Array - média

// let numeros = [1,2,3,4,5,6,7,8,9,10]
// let media = 0

// for(i = 0; i < numeros.length; i++) {
//     media += numeros[i]
// }
// media= media/ numeros.length
// console.log(media)


//array - somas

let soma = 0
let cont = 0
let numeros = [1,2,3,4,5,6,7,8,9,10]

for(i = 0; i < numeros.length; i++) {
    if(numeros[i] > 0) {
    soma += numeros[i]
    }
    else {
        cont += cont
    }
}

console.log(soma)
console.log(cont)