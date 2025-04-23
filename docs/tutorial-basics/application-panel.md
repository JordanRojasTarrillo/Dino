---
sidebar_position: 8
---

# Panel de Aplicación

El **Panel de Aplicación** de Chrome DevTools te permite inspeccionar, gestionar y depurar los recursos de almacenamiento y las características avanzadas de aplicaciones web, como Progressive Web Apps (PWA), almacenamiento local, cookies, service workers y más.

---

## ¿Para qué sirve el Panel de Aplicación?

- **Ver y modificar cookies, localStorage y sessionStorage**.
- **Inspeccionar bases de datos IndexedDB y Web SQL**.
- **Gestionar Service Workers y cachés**.
- **Ver y editar el manifiesto de la aplicación web**.
- **Depurar aplicaciones web progresivas (PWA)**.
- **Revisar recursos como imágenes, fuentes y archivos almacenados**.

---

## Principales funcionalidades

### 1. Almacenamiento

- **Cookies:** Visualiza, edita, agrega o elimina cookies de la página.
- **localStorage y sessionStorage:** Inspecciona y modifica datos almacenados localmente.
- **IndexedDB y Web SQL:** Examina bases de datos estructuradas utilizadas por la aplicación.

### 2. Service Workers

- Visualiza los service workers registrados, su estado y controla su ciclo de vida (registrar, actualizar, eliminar).
- Prueba la funcionalidad offline y la caché de recursos.

### 3. Manifest

- Inspecciona el manifiesto de la aplicación web (Web App Manifest) para PWAs.
- Verifica iconos, nombre, colores y configuración de la app.

### 4. Cachés

- Examina y gestiona la caché de la aplicación (Cache Storage).
- Elimina recursos almacenados para pruebas.

### 5. Otros recursos

- Visualiza imágenes, fuentes, archivos y otros recursos cargados por la aplicación.

---

## Ejemplo de uso

1. Abre el Panel de Aplicación con `Ctrl + Shift + I` y selecciona la pestaña **Aplicación**.
2. Navega por las secciones de almacenamiento para ver y modificar cookies o datos locales.
3. Inspecciona el manifiesto de la app y verifica los iconos y configuraciones.
4. Gestiona service workers y prueba el modo offline.
5. Elimina cachés para forzar la recarga de recursos.

---

## Consejos y trucos

- Usa el panel para depurar problemas de autenticación relacionados con cookies.
- Borra el almacenamiento local y la caché para probar el comportamiento de la app en un primer uso.
- Verifica que tu PWA tenga un manifiesto válido y service worker activo.
- Utiliza la sección de recursos para comprobar que todos los archivos necesarios están disponibles offline.

---

## Recursos adicionales

- [Guía oficial del Panel de Aplicación](https://developer.chrome.com/docs/devtools/application/)
- [Depuración de PWAs](https://web.dev/progressive-web-apps/)

---

¿Listo para seguir?  
Continúa con el [Panel de Seguridad](./security-panel.md) para aprender a analizar el estado de seguridad de tu sitio web.
