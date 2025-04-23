---
sidebar_position: 5
---

# Panel de Red

El **Panel de Red** de Chrome DevTools es una herramienta esencial para analizar y depurar todas las solicitudes y respuestas de red que realiza una página web, incluyendo archivos HTML, CSS, JavaScript, imágenes, fuentes, API y más.

---

## ¿Para qué sirve el Panel de Red?

- **Monitorear todas las solicitudes HTTP/HTTPS** realizadas por la página.
- **Analizar tiempos de carga** y rendimiento de recursos.
- **Ver encabezados, cuerpos y respuestas** de cada solicitud.
- **Filtrar y buscar solicitudes específicas** (por tipo, dominio, estado, etc.).
- **Simular condiciones de red lentas** (throttling).
- **Depurar problemas de CORS, caché y errores de red**.

---

## Principales funcionalidades

### 1. Registro de solicitudes

Muestra una lista cronológica de todas las solicitudes realizadas por la página, con detalles como método, estado, tipo, tamaño y tiempo.

### 2. Detalles de cada solicitud

Haz clic en cualquier solicitud para ver:
- **Encabezados** (Headers)
- **Respuesta** (Response)
- **Vista previa** (Preview)
- **Cookies**
- **Timing** (línea de tiempo detallada)

### 3. Filtrado y búsqueda

Filtra por tipo de recurso (JS, XHR, Doc, Img, Font, etc.) o usa la barra de búsqueda para encontrar solicitudes específicas.

### 4. Simulación de red

Simula conexiones lentas (3G, offline, etc.) para probar el comportamiento de tu sitio bajo diferentes condiciones de red.

### 5. Exportar tráfico de red

Puedes exportar todas las solicitudes como un archivo HAR para análisis externo.

---

## Ejemplo de uso

1. Abre el Panel de Red con `Ctrl + Shift + I` y selecciona la pestaña **Red**.
2. Recarga la página para ver todas las solicitudes desde el inicio.
3. Haz clic en una solicitud para ver sus detalles.
4. Usa los filtros para analizar solo imágenes, scripts, o solicitudes XHR.
5. Simula una red lenta y observa cómo afecta la carga de tu sitio.

---

## Consejos y trucos

- Haz clic derecho en la lista de solicitudes para copiar URLs, respuestas o encabezados.
- Usa la opción "Preservar registro" para mantener el historial de solicitudes al navegar entre páginas.
- Observa el "Waterfall" para identificar cuellos de botella en la carga de recursos.
- Analiza el tamaño y caché de los recursos para optimizar el rendimiento.

---

## Recursos adicionales

- [Guía oficial del Panel de Red](https://developer.chrome.com/docs/devtools/network/)
- [Cómo depurar solicitudes de red](https://developer.chrome.com/docs/devtools/network/reference/)

---

¿Listo para seguir?  
Continúa con el [Panel de Rendimiento](./performance-panel.md) para aprender a analizar y optimizar el rendimiento de tu sitio web.