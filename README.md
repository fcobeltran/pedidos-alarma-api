# pedidos-alarma-api
Pedido Alarm API
Este proyecto es una API sencilla que recibe pedidos a través de un webhook (como los generados por Wix) y reproduce una alarma sonora (archivo MP3) cuando llega un pedido. El objetivo es ser notificado instantáneamente cuando se realiza un pedido en tu página web.

Descripción del Proyecto
Este proyecto utiliza:

Node.js: Para levantar el servidor.
Express: Como framework de servidor.
play-sound: Para reproducir archivos de sonido en formato MP3.
Vercel: Para el despliegue en la nube.
Características
Reproducción de un sonido de alarma cuando llega un pedido.
Recepción de pedidos en formato JSON a través de un webhook.
Requisitos Previos
Node.js (v14 o superior)
Git (para clonar el repositorio)
Instalación
Clona este repositorio:

bash
Copiar código
git clone https://github.com/tu-usuario/pedido-alarm-api.git
Navega al directorio del proyecto:

bash
Copiar código
cd pedido-alarm-api
Instala las dependencias necesarias:


Ejecución Local
Para ejecutar el proyecto localmente y probar la API:

Despliegue en Vercel
Este proyecto está configurado para ser desplegado en Vercel. Para desplegar:

Ve a Vercel e inicia sesión.
Crea un nuevo proyecto y conecta tu repositorio de GitHub.

Configuración del Webhook en Wix
En tu sitio de Wix, configura un webhook que envíe una solicitud POST a la URL generada por Vercel.

La URL será algo como:

perl
Copiar código
https://pedido-alarm-api.vercel.app/pedido
Asegúrate de que los datos enviados desde Wix estén en formato JSON.

Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor crea un "Pull Request".

Licencia
Este proyecto está bajo la Licencia MIT.

