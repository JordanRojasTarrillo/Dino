import React from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Importa todas las imágenes necesarias
import modoImg from '@site/static/img/1mododispositivo.png';
import panelElementosImg from '@site/static/img/2panel_elementos.png';
import panelConsolaImg from '@site/static/img/3Panel_de_la_consola.png';
import panelFuentesImg from '@site/static/img/4_Panel_de_fuentes.png';
import panelRedImg from '@site/static/img/5_Panel_de_red.png';
import panelGrabadoraImg from '@site/static/img/6_Panel_de_grabadora.png';
import panelRendimientoImg from '@site/static/img/7_Panel_de_rendimiento.png';
import panelMemoriaImg from '@site/static/img/8_Panel_de_memoria.png';
import panelAplicacionImg from '@site/static/img/9_Panel_de_la_aplicación.png';
import panelSeguridadImg from '@site/static/img/10_Panel_de_seguridad.png';

// Componente para cada tarjeta
const FeatureCard = ({ title, image, description, list }) => {
  const id = title.toLowerCase().replace(/ /g, '-');
  
  return (
    <div className={styles.foroCard} id={id}>
      <Heading as="h3">{title}</Heading>
      <img src={image} alt={title} className={styles.foroImg} />
      <p>{description}</p>
      <ul className={styles.featureList}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

function HomepageFeatures() {
  const features = [
    {
      title: 'Modo de dispositivo',
      image: modoImg,
      description: 'Simula dispositivos móviles.',
      list: ['Modo de dispositivo', 'Cómo emular los sensores del dispositivo'],
    },
    {
      title: 'Panel de elementos',
      image: panelElementosImg,
      description:
        'Depura JavaScript, conserva los cambios realizados entre recargas de páginas y guarda los cambios en fuentes locales.',
      list: [
        'Cómo comenzar a depurar JavaScript',
        'Cómo pausar el código con puntos de interrupción',
        'Edita y guarda archivos en un lugar de trabajo',
        'Ejecuta fragmentos de JavaScript',
        'Referencia de depuración de JavaScript',
        'Cómo anular de forma local el contenido web y los encabezados de respuesta HTTP',
      ],
    },
    {
      title: 'Panel de consola',
      image: panelConsolaImg,
      description:
        'Visualiza mensajes de registro, errores y advertencias generados por la página web.',
      list: [
        'Cómo usar la consola',
        'Filtrar y buscar mensajes',
        'Ejecutar comandos rápidos',
      ],
    },
    {
      title: 'Panel de fuentes',
      image: panelFuentesImg,
      description:
        'Inspecciona y edita archivos fuente, como JavaScript y CSS, directamente en el navegador.',
      list: ['Editar archivos fuente', 'Buscar en archivos', 'Administrar puntos de interrupción'],
    },
    {
      title: 'Panel de red',
      image: panelRedImg,
      description: 'Consulta y depura la actividad de red.',
      list: [
        'Cómo inspeccionar la actividad de red',
        'Referencia de las funciones de red',
        'Ver recursos de la página',
      ],
    },
    {
      title: 'Panel de grabadora',
      image: panelGrabadoraImg,
      description: 'Graba, vuelve a reproducir y mide los flujos de usuarios.',
      list: [
        'Graba, vuelve a reproducir y mide los flujos de usuarios',
        'Cómo personalizar la grabadora con extensiones',
        'Referencia de las funciones de la grabadora',
      ],
    },
    {
      title: 'Panel de rendimiento',
      image: panelRendimientoImg,
      description: 'Encuentra formas de mejorar el rendimiento de la carga y del tiempo de ejecución.',
      list: [
        'Optimiza la velocidad del sitio web',
        'Analiza el rendimiento del entorno de ejecución',
        'Referencia de las funciones de rendimiento',
      ],
    },
    {
      title: 'Panel de memoria',
      image: panelMemoriaImg,
      description:
        'Encuentra y corrige problemas de memoria que afecten el rendimiento de la página, como fugas de memoria.',
      list: ['Cómo solucionar problemas de memoria'],
    },
    {
      title: 'Panel de la aplicación',
      image: panelAplicacionImg,
      description:
        'Inspecciona todos los recursos cargados, incluidas bases de datos, almacenamiento local, cookies y más.',
      list: [
        'Cómo depurar apps web progresivas',
        'Cómo ver y editar el almacenamiento local',
        'Cómo ver, agregar, editar y borrar cookies',
        'Consulta la información de la prueba de origen',
      ],
    },
    {
      title: 'Panel de seguridad',
      image: panelSeguridadImg,
      description: 'Depura problemas de contenido mixto, problemas de certificados y más.',
      list: ['Comprende los problemas de seguridad'],
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.foroContainer}>
        {/* Barra lateral izquierda */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarInner}>
            <Heading as="h3">Enlaces</Heading>
            <ul className={styles.sidebarList}>
              {features.map((feature, index) => (
                <li key={index}>
                  <a href={`#${feature.title.toLowerCase().replace(/ /g, '-')}`}>
                    {feature.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contenido principal */}
        <div className={styles.mainContent}>
          <Heading as="h2">Herramientas para desarrolladores: Paneles principales</Heading>
          <div className={styles.foroGrid}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                image={feature.image}
                description={feature.description}
                list={feature.list}
              />
            ))}
          </div>
        </div>

        {/* Tabla de contenido a la derecha */}
        <div className={styles.toc}>
          <div className={styles.tocInner}>
            <Heading as="h3">Tabla de Contenido</Heading>
            <ul className={styles.tocList}>
              {features.map((feature, index) => (
                <li key={index}>
                  <a href={`#${feature.title.toLowerCase().replace(/ /g, '-')}`}>
                    {feature.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageFeatures;