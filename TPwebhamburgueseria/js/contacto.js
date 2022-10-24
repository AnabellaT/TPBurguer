function enviar() {
    if (document.getElementById('usuario').value.length < 2) {
        alert("Ingresá tu nombre")
        document.getElementById('usuario').focus()
        return 0
    }
    else {
        if (document.getElementById('apellido').value.length < 2) {
            alert("Ingresá tu apellido")
            document.getElementById('apellido').focus()
            return 0
        }
    
         else {
        if (document.getElementById('email').value.length < 2 || !document.getElementById('email').value.includes("@")) {
            alert("Ingresá tu email")
            document.getElementById('email').focus()
            return 0
        }
    
             else {
        if (document.getElementById('mensaje').value.length < 10) {
            alert("Dejanos tu comentario o consulta para reserva, incluyendo fecha, sucursal y cantidad de personas.")
            document.getElementById('mensaje').focus()
            return 0
        }

        else {
            alert("Muchas gracias por contactarnos. Responderemos a la brevedad.")
        }
    }}}}
