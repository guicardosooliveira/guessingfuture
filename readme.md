let = variavel que pode ser alterada
const = variavel que nao pode ser alterada

dados:
- ' "String" '
- integer = numero inteiro
- float = numero real 
-boolean = True ou False 
- undefined = indefinido

operadores:
atribuicao (=)
aritmeticos(*, +, -, /)
  o JS tenta fazer contas, mesmo sendo uma string e um numero, exceto com + que ocorre uma concatenacao
comparacao = (>, <, ==)

condicional = if 
if(boolean) {
  alguma coisa
} else {
  outra coisa
}

estrutura de dados:
array - lista (temperatura = [0, 4, 2, 60] )
objeto - uma variavel que contem propriedades e valores

ex: pessoa = {
  nome: "Guilherme"
  idade: 18
  ...
}

funcao
-criacao:
  function NomeDaFuncao() {
    codigo da funcao
  }
-parametros
  function Soma(a, b) {
    consolea + b
  }
-retorno
  function soma(a, b) {
    return a + b
  }


extensoes de linguagem (MAth, Date ...)
ex: Math.random()
    Math.floor()
    Math.ceil()

DOM - Document Object Model
transforma tudo em objeto

exemplos:
-window.alert("alerta")
-document.write("texto")
document.DocumentElement.style.background = "black" (manipular os elementos)