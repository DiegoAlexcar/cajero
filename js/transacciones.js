export function retirarDinero(usuarioActivo) {
    let retirar = parseFloat(prompt("Monto a retirar"));
    if (isNaN(retirar) || retirar <= 0) {
        alert("Monto inválido. Intente nuevamente");
        return;
    }

    if (retirar > usuarioActivo.saldo) {
        alert("Saldo insuficiente");
    } else {
        usuarioActivo.saldo -= retirar;
        let fecha = new Date().toLocaleString();
        usuarioActivo.movimientos.push(`Retiro de $${retirar} - fecha: ${fecha}`);
        alert(`Retiro de $${retirar}. Nuevo saldo: $${usuarioActivo.saldo}`);
    }
}

export function consignarDinero(usuarioActivo) {
    let consignar = parseFloat(prompt("Ingrese monto a consignar"));
    if (isNaN(consignar) || consignar <= 0) {
        alert("Monto inválido. Intente nuevamente");
        return;
    }

    usuarioActivo.saldo += consignar;
    let fecha = new Date().toLocaleString();
    usuarioActivo.movimientos.push(`Consignación de $${consignar} - fecha: ${fecha}`);
    alert(`Consignación realizada. Nuevo saldo: $${usuarioActivo.saldo}`);
}
