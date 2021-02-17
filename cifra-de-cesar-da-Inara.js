function decode(encodedString) {
    const arrayString = encodedString.split('');
    const ordemCerta =  arrayString.reverse();
    const arrayNumeros = [];
    const resposta = [];
    
    //Loop dentro do array ordemCerta
    for(let i = 0; i < ordemCerta.length; i++){
        
        //se a soma do numero do index + o proximo for < 65 e diferente de 32, soma com o proximo item do array
        if(parseInt(ordemCerta[i] + ordemCerta[i+ 1]) < 65 && parseInt(ordemCerta[i] + ordemCerta[i+ 1]) !== 32 ){
            let num = parseInt(ordemCerta[i] + ordemCerta[i + 1] + ordemCerta[i + 2]);
            
            //se mesmo com 3 digitos ainda for menor que 65, soma com o proximo item e adiciona ao array de numeros
            if(num < 65){
                num =  parseInt(ordemCerta[i] + ordemCerta[i + 1] + ordemCerta[i + 2]+ ordemCerta[i + 3]);
                ordemCerta.splice(i,3);
                arrayNumeros.push(num);
                //se não for menor, adiciona a soma no array de numeros    
            }else{
                ordemCerta.splice(i,2);
                arrayNumeros.push(num);
            };
        }
        //se a soma do numero do index e o proximo for maior que 65, adiciona a soma no array de numeros 
        else{
            let num =  parseInt(ordemCerta[i] + ordemCerta[i+ 1]);
            ordemCerta.splice(i,1);
            arrayNumeros.push(num);
        };
    };
    
    //Tranforma cada numero do array de numeros em letra
    for(let num of arrayNumeros){
        resposta.push(String.fromCharCode(num));
    };
    //retorna as letras sem separação
    return resposta.join('');
};


console.log(decode("235110011501782351112179911801562340161171141148"))//Truth Always Wins