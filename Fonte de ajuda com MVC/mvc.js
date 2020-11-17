class UserModel
    {
 
        constructor() { console.log("Model: Fui criada!");

            this._nome = "";
            this._imagem = "";
        }

  
        buscaUsuario()
        {
            console.log("Model: Buscando um usuário...");

     
            let request = new XMLHttpRequest();
            
      
            request.addEventListener( "load", () =>{
    
                if ( request.status == 200 )
                {
        
                    let dados = this._processaResponse( request.responseText );

                    this._atualiza( dados );
                }
            })

            request.open( "GET", "https://randomuser.me/api", false );

            request.send();
        }

        // Como a response vem como uma string, nós precisamos
        // processar esses dados para que possamos trabalhar
        // com eles
        _processaResponse( responseString )
        {
            console.log("Model: Processando response...");

            let response = JSON.parse( responseString );
            return response.results[0];
        }

        // Atualizamos os dados da nossa model de acordo com os
        // dados da response da API

        _atualiza( dados )
        {
            this._nome = dados.name.first + " " + dados.name.last;
            this._imagem = dados.picture.large;
        }

        // Método para devolver o nome do usuário
        getNome()
        {
            return this._nome;
        }

        // Método para devolver a imagem do usuário
        getImagem()
        {
            return this._imagem;
        }
    }

    // Visualização (View) de um usuário
    //
    // Sua função é lidar com a disponibilização de dados para o usuário final.
    class UserView
    {
        constructor() {}

        render( model )
        {
            let card = document.createElement( "div" );
            
            card.innerHTML = `
                <img src=${ model.getImagem() }>
                <p>${ model.getNome() }</p>
            `
            document.body.appendChild( card );
        }
    }

    // Controlador (Controller) de um usuário
    //
    // Sua função é ser o ponto de entrada da plataforma e mediar as models e as views.
    class UserController
    {
        // Também não precisamos de propriedades nessa controller
        constructor() { console.log("Controller: Fui criada!"); }

        // Função chamada quando queremos adicionar um usuário
        adicionaUsuario()
        {
            console.log( "Controller: Vou adicionar um usuário..." );

            // Criamos uma model e buscamos dados
            let user = new UserModel();
            user.buscaUsuario();

            // Passamos os dados para a view
            let view = new UserView();
            view.render( user );
        }
    }
    
    // Criamos a nossa controller (precisamos de um ponto de entrada)
    let controller = new UserController();
    
    // Lidamos com o input do lado de fora:
    document.getElementById( "busca" ).addEventListener( "click", controller.adicionaUsuario );

