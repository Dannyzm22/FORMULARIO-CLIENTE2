document.getElementById("clienteForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Detener el envío del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const cedula = document.getElementById("cedula").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const fecha = document.getElementById("fecha").value;
    const mensajeError = document.getElementById("mensajeError");

    let errores = [];

    if (nombre === "") {
        errores.push("El nombre completo es obligatorio.");
    }

    const cedulaRegex = /^\d{10}$/;
    if (!cedulaRegex.test(cedula)) {
        errores.push("La cédula debe tener exactamente 10 dígitos numéricos.");
    }

    const correoRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!correoRegex.test(correo)) {
        errores.push("El correo electrónico no es válido.");
    }

    const telefonoRegex = /^\d{7,}$/;
    if (telefono !== "" && !telefonoRegex.test(telefono)) {
        errores.push("El teléfono debe tener al menos 7 dígitos numéricos.");
    }

    if (direccion.length < 10) {
        errores.push("La dirección debe tener al menos 10 caracteres.");
    }

    if (fecha === "") {
        errores.push("La fecha de registro es obligatoria.");
    } else {
        const fechaSeleccionada = new Date(fecha);
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        if (fechaSeleccionada > hoy) {
            errores.push("La fecha de registro no puede ser futura.");
        }
    }

    if (errores.length > 0) {
        mensajeError.innerHTML = errores.join("<br>");
    } else {
        mensajeError.innerHTML = "";
        alert("Datos guardados correctamente.");
        this.reset(); // Limpiar el formulario
    }
});
