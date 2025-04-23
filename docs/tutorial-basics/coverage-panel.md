---
sidebar_position: 13
---

# Panel de Coverage

El **Panel de Coverage** de Chrome DevTools te permite analizar qué partes del código fuente (JavaScript y CSS) de tu sitio web están siendo utilizadas y cuáles no. Es una herramienta clave para optimizar el rendimiento eliminando código muerto o innecesario.

---

## ¿Para qué sirve el Panel de Coverage?

- **Identificar código no utilizado** (dead code) en archivos JS y CSS.
- **Optimizar el tamaño de los recursos** eliminando o minimizando código innecesario.
- **Mejorar el rendimiento de carga** al reducir la cantidad de código transferido.
- **Visualizar la cobertura de código** en tiempo real mientras navegas por tu sitio.

---

## Principales funcionalidades

### 1. Iniciar y detener la cobertura

Haz clic en el botón de grabar (●) para comenzar a medir la cobertura de código mientras interactúas con la página. Detén la grabación para ver los resultados.

### 2. Visualización de resultados

El panel muestra una lista de archivos JS y CSS con el porcentaje de código utilizado y no utilizado. Puedes hacer clic en cada archivo para ver las líneas cubiertas y no cubiertas.

### 3. Análisis detallado

Identifica rápidamente archivos grandes con mucho código sin usar y prioriza su optimización.

### 4. Integración con otras herramientas

Combina la cobertura con el análisis de rendimiento y el panel de fuentes para una optimización completa.

---

## Ejemplo de uso

1. Abre DevTools con `Ctrl + Shift + I` y selecciona la pestaña **Coverage** (puede estar en el menú de los tres puntos ">>").
2. Haz clic en **"Start instrumenting coverage and reload page"**.
3. Navega por tu sitio para ejecutar diferentes rutas y funcionalidades.
4. Detén la grabación y revisa los archivos listados, observando el porcentaje de código utilizado.
5. Haz clic en un archivo para ver las líneas de código no cubiertas y considera eliminarlas o dividir el archivo.

---

## Consejos y trucos

- Realiza pruebas de cobertura después de implementar nuevas funcionalidades o librerías.
- Usa la cobertura para identificar dependencias o estilos que ya no se usan.
- Combina la cobertura con herramientas de build (como Webpack o Rollup) para eliminar código muerto automáticamente.
- Repite el análisis después de optimizar para medir el impacto.

---

## Recursos adicionales

- [Guía oficial del Panel de Coverage](https://developer.chrome.com/docs/devtools/coverage/)
- [Optimización de recursos web](https://web.dev/reduce-javascript-payloads/)

---

¿Listo para seguir?  
Continúa con el [Panel de Issues](./issues-panel.md) para aprender a identificar y solucionar problemas comunes detectados por Chrome DevTools.
