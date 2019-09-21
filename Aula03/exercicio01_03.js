/* não restrinja a entrada de dados a apenas 5 atletas. Agora após a inclusão de cada atleta o programa deve perguntar ao usuário se deseja incluir outro. A resposta é dada com (S/N). O programa continua mostrando o nome do mais alto, e a altura média.*/

let cont, nome, nome2, altura, altura2, repete, resp;
altura2 = 0;
nome2 = "";
soma = 0
media = 0;
cont = 0


while (cont < 5) {
    nome = prompt("Digite o nome do atleta:")
    altura = parseFloat(prompt("Digite a altura do atleta:"))

    if(altura > altura2){
        nome2 = nome;
        altura2 = altura;     
        soma = soma + altura;   
        resp = prompt('S/N')
        if(resp == S)
        {
            repete = true
        }
        else{
            repete = false
        }
    }
        media = soma/5
}
document.write (`${nome2} é o atleta com maior altura com ${altura2} metros e a média da altura é ${media} metros `)