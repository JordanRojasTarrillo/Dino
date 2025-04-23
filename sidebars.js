
/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '📚 Manual de Chrome DevTools',
      collapsed: false,
      items: [
        { type: 'doc', id: 'tutorial-basics/introduction', label: '🏁 Introducción al Manual de Chrome DevTools' },
        {
          type: 'category',
          label: '🧩 Paneles Principales',
          collapsed: false,
          items: [
            { type: 'doc', id: 'tutorial-basics/elements-panel', label: '🟦 Panel de Elementos' },
            { type: 'doc', id: 'tutorial-basics/console-panel', label: '💻 Panel de Consola' },
            { type: 'doc', id: 'tutorial-basics/sources-panel', label: '📄 Panel de Fuentes' },
            { type: 'doc', id: 'tutorial-basics/network-panel', label: '🌐 Panel de Red' },
            { type: 'doc', id: 'tutorial-basics/performance-panel', label: '⚡ Panel de Rendimiento' },
            { type: 'doc', id: 'tutorial-basics/memory-panel', label: '🧠 Panel de Memoria' },
            { type: 'doc', id: 'tutorial-basics/application-panel', label: '📦 Panel de Aplicación' },
            { type: 'doc', id: 'tutorial-basics/security-panel', label: '🔒 Panel de Seguridad' },
            { type: 'doc', id: 'tutorial-basics/lighthouse-panel', label: '🚦 Panel Lighthouse' },
            { type: 'doc', id: 'tutorial-basics/recorder-panel', label: '🎥 Panel de Grabadora' },
            { type: 'doc', id: 'tutorial-basics/device-mode', label: '📱 Modo de Dispositivo' },
            { type: 'doc', id: 'tutorial-basics/coverage-panel', label: '🧮 Panel de Coverage' },
            { type: 'doc', id: 'tutorial-basics/issues-panel', label: '❗ Panel de Issues' },
            { type: 'doc', id: 'tutorial-basics/layers-panel', label: '🗂️ Panel de Layers' },
            { type: 'doc', id: 'tutorial-basics/rendering-panel', label: '🎨 Panel de Rendering' },
          ],
        },
        { type: 'doc', id: 'tutorial-basics/other-tools', label: '🛠️ Otras Herramientas y Paneles' },
        { type: 'doc', id: 'tutorial-basics/shortcuts-tips', label: '⌨️ Atajos y Trucos' },
      ],
    },
  ],
};

export default sidebars;
