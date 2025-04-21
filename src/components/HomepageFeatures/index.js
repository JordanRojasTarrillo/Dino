import clsx from 'clsx';
  import Heading from '@theme/Heading';
  import styles from './styles.module.css';

  const FeatureList = [
    {
      title: 'Easy to Use',
      Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      description: (
        <>
          Docusaurus was designed from the ground up to be easily installed and
          used to get your website up and running quickly.
        </>
      ),
    },
    {
      title: 'Focus on What Matters',
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      description: (
        <>
          Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
          ahead and move your docs into the <code>docs</code> directory.
        </>
      ),
    },
    {
      title: 'Powered by React',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Extend or customize your website layout by reusing React. Docusaurus can
          be extended while reusing the same header and footer.
        </>
      ),
    },
    {
      title: 'Elements Panel',
      Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      description: (
        <>
          Inspect and modify the DOM and CSS of your page in real-time using the Elements panel.
        </>
      ),
    },
    {
      title: 'Console Panel',
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      description: (
        <>
          Use the Console panel to log diagnostic information and interact with JavaScript on the page.
        </>
      ),
    },
    {
      title: 'Sources Panel',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Debug JavaScript, set breakpoints, and step through code with the Sources panel.
        </>
      ),
    },
    {
      title: 'Network Panel',
      Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      description: (
        <>
          Monitor network activity and analyze requests and responses with the Network panel.
        </>
      ),
    },
    {
      title: 'Performance Panel',
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      description: (
        <>
          Record and analyze runtime performance to optimize your page's speed.
        </>
      ),
    },
    {
      title: 'Memory Panel',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Identify memory leaks and optimize memory usage with the Memory panel.
        </>
      ),
    },
    {
      title: 'Application Panel',
      Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      description: (
        <>
          Inspect and manage storage, including cookies, local storage, and databases.
        </>
      ),
    },
    {
      title: 'Security Panel',
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      description: (
        <>
          View security information about your page, including SSL certificates and mixed content.
        </>
      ),
    },
    {
      title: 'Audits Panel',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
      description: (
        <>
          Run audits to improve the performance, accessibility, and SEO of your page.
        </>
      ),
    },
    {
      title: 'Coverage Panel',
      Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
      description: (
        <>
          Analyze which parts of your code are being used and which are not with the Coverage panel.
        </>
      ),
    },
  ];

  function Feature({Svg, title, description}) {
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  export default function HomepageFeatures() {
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
  }