const opcoes = document.querySelectorAll(".paymentMethodsCard");
const btnCompra = document.getElementById("btnCompra");

let metodoSelecionado = null;

btnCompra.disabled = true;

opcoes.forEach(opcao => {
    opcao.addEventListener("click", ()=> {

        opcoes.forEach(o => o.classList.remove("selected"));

        opcao.classList.add("selected");

        metodoSelecionado = opcao.querySelector("h1").innerText;

        btnCompra.disabled = false;
    });
});

btnCompra.addEventListener("click", () => {

    Swal.fire({
        title: "Compra realizada!",
        text: `Pagamento com ${metodoSelecionado}`,
        icon: "success"
    }).then(()=> {
        window.location.href = "../pages/home.html";
    });

    localStorage.removeItem("carrinho");
});



let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const totalProdutosElemento = document.getElementById("totalProdutos");
const totalFreteElemento = document.getElementById("totalFrete");
const totalGeralElemento = document.getElementById("totalGeral");

let totalProdutos = 0;
let totalFrete = 0;

carrinho.forEach(produto => {
    totalProdutos += produto.preco * produto.quantidade;
    totalFrete += produto.frete * produto.quantidade;
});

const totalGeral = totalProdutos + totalFrete;

totalProdutosElemento.innerText = totalProdutos.toFixed(2).replace(".", ",");
totalFreteElemento.innerText = totalFrete.toFixed(2).replace(".", ",");
totalGeralElemento.innerText = totalGeral.toFixed(2).replace(".", ",");