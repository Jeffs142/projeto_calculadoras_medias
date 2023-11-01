const form = document.getElementById('form-atividade');//adicionando váriavel 
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>'; //adicioando emoji ao projeto
const imReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado"/>'; //adicioando emoji ao projeto (depoois de pronto joga para "input nota atividade, onde tem if e else")
const atividades = []; //isso é um array
const notas = []; //isso é um array 
const spamAprovado = '<spam class="resultado aprovado">Aprovado</spam>';
const spamReprovado = '<spam class="resultado reprovado">Reprovado</spam>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

let linhas = ''; //para manter a informação na tela, vamos adicionar o comando linhas e concatenar com todas linhas listadas
form.addEventListener('submit', function(e) { //faz com que o botão não resete a página
    e.preventDefault();

    adicionaLinha(); //esses comandos acionam a lógica estabelecida no codigo a baixo nas function
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() { //function adiciona linha para organizar o código 
    const inputNomeAtividade = document.getElementById('nome-atividade');//adicionando constante 
    const inputNotaAtividade = document.getElementById('nota-atividade');//adicionando constante 

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} Já foi inserida`);
    } else 
        atividades.push(inputNomeAtividade.value); //aqui vamos dar um valor ao array criado lá em cima  
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';//comando para adicionar linha 
        linha += `<td>${inputNomeAtividade.value}</td>`; //"linha adicionado" abre a crase e sinal de += é concatenação, td são os dados da tabela
        linha += `<td>${inputNotaAtividade.value}</td>`; //atenção que até esse moemnto está tudo relacionado
        linha += `<td>${inputNotaAtividade.value >=notaMinima ? 'Aprovado' : 'Reprovado'}</td>`; //Nota importante para relembrar, ?=if :=else. Aqui faremos o comando lógico
        linha += '</tr>'; //fechamento da tag tr

        linhas += linha; //concatenando todas as linhas

        //alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);//campo alert: crase entre parentes, atividade e nota são váriaveis

        inputNomeAtividade.value = ''; //comando para limpar o campo
        inputNotaAtividade.value = ''; 
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody'); //criando uma constante para colocar o conteúdo (linha) dentro do corpo da tabela.
    corpoTabela.innerHTML = linhas; //para inserir um conteudo dentro de uma tag usamos innerhtml
};

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spamAprovado : spamReprovado;

};

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}