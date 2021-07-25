function taVazio(valor1,valor2,valor3,valor4,valor5) {
    if(valor1 === "" || valor2 === "" || valor3 === "" || valor4 === "" || valor5 === ""){
		return true;
	}else{
		return false;
	}
}

function cadastrarProduto(){
	let nomeInput = document.getElementById("nome-produto");
    let descricaoInput = document.getElementById("descricao");
	let categoriaInput = document.getElementById("categoria");
    let precoInput = document.getElementById("preco");
    let quantidadeInput = document.getElementById("quantidade");

    
    let produto = JSON.parse(localStorage.getItem("produto"));

    if(produto == null){
        localStorage.setItem("produto", "[]");
        produto = [];
    }

    let dataAuxiliar = {
        Nome: nomeInput.value,
		Descrição: descricaoInput.value,
		Categoria: categoriaInput.value,
		Preço: precoInput.value,
		Quantidade: quantidadeInput.value
    }
	 
	let saberSeVazio = taVazio(nomeInput.value, descricaoInput.value, categoriaInput.value, precoInput.value,quantidadeInput.value);

	if(saberSeVazio===true){
		alert("Erro no cadastrado do produto. Verifique as informações e tente novamente."); 
		nomeInput.value="";
		descricaoInput.value="";
		categoriaInput.value="";
		precoInput.value="";
		quantidadeInput.value=""	
	}else{
		produto.push(dataAuxiliar);
		localStorage.setItem("produto", JSON.stringify(produto));
		alert("Produto cadastrado com sucesso!"); 
		nomeInput.value="";
		descricaoInput.value="";
		categoriaInput.value="";
		precoInput.value="";
		quantidadeInput.value="";
	}
}

function cadastrarCliente(){
	let nomeInput = document.getElementById("nome-e-sobrenome");
    let idadeInput = document.getElementById("idade");
	let celularInput = document.getElementById("Celular");
	let cidadeUFInput = document.getElementById("cidade-uf");
    let logradouroInput = document.getElementById("logradouro");
	let complementoInput = document.getElementById("complemento");
	let cepInput = document.getElementById("cep");


    
    let cliente = JSON.parse(localStorage.getItem("cliente"));

    if(cliente == null){
        localStorage.setItem("cliente", "[]");
        cliente = [];
    }

    let dataAuxiliar = {
        Nome: nomeInput.value,
		Idade: idadeInput.value,
		Celular: celularInput.value,
		CidadeUF: cidadeUFInput.value,
		Logradouro: logradouroInput.value,   
		Complemento: complementoInput.value,
		CEP: cepInput.value,
    }

	let saberSeVazio = taVazio(nomeInput.value, idadeInput.value, celularInput.value, cidadeUFInput.value, logradouroInput.value, complementoInput.value, cepInput.value);

	if(saberSeVazio===true){
		alert("Erro no cadastrado do cliente. Verifique as informações e tente novamente."); 
		nomeInput.value="";
		idadeInput.value="";
		celularInput.value="";
		cidadeUFInput.value="";
		logradouroInput.value="";
		complementoInput.value="";
		cepInput.value="";
	}else{
		cliente.push(dataAuxiliar);
		localStorage.setItem("cliente", JSON.stringify(cliente));
		alert("Cliente cadastrado com sucesso!"); 
		nomeInput.value="";
		idadeInput.value="";
		celularInput.value="";
		cidadeUFInput.value="";
		logradouroInput.value="";
		complementoInput.value="";
		cepInput.value="";
	}

}

function routes(opcao){
	 if(opcao == "index"){
		window.location.href=`../${opcao}.html`
	 }else{
		window.location.href=`../pages/${opcao}.html`
	 }
}