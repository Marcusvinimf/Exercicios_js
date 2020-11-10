class Model 
{

    constructor() 
    {
        console.log("FOI CARA");

        this._nome = '';
        this._imagem = '';
    }

    buscaDados()
    {

        let pedido = new XMLHttpRequest();

        pedido.addEventListener("load", () =>{

            if ( pedido.status == 200 )
            {
                let dados = this._processaResponse( pedido.responseText );
                
                this._atualiza(dados)
            }
        })

        pedido.open( "GET", "https://randomuser.me/api", false );

        pedido.send();

    }

    _processaResponse( responseString )
    {
        let response = JSON.parse( responseString );
        return response.results[0];
    }

    _atualiza(dados){

        console.log(dados)

        this._nome = dados.name.first
        this._imagem = dados.picture.large;
    }
    
    
    getNome()
    {
        return this._nome;
    }

    getImagem()
    {
        return this._imagem;
    }
}

class UserView {

    constructor(){}

    rederizador (valor)
    {

        let body = document.querySelector("body")

        let registro = document.createElement("div")

        registro.innerHTML = `
        <p>${valor.getNome()}</p>
        <img src=${valor.getImagem()}>
         `

        body.appendChild(registro)
    }
}

class Controle 
{
    constructor(){}

    controlar()
    {

        let buscar = new Model()
        buscar.buscaDados()

        let ver = new UserView()
        ver.rederizador( buscar )
    }
}

let controleNosso = new Controle()

document.querySelector("button").addEventListener("click", controleNosso.controlar)

