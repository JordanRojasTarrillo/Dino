// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '¡Bienvenido a tu espacio de aprendizaje web!',
  tagline: '¡Impulsa tu carrera como desarrollador web!',
  favicon: 'img/google-chrome.png',

  // URL del sitio en GitHub Pages
  url: 'https://jordanrojastarrillo.github.io',
  baseUrl: '/Dino/',

  // Configuración para despliegue en GitHub Pages
  organizationName: 'jordanrojastarrillo', // Tu usuario de GitHub
  projectName: 'Dino', // Nombre del repositorio

  // 👇 Rama personalizada para despliegue
  deploymentBranch: 'main',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/jordanrojastarrillo/Dino/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/jordanrojastarrillo/Dino/edit/main/blog/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    image: 'img/google-chrome.png',
    navbar: {
      title: 'Desarrollador en Chrome (DevTools)',
      logo: {
        alt: 'Logo de Mi Senati',
        src: 'img/google-chrome.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/jordanrojastarrillo/Dino',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jordanrojastarrillo/Dino',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ¡Sigue aprendiendo y desarrollando tu potencial! `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),

};

export default config;
