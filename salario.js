var salarioatual = parseFloat(prompt("digite o salario atual: R$"))
var aumento = parseFloat(prompt("digite o aumento"))
var novosalario = salarioatual*(1 +  aumento)

if (salarioatual <= 500) {
    aumento = 0.15; // 15%
} else if (salarioatual <= 1000) {
    aumento = 0.125; // 12,5%
} else {
    aumento = 0.10; // 10%
}
console.log("salario atual: R$" + salarioatual.toFixed(2) + "\n" + "novo salario: R$" + novosalario.toFixed(2))