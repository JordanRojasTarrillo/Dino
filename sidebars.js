/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Manual de Chrome DevTools',
      collapsed: false,
      items: [
        'tutorial-basics/introduction',
        {
          type: 'category',
          label: 'Paneles Principales',
          collapsed: false,
          items: [
            'tutorial-basics/elements-panel',
            'tutorial-basics/console-panel',
            'tutorial-basics/sources-panel',
            'tutorial-basics/network-panel',
            'tutorial-basics/performance-panel',
            'tutorial-basics/memory-panel',
            'tutorial-basics/application-panel',
            'tutorial-basics/security-panel',
            'tutorial-basics/lighthouse-panel',
            'tutorial-basics/recorder-panel',
            'tutorial-basics/device-mode',
            'tutorial-basics/coverage-panel',
            'tutorial-basics/issues-panel',
            'tutorial-basics/layers-panel',
            'tutorial-basics/rendering-panel',
          ],
        },
        'tutorial-basics/other-tools',
        'tutorial-basics/shortcuts-tips',
      ],
    },
  ],
};

export default sidebars;