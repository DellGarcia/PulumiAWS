# <center>Estudo sobre o Pulumi</center>

Este repositório tem como objetivo documentar meus estudos sobre a ferramenta Pulumi, o código aqui foi criado seguindo os passos na documentação do Pulumi para integra-lo com a AWS.

Confira o passo a passo em: [Get Started with Pulumi & AWS](https://www.pulumi.com/docs/iac/get-started/aws/)

## Conhecendo o Pulumi

Pulumi é uma ferramenta que permite criar uma infraestrutura como código (Infrastructure as Code) para diversas plataformas de cloud, como AWS, GCP, Azure e muitas outras.

Ter uma infraestrutura como código permite utilizar as vantagens de uma linguagem de programação, como estruturas condicionais e de repetição, arrays, listas, funções e testes, além de permitir que o desenvolvedor utilize sua experiência e ferramentas com sua linguagem de preferência.

O Pulumi oferece suporte a muitas das linguagens populares como:

* Typescript 
* Java
* CSharp
* Go
* Python

## Como funciona o Pulumi (Project and Stack)

O Pulumi é organizado em Project e Stacks 

O Pulumi funciona de forma declarativa ele avalia o que existe no script e compara com o estado atual 

### Estados e Planos (Plan and States)

### Pulumi Cloud