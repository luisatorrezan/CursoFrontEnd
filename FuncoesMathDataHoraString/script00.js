//funções matemáticas 

//sqrt //pow
//raiz  quadrada de 25
console.log(Math.sqrt(25)); //5

//potência
console.log(Math.pow(3,2)); //3² = 9
console.log(Math.pow(4,3)); //4³ = 64
console.log(Math.pow(27,1/3)); //27^(1/3) = 3

//arredondamento
//math.round (arredondadr para o mais próximo)
console.log(Math.round(4.4)); //4
console.log(Math.round(4.7)); //5
//math.floor (arredondar para baixo)
console.log(Math.floor(4.9)); //4
//math.ceil (arredondar para cima)
console.log(Math.ceil(4.1)); //5

//números aleatórios
//math.random (sorteia sempre entre 0 e 1)
console.log(Math.random()); //0 -> 1 

//1 -> 100 -> 
console.log(Math.ceil(Math.random()*100)); 
//0 -> 99
console.log(Math.floor(Math.random()*100));

//1 -> 10000
console.log(Math.ceil(Math.random()*10000)); 
//0 -> 9999
console.log(Math.floor(Math.random()*10000));

//sortear 0 -> 50
console.log(Math.round(Math.random()*50));
//sortear 50 -> 100
console.log(Math.round(Math.random()*50+50));

//máximo, mínimo, absoluto
var numeros = [0,1,2,3,4,5,6,7,8,9]; //array
console.log(Math.max(numeros)); //9 (maior número da sequência)
console.log(Math.min(numeros)); //0 (menor número da sequência)
var absoluto = -10;
console.log(Math.abs(absoluto)); //10 (converte número negativo para positivo)