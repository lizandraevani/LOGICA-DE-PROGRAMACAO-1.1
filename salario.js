var salarioatual = parseFloat(prompt("digite o salario atual: R$"))

if (salarioatual <= 500) {
    novosalario = salarioatual*1.15
} else if (500 > salarioatual && salarioatual <= 1000) {
    novosalario = salarioatual*1.125
} else {
    novosalario = salarioatual*1.1
    
}
console.log(`Seu novo salário é R$ ${novosalario.toFixed(3)}`)