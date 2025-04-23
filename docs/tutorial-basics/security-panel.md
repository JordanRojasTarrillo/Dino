---
sidebar_position: 9
---

# Panel de Seguridad

El **Panel de Seguridad** de Chrome DevTools te permite analizar el estado de seguridad de tu sitio web, identificar problemas relacionados con certificados, contenido mixto y vulnerabilidades de conexión.

---

## ¿Para qué sirve el Panel de Seguridad?

- **Verificar si la conexión es segura (HTTPS)** y si el certificado es válido.
- **Detectar contenido mixto** (recursos HTTP en páginas HTTPS).
- **Analizar certificados SSL/TLS** y su cadena de confianza.
- **Identificar vulnerabilidades de seguridad** y advertencias del navegador.
- **Revisar detalles de la política de seguridad de la página**.

---

## Principales funcionalidades

### 1. Estado de la conexión

Muestra si la página está servida a través de HTTPS, si el certificado es válido y si la conexión es segura.

### 2. Certificados

Permite inspeccionar el certificado SSL/TLS, su emisor, validez y cadena de confianza.

### 3. Contenido mixto

Advierte si la página carga recursos inseguros (HTTP) en un contexto seguro (HTTPS), lo que puede comprometer la seguridad.

### 4. Políticas de seguridad

Muestra detalles sobre políticas de seguridad como Content Security Policy (CSP) y otras configuraciones relevantes.

---

## Ejemplo de uso

1. Abre el Panel de Seguridad con `Ctrl + Shift + I` y selecciona la pestaña **Seguridad**.
2. Observa el estado de la conexión (segura, insegura, con advertencias).
3. Haz clic en el certificado para ver detalles sobre su validez y emisor.
4. Revisa si hay advertencias de contenido mixto o problemas de política de seguridad.

---

## Consejos y trucos

- Siempre utiliza HTTPS para proteger la información de tus usuarios.
- Reemplaza todos los recursos HTTP por HTTPS para evitar contenido mixto.
- Verifica la validez y fecha de expiración de tus certificados regularmente.
- Implementa políticas de seguridad estrictas (CSP) para proteger tu sitio de ataques.

---

## Recursos adicionales

- [Guía oficial del Panel de Seguridad](https://developer.chrome.com/docs/devtools/security/)
- [Buenas prácticas de seguridad web](https://web.dev/security/)

---

¿Listo para seguir?  
Continúa con el [Panel Lighthouse](./lighthouse-panel.md) para aprender a auditar el rendimiento, accesibilidad y SEO de tu sitio web.
