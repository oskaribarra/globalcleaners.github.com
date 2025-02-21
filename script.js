document.getElementById('presupuestoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;

    const correoDestino = 'grupoempresarial.onez@gmail.com';
    const asunto = 'Solicitud de Presupuesto';
    const cuerpo = `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nServicio: ${servicio}\nMensaje: ${mensaje}`;

    window.location.href = `mailto:${correoDestino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

    document.getElementById('mensajeEnviado').style.display = 'block';
});