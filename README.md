
# 🦖 Dino: Manual de Chrome DevTools

¡Bienvenido a tu espacio de aprendizaje web!  
Este proyecto es un sitio de documentación interactivo y moderno, construido con [Docusaurus 3](https://docusaurus.io/), para ayudarte a dominar las herramientas de desarrollo de Google Chrome (Chrome DevTools).

---

## 🚀 Descripción

**Dino** es un manual y tutorial para aprender, explorar y potenciar tus habilidades como desarrollador web utilizando Chrome DevTools. Aquí encontrarás guías, trucos, atajos y recursos para mejorar tu flujo de trabajo y comprensión de las herramientas de desarrollo.

---

## 📚 Características

- Documentación estructurada y fácil de navegar
- Tutoriales paso a paso sobre los paneles principales de DevTools
- Atajos, tips y mejores prácticas
- Interfaz responsiva y modo oscuro
- Código abierto y fácil de contribuir

---

## 🛠️ Instalación

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/jordanrojastarrillo/Dino.git
   cd Dino
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

---

## 💻 Desarrollo local

Para iniciar el servidor de desarrollo y ver el sitio en tu navegador:

```sh
npm run start
```

El sitio estará disponible en [http://localhost:3000/Dino/](http://localhost:3000/Dino/) (o la ruta que indique la terminal).

---

## 🚢 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse en GitHub Pages.  
Para construir el sitio estático y desplegarlo:

```sh
npm run build
npm run deploy
```

Asegúrate de que la configuración de `baseUrl` y `url` en `docusaurus.config.js` coincidan con tu repositorio y usuario.

---

## 📂 Estructura del proyecto

```
Dino/
├── docs/                # Documentación en formato Markdown
├── src/                 # Código fuente y estilos personalizados
│   └── css/
│       └── custom.css   # Estilos personalizados
├── static/              # Archivos estáticos (imágenes, favicon, etc.)
├── docusaurus.config.js # Configuración principal de Docusaurus
├── sidebars.js          # Configuración de la barra lateral
└── README.md            # Este archivo
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas!  
Si tienes sugerencias, correcciones o quieres agregar contenido, por favor abre un [issue](https://github.com/jordanrojastarrillo/Dino/issues) o un [pull request](https://github.com/jordanrojastarrillo/Dino/pulls).

---

## 📖 Créditos

- Desarrollado por [Jordan Rojas](https://github.com/jordanrojastarrillo)
- Basado en [Docusaurus](https://docusaurus.io/)

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT.  
Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---



# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
