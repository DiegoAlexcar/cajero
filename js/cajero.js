import { registrarUsuario } from './registro.js';
import { iniciarSesion } from './inicio.js';
import { retirarDinero, consignarDinero } from './transacciones.js';
import { verSaldo, verMovimientos } from './consultas.js';
import { cambiarClave} from './seguridad.js';

let usuarios = [];
let usuarioActivo = null;

while (true) { // menú principal
    let menu = parseInt(prompt(
        "Seleccione opción del menú:\n" +
        "1. Registrar\n" +
        "2. Iniciar Sesión\n" +
        "3. Salir"
    ));

    switch(menu) {
        case 1:
            registrarUsuario(usuarios);
            break;

        case 2:
            usuarioActivo = iniciarSesion(usuarios);
            if (usuarioActivo) {
                while (true) { // menú de transacciones
                    let opcion = parseInt(prompt(
                        "Elija la opción:\n" +
                        "1. Retirar dinero\n" +
                        "2. Consignar dinero\n" +
                        "3. Ver saldo\n" +
                        "4. Ver movimientos\n" +
                        "5. Cambio de clave\n" +
                        "6. Cerrar sesión"
                    ));

                    switch(opcion) {
                        case 1: retirarDinero(usuarioActivo); break;
                        case 2: consignarDinero(usuarioActivo); break;
                        case 3: verSaldo(usuarioActivo); break;
                        case 4: verMovimientos(usuarioActivo); break;
                        case 5: cambiarClave(usuarioActivo); break;
                        case 6: 
                            usuarioActivo = null;
                            alert("Sesión cerrada");
                            break; // rompe menú transacciones
                        default: alert("Opción no válida");
                    }

                    if (!usuarioActivo) break; // salir de transacciones
                }
            }
            break;

        case 3:
            alert("Gracias por usar el banco");
            break; // sale del menú principal

        default:
            alert("Opción no válida");
    }

    if (menu === 3) break; // salir del programa
}
