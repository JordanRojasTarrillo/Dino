---
sidebar_position: 3
---

# Panel de Consola

El **Panel de Consola** de Chrome DevTools es una herramienta fundamental para desarrolladores web, ya que permite interactuar con la página mediante JavaScript, ver mensajes de registro, advertencias, errores y depurar el comportamiento del código en tiempo real.

---

## ¿Para qué sirve el Panel de Consola?

- **Ejecutar comandos y scripts JavaScript** en el contexto de la página actual.
- **Ver mensajes de registro** (`console.log`, `console.warn`, `console.error`, etc.).
- **Inspeccionar objetos y variables** en tiempo real.
- **Depurar errores y advertencias** de JavaScript.
- **Interactuar con el DOM** y modificarlo dinámicamente.
- **Probar fragmentos de código** sin modificar los archivos fuente.

---

## Principales funcionalidades

### 1. Ejecución de código

Puedes escribir y ejecutar cualquier expresión JavaScript directamente en la consola.  
Ejemplo:
```js
document.body.style.backgroundColor = 'lightblue';
```

### 2. Visualización de logs

Todos los mensajes enviados mediante `console.log`, `console.warn`, `console.error`, etc., aparecen en la consola, facilitando la depuración.

### 3. Inspección de objetos

Haz clic en los objetos impresos en la consola para expandirlos y explorar sus propiedades y métodos.

### 4. Acceso rápido a elementos seleccionados

- `$0` hace referencia al último elemento seleccionado en el Panel de Elementos.
- `$1`, `$2`, etc., para los elementos seleccionados anteriormente.

### 5. Autocompletado y sugerencias

La consola ofrece autocompletado para métodos, variables y propiedades, facilitando la escritura de código.

---

## Ejemplo de uso

1. Abre el Panel de Consola con `Ctrl + Shift + J` (Windows/Linux) o `Cmd + Option + J` (Mac).
2. Escribe `console.log('¡Hola DevTools!')` y presiona Enter.
3. Observa el mensaje en la consola.
4. Prueba modificar el DOM:  
   ```js
   document.querySelector('h1').textContent = 'Título cambiado desde la consola';
   ```

---

## Consejos y trucos

- Usa `console.table()` para visualizar arrays y objetos en formato de tabla.
- Filtra los mensajes por tipo (errores, advertencias, logs, info).
- Usa el atajo `Ctrl + L` para limpiar la consola.
- Puedes guardar fragmentos de código como Snippets para reutilizarlos.

---

## Recursos adicionales

- [Guía oficial del Panel de Consola](https://developer.chrome.com/docs/devtools/console/)
- [Referencia de la API Console](https://developer.mozilla.org/es/docs/Web/API/Console)

---

¿Listo para seguir?  
Continúa con el [Panel de Fuentes](./sources-panel.md) para aprender a depurar y explorar archivos fuente.