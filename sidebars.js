
/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  devtoolsManual: [
    {
      type: 'category',
      label: 'Manual de Chrome DevTools',
      collapsed: false,
      items: [
        'introduction',
        {
          type: 'category',
          label: 'Paneles Principales',
          collapsed: false,
          items: [
            'elements-panel',     // 1. Elementos
            'console-panel',      // 2. Consola
            'sources-panel',      // 3. Fuentes
            'network-panel',      // 4. Red
            'performance-panel',  // 5. Rendimiento
            'memory-panel',       // 6. Memoria
            'application-panel',  // 7. Aplicación
            'security-panel',     // 8. Seguridad
            'lighthouse-panel',   // 9. Lighthouse
            'recorder-panel',     // 10. Grabadora
            'device-mode',        // 11. Modo de Dispositivo
            'coverage-panel',     // 12. Coverage
            'issues-panel',       // 13. Issues
            'layers-panel',       // 14. Layers
            'rendering-panel',    // 15. Rendering
          ],
        },
        'other-tools',
        'shortcuts-tips',
      ],
    },
  ],
};

export default sidebars;
