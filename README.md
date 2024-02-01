# THOM’S COFFE

Primera app móvil utilizando React Native, creado a partir del ecosistema Expo. Almacenamiento global a cargo de Redux Toolkit y base de datos alojada en FIREBASE, con SQLite para persistencia local.

## Instrucciones de uso

Para correr la aplicación, digitar los siguientes comandos en la consola:

```bash
git clone "link del repositorio"
cd "nombre de la carpeta"
npm install
npm start
```

## VARIABLES DE ENTORNO

```bash
BASE_URL = https://thom-s-coffe-default-rtdb.firebaseio.com/
AUTH_BASE_URL = https://identitytoolkit.googleapis.com/v1/
API_KEY = "AIzaSyCOJ8RjFbMvb2DIszsEWDrp90O_XZbuRmQ"
googleApi = {
	mapStatic: "AIzaSyDvnqK8jPzjM9G-dwkWa1e01SMIJ_bqisc",
}
API_STATICMAP_KEY = "AIzaSyC7Ki2F7cVSr3oNJ05Zt2Etj72wuuNBl7k"
```

- **Login y Registro**: Inicia sesión o regístrate para realizar compras.
- **Categorías de productos**: Visualiza y selecciona productos por categoría.
- **Agregar productos al pedido**: Agrega productos a tu pedido desde la lista de productos.
- **Verificar pedido**: Confirma los productos agregados antes de enviar el pedido.
- **Mi Orden**: Visualiza, modifica y envía tu pedido.
- **Mis órdenes**: Consulta todas las órdenes realizadas.
- **Mi Perfil**: Visualiza y edita tu perfil, incluyendo datos básicos, ubicación y foto de perfil.
