let valorLitro = 6.80 
let valorAbtc = parseFloat(prompt("Valor para abastecer:"));

let resultadoGasolina = parseInt(valorAbtc / valorLitro);

alert(`O cliente abasteceu ${resultadoGasolina} litros`);




let celsius = prompt("Digite a temperatura em graus Celsius:");
let calculo = (9* celsius + 160)/5;

alert(`O valor ${celsius}°c em Fahrenheit é de ${calculo} `)




let fahrenheit = prompt("Digite a temperatura em graus Fahrenheit:");
let cal = ((fahrenheit-32)*5)/9;

alert(`O valor ${fahrenheit} em Celsius é de ${cal}°c`)




let comprimento = parseInt(prompt("Insira o comprimento da sua caixa:"));
let largura = parseInt(prompt("Insira a largura da sua caixa:"));
let altura = parseInt(prompt("Insira a altura da sua caixa:"))

let volume = comprimento * largura * altura;
 
alert(`O volume é de ${volume}m3`);




let numero = prompt("Digiteseu número aqui");
let resultado = numero * numero;

alert(`O valor ${numero} ao quadrado é de ${resultado}`);



let n1 = parseFloat(prompt("Sua primeira nota:"));
let n2 = parseFloat(prompt("Sua segunda nota:"));
let n3 = parseFloat(prompt("Sua terceira nota:"));
let n4 = parseFloat(prompt("Sua quarta nota:"));
let n5 = parseFloat(prompt("Sua quinta nota:"));

let soma = n1 + n2 + n3 + n4 + n5;

let media = soma / 5;

alert(`A soma de suas notas é de ${soma}e a média de ${media}`);




let prim = parseInt(prompt("Primeiro número:"));
let seg = parseInt(prompt("Segundo número:"));

let resto = prim % seg;

alert(`O resto da divisão de ${prim} por ${seg} é de ${resto}.`)




let name = prompt("Escreva sua frase:");
alert(`Sua frase tem ${name.length} caracteres.`)




let frase = prompt("Digite sua frase ou texto:");

alert(`Aprimeira letra desse texto é ${frase.toUpperCase()[0]} e a última é sfdhsfghB${frase.toLowerCase().slice(-1)}`)





let cracha = prompt("Informe eu nome:");
let sobre = prompt("informe seu sobrenome:");
let idd = parseInt(prompt("Informe sua idade:"));
let setor = prompt("Informe seu setor:");

alert(`Nome: ${cracha.toUpperCase()} ${sobre.toUpperCase()}, idade: ${idd}, Setor: ${setor}.`);
