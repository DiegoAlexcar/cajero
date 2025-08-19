export function registrarUsuario(usuarios) {
    let identificacion = parseInt(prompt("Ingrese número de documento"));
    let usuario = prompt("Ingrese nombre de usuario");
    let correo = prompt("Ingrese correo electrónico");
    let clave = prompt("Ingrese clave");
    let confirmarClave = prompt("Ingrese de nuevo la clave");

    if (clave !== confirmarClave) {
        alert("Las claves no coinciden. Intente nuevamente");
    } else {
        usuarios.push({ identificacion, usuario, correo, clave, saldo: 0, movimientos: [] });
        alert("Registro correcto");
    }
}