const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", ()=> {
    const email = document.getElementById("emailLogin").value.toLowerCase().trim();
    const passwd = document.getElementById("passwdLogin").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(user => user.email === email && user.passwd === passwd);

    if (usuarioEncontrado) {
        window.location.href = "../pages/home.html";
    } else {
        Swal.fire({
            title: "Email ou senha inválidos!",
            icon: "error"
        });
    }

});