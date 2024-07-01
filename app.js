
alert('Ola Mundo');
let numeroMaximo = prompt('Escolha o número máximo para a nossa brincadeira!');

// Primeir teste com numero não randomico!
//let numeroSecreto = 5; -- Este é apenas o numero que escolhemos.
let numeroSecreto= parseInt(Math.random() * numeroMaximo + 1); 
// o parseInt procura o numero inteiro, sem virgula
//

let chute; //comando que além da mensagem amigavel, armazena o valor digitado em uma variavel
console.log ('Valor do chute' + chute);
let tentativas =1;

//Faça enquanto
while (chute != numeroSecreto){
       chute= prompt('Escolha um numero de 1 à '+ numeroMaximo);
    if(chute == numeroSecreto){
        //alert(`Você acertou! ${numeroSecreto}`);  
        //OU        
        break
        alert('Você acertouo numero secreto que é: ' + numeroSecreto +' Com '+ tentativas + ' tentativas');
        console.log ('numeroSecreto');
    }
    else{
            if(chute > numeroSecreto){
            alert('O numero secreto é menor que :' + chute);
            }
                else{
                alert('O número secreto é maior que :' + chute);
                }   
        } tentativas++;  
    }

//Operador quartenário
//Novo cod que irá substitui o IF que esta em baixo
let palavratentativa = tentativas >1 ? ' tentativas ' : ' tentativa ';
alert('Você acertouo numero secreto que é: ' + numeroSecreto +' Com '+ tentativas +  palavratentativa);
 /*   if (tentativas>1){
    alert('Você acertouo numero secreto que é: ' + numeroSecreto +' Com '+ tentativas + ' tentativas');
    }     
    else{
    alert('Você acertouo numero secreto que é: ' + numeroSecreto +' Com '+ tentativas + ' tentativa');
   } */
    
    function inserirHTML() {
        document.getElementById("mensagemDiv").innerHTML = "<p>Olá, <strong>mundo</strong>!</p>";}