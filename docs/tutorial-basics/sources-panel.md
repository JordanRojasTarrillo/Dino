---
sidebar_position: 4
---

# Panel de Fuentes

El **Panel de Fuentes** de Chrome DevTools es la herramienta principal para depurar, explorar y modificar los archivos fuente de una página web, como JavaScript, CSS y otros recursos.

---

## ¿Para qué sirve el Panel de Fuentes?

- **Depurar JavaScript** colocando puntos de interrupción (breakpoints).
- **Explorar y editar archivos fuente** (JS, CSS, HTML, imágenes, etc.).
- **Ver el flujo de ejecución del código** y el estado de las variables.
- **Guardar cambios en archivos locales** usando Workspaces.
- **Ejecutar y guardar fragmentos de código** (Snippets).

---

## Principales funcionalidades

### 1. Explorador de archivos

Visualiza todos los archivos cargados por la página, organizados por dominio y ruta.

### 2. Depuración con breakpoints

- Haz clic en el número de línea para agregar un breakpoint.
- Usa breakpoints condicionales para pausar solo cuando se cumpla una condición.
- Pausa la ejecución y examina el Call Stack, Scope y variables locales.

### 3. Edición en vivo

Puedes modificar archivos JS o CSS directamente desde el panel y ver los cambios reflejados al instante en la página.

### 4. Workspaces

Vincula archivos locales a los archivos del servidor para guardar cambios directamente en tu proyecto.

### 5. Snippets

Guarda y ejecuta fragmentos de código reutilizables desde la pestaña "Snippets".

---

## Ejemplo de uso

1. Abre el Panel de Fuentes con `Ctrl + Shift + I` y selecciona la pestaña **Fuentes**.
2. Navega hasta un archivo JavaScript y haz clic en el número de línea para agregar un breakpoint.
3. Recarga la página o ejecuta una acción que dispare el código.
4. Cuando la ejecución se pause, inspecciona el Call Stack y las variables.
5. Modifica el código y observa los cambios en tiempo real.

---

## Consejos y trucos

- Usa breakpoints condicionales para depurar casos específicos.
- Explora el Scope para ver el valor de las variables en cada contexto.
- Usa la búsqueda global (`Ctrl + Shift + F`) para encontrar código en todos los archivos.
- Guarda y reutiliza Snippets para tareas repetitivas.

---

## Recursos adicionales

- [Guía oficial del Panel de Fuentes](https://developer.chrome.com/docs/devtools/sources/)
- [Depuración de JavaScript en Chrome](https://developer.chrome.com/docs/devtools/javascript/)

---

¿Listo para seguir?  
Continúa con el [Panel de Red](./network-panel.md) para aprender a analizar las solicitudes y recursos de red.