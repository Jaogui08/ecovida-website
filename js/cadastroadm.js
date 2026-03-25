const btnCadastro = document.getElementById("btnCadastro");

btnCadastro.addEventListener("click", ()=> {
    const nome =document.getElementById("nomeAdm");
    const email =document.getElementById("emailAdm");
    const passwd =document.getElementById("passwdAdm");
    const cpf =document.getElementById("cpfAdm");

    const validarEmail = email.value.toLowerCase().trim();

    if (!validarEmail.endsWith("@ecovida.com")) {
        Swal.fire({
            title: "Email inválido!",
            icon: "error"
        });
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const novoUsuario = {
        nome: nome.value,
        email: email.value,
        passwd: passwd.value,
        cpf: cpf.value,
        tipo: "ADM"
    };

    usuarios.push(novoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    Swal.fire("Cadastro ADM realizado!");

    nome.value = "";
    email.value = "";
    passwd.value = "";
    cpf.value = "";
});