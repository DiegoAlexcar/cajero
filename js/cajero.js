let usuarios = []  
let usuarioActivo = null
let Iniciar = true
let sesionIniciada = false

while (Iniciar) {
    let menu = parseInt(prompt("Seleccione opción del menú:\n1. Registrar\n2. Iniciar Sesión\n3. Consultas y  Movimientos \n4. Salir"))

    switch (menu) {
        case 1: { // Registro
            let identificacion = parseInt(prompt("Ingrese número de documento"))
            let usuario = prompt("Ingrese nombre de usuario")
            let correo = prompt("Ingrese correo electrónico")
            let clave = prompt("Ingrese clave")
            let confirmarClave = prompt("Ingrese de nuevo la clave")

            if (clave !== confirmarClave) {
                alert("Las claves no coinciden. Intente nuevamente")
            } else {
                usuarios.push({ identificacion, usuario, correo, clave, saldo: 0, movimientos: [] })
                alert("Registro correctamente")
            }
            break
        }

        case 2: { // Iniciar Sesión
            if (usuarios.length === 0) {
                alert("No tienes un usuario registrado, regístrate primero")
            } else {
                let contadorUsuario = 0
                while (contadorUsuario < 3) {
                    let user = prompt("Ingrese Usuario")
                    let pass = prompt("Ingrese Clave")

                    let correcto = false
                    for (let i = 0; i < usuarios.length; i++) {
                        if (user === usuarios[i].usuario && pass === usuarios[i].clave) {
                            alert("Ingreso exitoso")
                            usuarioActivo = usuarios[i]
                            sesionIniciada = true

                            break
                        }
                    }

                    if (sesionIniciada) {
                        break
                    } else {
                        contadorUsuario++
                        alert("Información incorrecta. Intentos restantes: " + (3 - contadorUsuario))
                    }

                    if (contadorUsuario === 3) {
                        alert("Cuenta bloqueada por 24 horas. Comunícate con tu banco")
                    }
                }
            }
            break;
        
        }
        case 3: { // Consultas  y movimientos
            if (!sesionIniciada || usuarioActivo === null) {
                alert("Debes iniciar sesión primero.")
                break
            }

            let opcion = parseInt(prompt("Elija la opción:\n1. Retirar dinero\n2. Consignar\n3. Ver saldo\n4. Ver movimientos\n5. Cambio de clave"))

            switch (opcion) {
                case 1: { // Retirar
                    let retirar = parseFloat(prompt("Monto a retirar"))
                    if (retirar > usuarioActivo.saldo) {
                        alert("Saldo insuficiente")
                    } else if (retirar > 0) {
                        usuarioActivo.saldo -= retirar
                        let fecha = new Date().toLocaleDateString()
                        usuarioActivo.movimientos.push(`Retiro de $${retirar} - fecha: ${fecha}`)
                        alert(`Retiro de: $${retirar}. Nuevo Saldo: $${usuarioActivo.saldo}`)
                    } else {
                        alert("Monto inválido. Intente nuevamente")
                    }
                    break
                }
                case 2: { // Consignar
                    let consignar = parseFloat(prompt("Ingrese monto a consignar"))
                    if (consignar > 0) {
                        usuarioActivo.saldo += consignar
                        fecha = new Date().toLocaleTimeString()
                        usuarioActivo.movimientos.push(`Consignación de $${consignar} - fecha: ${fecha}`)
                        alert(`Nuevo saldo: $${usuarioActivo.saldo}`)
                    } else {
                        alert("Monto inválido. Intente nuevamente")
                    }
                    break
                }
                case 3: // Ver saldo
                    alert(`Saldo actual: $${usuarioActivo.saldo}`)
                    break

                case 4: { // Ver movimientos
                    if (usuarioActivo.movimientos.length === 0) {
                        alert("No hay transacciones registradas")
                    } else {
                        let listado = "Movimientos realizados:\n"
                        for (let i = 0; i < usuarioActivo.movimientos.length; i++) {
                            listado += `${i + 1}. ${usuarioActivo.movimientos[i]}\n`
                        }
                        alert(listado)
                    }
                    break
                }
                case 5: { // Cambio de contraseña
                    let nuevaClave = prompt("Ingresar nueva clave")
                    let confirmar = prompt("Ingrese nuevamente la clave")
                    if (nuevaClave !== confirmar) {
                        alert("Claves no coinciden. Intente nuevamente")
                    } else {
                        usuarioActivo.clave = nuevaClave
                        alert("Realizaste cambio de clave")
                    }
                    break
                }
                default:
                    alert("Opción no válida. Elija una opción entre 1 y 5")
            }
            break
        }

        case 4: // Salir
            alert("Saliendo...")
            sesionIniciada = false
            usuarioActivo = null
            Iniciar = false
            break

        default:
            alert("Opción no válida. Elija una opción entre 1 y 4")
    }
}
