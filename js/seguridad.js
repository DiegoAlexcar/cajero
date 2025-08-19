export function cambiarClave(usuarioActivo) {
    let nuevaClave = prompt("Ingrese nueva clave");
    let confirmar = prompt("Ingrese nuevamente la clave");

    if (nuevaClave !== confirmar) {
        alert("Claves no coinciden. Intente nuevamente");
    } else {
        usuarioActivo.clave = nuevaClave;
        alert("Cambio de clave exitoso");
    }
}

export function cerrarSesion() {
    alert("Sesión cerrada. Saliendo del sistema...");
    return null;
}