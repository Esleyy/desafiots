// Melhorando o codigo

/* let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/



enum Trabalho {
    Programador,
    Fotografa,
    Professora

}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Esley',
    idade: 35,
    profissao: Trabalho.Programador
};

let pessoa2: Humano = {
    nome: 'Roh',
    idade: 19,
    profissao: Trabalho.Professora
};


let pessoa: Humano = {
    nome: "Amanda",
    idade: 25,
    profissao: Trabalho.Fotografa
}   