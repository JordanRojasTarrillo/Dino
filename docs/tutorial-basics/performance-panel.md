---
sidebar_position: 6
---

# Panel de Rendimiento

El **Panel de Rendimiento** de Chrome DevTools es una herramienta avanzada para analizar, grabar y optimizar el rendimiento de carga y ejecución de tu sitio web. Permite identificar cuellos de botella, tareas costosas y oportunidades de mejora en la experiencia del usuario.

---

## ¿Para qué sirve el Panel de Rendimiento?

- **Grabar perfiles de rendimiento** durante la carga y la interacción con la página.
- **Analizar el uso de CPU y memoria** en tiempo real.
- **Visualizar la línea de tiempo de eventos** (frames, scripting, rendering, painting).
- **Identificar cuellos de botella** y tareas que ralentizan la página.
- **Optimizar la experiencia de usuario** mejorando la velocidad y fluidez.

---

## Principales funcionalidades

### 1. Grabación de perfiles

Haz clic en el botón de grabar (●), realiza acciones en la página y detén la grabación para analizar el perfil de rendimiento generado.

### 2. Línea de tiempo de eventos

Visualiza cómo se distribuyen las tareas de scripting, rendering, painting y otros procesos a lo largo del tiempo.

### 3. Análisis de frames

Observa el rendimiento de cada frame y detecta frames lentos o saltos de animación.

### 4. Flame Chart

Explora el "Flame Chart" para ver qué funciones consumen más tiempo de CPU y optimizar el código.

### 5. Estadísticas de memoria

Monitorea el uso de memoria durante la grabación para detectar posibles fugas o excesos.

---

## Ejemplo de uso

1. Abre el Panel de Rendimiento con `Ctrl + Shift + I` y selecciona la pestaña **Rendimiento**.
2. Haz clic en el botón de grabar (●), interactúa con la página y detén la grabación.
3. Analiza la línea de tiempo para identificar tareas costosas o frames lentos.
4. Usa el Flame Chart para ver qué funciones consumen más recursos.
5. Aplica optimizaciones y repite el proceso para medir mejoras.

---

## Consejos y trucos

- Usa la opción de "Capturar capturas de pantalla" para ver visualmente el progreso de la carga.
- Filtra por tipo de evento (scripting, rendering, painting) para un análisis más detallado.
- Compara grabaciones antes y después de optimizar tu código.
- Utiliza la integración con Lighthouse para obtener recomendaciones adicionales.

---

## Recursos adicionales

- [Guía oficial del Panel de Rendimiento](https://developer.chrome.com/docs/devtools/performance/)
- [Optimización de rendimiento web](https://web.dev/performance/)

---

¿Listo para seguir?  
Continúa con el [Panel de Memoria](./memory-panel.md) para aprender a analizar y optimizar el uso de memoria de tu sitio web.