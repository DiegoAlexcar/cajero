export function iniciarSesion(usuarios) {
    if (usuarios.length === 0) {
        alert("No tienes un usuario registrado, regístrate primero");
        return null;
    }

    let intentos = 0;
    while (intentos < 3) {
        let user = prompt("Ingrese Usuario");
        let pass = prompt("Ingrese Clave");

        let encontrado = usuarios.find(u => u.usuario === user && u.clave === pass);

        if (encontrado) {
            alert("Ingreso exitoso");
            return encontrado;
        } else {
            intentos++;
            alert("Información incorrecta. Intentos restantes: " + (3 - intentos));
        }

        if (intentos === 3) {
            alert("Cuenta bloqueada por 24 horas. Comunícate con tu banco");
        }
    }
    return null;
}