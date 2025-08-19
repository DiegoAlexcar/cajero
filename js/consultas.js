export function verSaldo(usuarioActivo) {
    alert(`Saldo actual: $${usuarioActivo.saldo}`);
}

export function verMovimientos(usuarioActivo) {
    if (usuarioActivo.movimientos.length === 0) {
        alert("No hay transacciones registradas");
        return;
    }

    let listado = "Movimientos realizados:\n";
    usuarioActivo.movimientos.forEach((mov, i) => {
        listado += `${i + 1}. ${mov}\n`;
    });
    alert(listado);
}