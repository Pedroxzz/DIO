//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados
let saldoTotal = parseInt(gets());
let valorSaque = parseInt(gets());

//TODO: Criar as condições necessárias para impressão da saída, vide tabela de exemplos.
let saldoDisponivel = saldoTotal - valorSaque

if (saldoDisponivel >= 0) {
  print(`Saque realizado com sucesso. Novo saldo: ${saldoDisponivel}`)
}else{
  print("Saldo insuficiente. Saque nao realizado!");
}