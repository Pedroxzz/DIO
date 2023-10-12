type heroi={
    name: string;
    vulgo: string;
}

function printaObjets(pessoa: heroi){
    console.log(pessoa);
}

printaObjets({
    name: "Bruce wayne",
    vulgo: "Batman",
})