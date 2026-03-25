const btnCadastro = document.getElementById("btnCadastro");

btnCadastro.addEventListener("click", ()=> {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const passwd = document.getElementById("passwd");
    const cpf = document.getElementById("cpf");

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const novoUsuario = {
        nome: nome.value,
        email: email.value,
        passwd: passwd.value,
        cpf: cpf.value
    };

    usuarios.push(novoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    Swal.fire("Cadastro realizado!");

    nome.value = "";
    email.value = "";
    passwd.value = "";
    cpf.value = "";
});