const container = document.querySelector(".cartProductContainer");
const totalElemento = document.getElementById("total");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let totalGeral = 0;

function atualizarCarrinho() {
    container.innerHTML = "";
    totalGeral = 0;

    carrinho.forEach((produto, index) => {
        const precoTotal = produto.preco * produto.quantidade;
        const freteTotal = produto.frete * produto.quantidade;

        totalGeral += precoTotal + freteTotal;

        const div = document.createElement("div");
        div.classList.add("cartProduct");

        div.innerHTML = `
                <div class="productInfo">
                    <img src="${produto.imagem}" style="width: 170px; border: 1px #000000 solid; border-radius: 10px;">
                    <h1>${produto.nome}</h1>
                </div>

                <h1 class="productValue">R$ <span>${precoTotal.toFixed(2).replace(".", ",")}</span></h1>

                <h1 class="productValue">R$ <span>${freteTotal.toFixed(2).replace(".", ",")}</span></h1>

                <div class="productQuantity">
                        <button type="button" onclick="diminuir(${index})" style="padding: 10px; border-top: 1px #000000 solid; cursor: pointer;">
                            <img style="width: 30px;" src="../img/subtract.png">
                        </button>
                        <h1 style="padding-inline: 10px; color: #678567;" id="quantidade">${produto.quantidade}</h1>
                        <button type="button" onclick="aumentar(${index})" style="padding: 10px; border-bottom: 1px #000000 solid; cursor: pointer;">
                            <img style="width: 30px;" src="../img/add.png">
                        </button>
                </div>

                <button style="background: none; border: none;" onclick="remover(${index})">
                    <img style="width: 50px;" src="../img/trash-bin.png">
                </button>
        `;

        container.appendChild(div);
    });

    totalElemento.innerText = totalGeral.toFixed(2).replace(".", ",");
}

function aumentar(index) {
    if (carrinho[index].quantidade < 10) {
        carrinho[index].quantidade++;
        salvar();
    }
}

function diminuir(index) {
    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade--;
        salvar();
    }
}

function remover(index) {
    carrinho.splice(index, 1);
    salvar();
}

function salvar() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

atualizarCarrinho();