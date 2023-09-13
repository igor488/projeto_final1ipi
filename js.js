var lista_de_produtos = []

/**vamos abrir o while para o usuario poder fazer sua escolha */

while (true) {

    var opcao = prompt(`
  bem vindo ao cadastro de produto :)
 
  1- cadastrar novo produuto
  2- editar produto
  3- remover produto
  4- visualizar todos os produtos
  `)
  
    /**o if sera usado para o usuario escolher qual opçao ele quer usar  */
    if (opcao == 1) {
        alert("passou")
           // adcionar produto

    } else if (opcao == 2) {
        alert("passou")
    //editar produto

    } else if (opcao == 3) {
        alert("passou")
        //remover produto

    } else if (opcao == 4) {
        alert("passou")
        // ver quais produtos estao disponiveis
        
    } else {
        alert("vc nao selecionou nenhum dos meus item")
        // caso escolha algo que nao tenha sera mostrado que nao tem
    }

}