const produto = document.querySelector(".productInfo");

const precoUni = parseFloat(produto.dataset.preco);
const freteUni = parseFloat(produto.dataset.frete);

let quantidade = 1;

const quantidadeElemento = document.getElementById("quantidade");
const precoElemento = document.getElementById("preco");
const freteElemento = document.getElementById("frete");

const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");

function atualizarValor() {
    const precoTotal = precoUni * quantidade;
    const freteTotal = freteUni * quantidade;

    precoElemento.innerText = precoTotal.toFixed(2).replace(".", ",");
    freteElemento.innerText = freteTotal.toFixed(2).replace(".", ",");

    quantidadeElemento.innerText = quantidade;
}

btnMais.addEventListener("click", ()=> {
    if (quantidade < 10) {
        quantidade++;
        atualizarValor();
    }

});

btnMenos.addEventListener("click", ()=> {
    if (quantidade > 1) {
        quantidade--;
        atualizarValor();
    }

});


const btnCarrinho = document.querySelector(".cart");

btnCarrinho.addEventListener("click", ()=> {
    const nome = btnCarrinho.dataset.nome;
    const preco = parseFloat(btnCarrinho.dataset.preco);
    const imagem = btnCarrinho.dataset.imagem;

    const frete = freteUni;

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const produtoExistente = carrinho.find(p => p.nome === nome);

    if (produtoExistente) {
        Swal.fire({
            title: "Este produto já está no carrinho!",
            icon: "error"
        });
        return;
    }

    carrinho.push({
        nome,
        preco,
        imagem,
        quantidade,
        frete
    });

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    Swal.fire({
        title: "Adicionado ao carrinho!",
        icon: "success"
    });
});