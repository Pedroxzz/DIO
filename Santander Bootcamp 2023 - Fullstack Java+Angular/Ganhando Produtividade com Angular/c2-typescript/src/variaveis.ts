/**
 * Variaveis
 */

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Felipe;";
let idade: number = 30;
let altura: number = 1.9;

//tipos especiais null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
    name:"Felipe",
    cidade:"SP",
    idade:30,
};

//objeto - com previsibilidade
type ProdutoLoja = {
    nome: string,
    preço: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preço: 89.90,
    unidades: 5
}

 /**
  * arrays
  */

let dados: string[] = ["João", "Pedro", "Ana", "Clara", "Julia"];
let dados2: Array<string> = ["João", "Pedro", "Ana", "Clara", "Julia"];

let infos: (string | number)[] = [322, "João"];

/**
 * Tuplas
 */
let boleto: [string, number, number] = ["conta agua", 187.9, 32165484];

/**
 * arrays métodos (são os mesmos do Javascript)
 */
dados.pop();

/**
 * Datas
 */
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());