const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
const descargarEnlace = document.getElementById('descargar');

// Inicializar QRCode.js
let qrCode = new QRCode(contenedorQR, {
	width: 200,
	height: 200,
	colorDark: "#000000",
	colorLight: "#ffffff",
	correctLevel: QRCode.CorrectLevel.H,
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	// Obtener el texto o URL del input
	const texto = document.getElementById('link').value.trim();

	if (!texto) {
		alert('Por favor, escribe un texto o URL para generar el código QR.');
		return;
	}

	// Limpiar el contenido previo del contenedor QR
	contenedorQR.innerHTML = '';

	// Generar un nuevo QR
	qrCode = new QRCode(contenedorQR, {
		text: texto,
		width: 200,
		height: 200,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H,
	});

	// Esperar a que el QR se genere y actualizar el enlace de descarga
	setTimeout(() => {
		const qrCanvas = contenedorQR.querySelector('canvas');
		if (qrCanvas) {
			const qrDataURL = qrCanvas.toDataURL('image/png');
			descargarEnlace.href = qrDataURL;
			descargarEnlace.download = 'codigo-qr.png';
		}
	}, 300); // Tiempo para garantizar la generación del QR
});



