# Fresh Vita

Tienda web hecha con Java y Spring Boot para la venta de purificadores de aire, accesorios y mantenimiento.

## Lo que ya incluye

- Catalogo de purificadores, repuestos y servicios
- Carrito de compra
- Pago simulado con tarjeta, Yappy Banco General y contra entrega
- Envio gratis en Panama centro y recargo por otras zonas
- Secciones de marca, certificaciones, marketing y contacto
- Diseno responsive para celular y escritorio

## Ejecutar

### Opcion 1: usando el archivo listo

En Windows, haz doble clic en:

`run-freshvita.bat`

### Opcion 2: desde terminal

```bat
.tools\maven\apache-maven-3.9.15\bin\mvn.cmd spring-boot:run
```

## Abrir en otros dispositivos

La aplicacion esta configurada para escuchar en toda la red local con:

- `server.address=0.0.0.0`
- `server.port=8080`

Si los otros dispositivos estan en la misma red Wi-Fi, pueden abrir:

- `http://192.168.0.7:8080`

Prueba de salud:

- `http://192.168.0.7:8080/health`

## Si no abre desde otro celular o laptop

- Verifica que ambos dispositivos esten en la misma red
- Asegurate de que Windows Firewall permita conexiones al puerto `8080`
- Manten esta computadora encendida mientras compartes la pagina

## Publicarla fuera de tu red local

La opcion mas simple para este proyecto es **Railway**.

Fuente oficial usada:

- [Guia oficial de Spring Boot en Railway](https://docs.railway.com/guides/spring-boot)

Este proyecto ya esta adaptado para hosting porque:

- usa `server.port=${PORT:8080}` para aceptar el puerto dinamico del hosting
- incluye `Dockerfile`
- tiene endpoint de salud en `/health`

### Publicarla en Railway

1. Sube este proyecto a GitHub.
2. Entra a [Railway](https://railway.com/).
3. Crea un proyecto nuevo.
4. Elige **Deploy from GitHub repo**.
5. Selecciona tu repositorio de Fresh Vita.
6. Espera a que Railway haga el build automaticamente.
7. En la seccion **Networking**, genera un dominio publico.

Tu pagina quedara navegable con una URL publica del estilo:

- `https://fresh-vita-production.up.railway.app`

### Checklist rapido para Railway

Antes de subir:

- el proyecto ya usa `server.port=${PORT:8080}`
- el proyecto ya expone `0.0.0.0`
- el proyecto ya tiene `Dockerfile`
- el proyecto ya tiene endpoint `/health`

Despues de desplegar:

1. Abre tu servicio en Railway.
2. Ve a `Settings` o `Networking`.
3. Pulsa `Generate Domain`.
4. Abre la URL publica generada.
5. Prueba tambien:
   - `/health`
   - la pagina principal
   - el carrito y las imagenes

### Si el deploy falla

- revisa los logs de build en Railway
- asegúrate de que el repositorio subido incluya `pom.xml`, `src/`, `Dockerfile` y `.gitignore`
- si Railway usa Docker, tomara el `Dockerfile`
- si Railway detecta Java automaticamente, usara el proyecto Spring Boot

### Alternativa con Docker

Railway tambien puede desplegar este proyecto usando el `Dockerfile` incluido.

### Si no quieres GitHub

Railway tambien permite desplegar con CLI, pero la opcion de GitHub suele ser la mas facil para dejarlo como sitio real y volver a publicarlo con cada cambio.

### Opcion alternativa: exponer esta PC

Tambien puedes hacerlo desde tu propia computadora, pero es menos estable que Railway. Necesitas:

- abrir el puerto `8080` en Windows Firewall
- configurar port forwarding en tu router hacia `192.168.0.7`
- usar una IP publica o un dominio

Sin uno de esos caminos, la pagina solo puede verse en esta PC o dentro de tu red local.

## Empaquetar como aplicacion

```bat
.tools\maven\apache-maven-3.9.15\bin\mvn.cmd clean package
```

Luego puedes ejecutar el jar:

```bat
.tools\jdk17\jdk-17.0.14+7\bin\java.exe -jar target\freshvita-1.0.0.jar
```

## Archivos principales

- `src/main/resources/templates/index.html`
- `src/main/resources/static/css/style.css`
- `src/main/resources/static/js/app.js`
- `src/main/resources/application.properties`
- `Dockerfile`
