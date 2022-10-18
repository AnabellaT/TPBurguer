const btnEnviar = document.getElementById('enviar');

const validacion = (e) => {
    e.preventDeFault();
    const nombreDeUsuario = document.getElementById('usuario');
    const direccionEmail = document.getElementById('email');
    if (nombreDeUsuario.value === "") {
        alert("Por favor, escribe tu nombre de usuario.");
        usuario.focus();
        return false;
    }
    if (direccionEmail.value === "") {
        alert("Por favor, escribe tu correo electrónico");
        email.focus();
        return false;
    }

    return true;
}

submitBtn.addEventListener('click', validate);