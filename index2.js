const express = require('express');
const app = express();
const player = require('play-sound')(); // Importar la biblioteca para reproducir sonido
const port = process.env.PORT || 3000;
const path = require('path'); // Para trabajar con rutas

// Middleware para analizar JSON
app.use(express.json());

// Ruta para recibir pedidos
app.post('/pedido', (req, res) => {
  const pedido = req.body;

  if (pedido) {
    console.log("Nuevo pedido recibido:", pedido);
    
    // Ruta absoluta del archivo de sonido
    const soundPath = path.join(__dirname, 'alarma.mp3');
    
    // Reproducir el sonido de la alarma
    player.play(soundPath, (err) => {
      if (err) {
        console.error('Error al reproducir el sonido:', err);
      }
    });
    
    // Respuesta al webhook de que se ha recibido el pedido
    res.status(200).send('Pedido recibido y alarma activada');
  } else {
    res.status(400).send('No se recibió ningún pedido');
  }
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});
