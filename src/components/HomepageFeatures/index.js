
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

function HomepageFeatures() {
  return (
    <section>
      <Heading as="h2">Herramientas para desarrolladores: Paneles principales</Heading>
      <div className={styles.foroGrid}>
        {/* Modo de dispositivo */}
        <div className={styles.foroCard}>
          <Heading as="h3">Modo de dispositivo</Heading>
          <img src={modoImg} alt="Modo de dispositivo" className={styles.foroImg} />
          <p>Simula dispositivos móviles.</p>
          <ul>
            <li>Modo de dispositivo</li>
            <li>Cómo emular los sensores del dispositivo</li>
          </ul>
        </div>

        {/* Panel de elementos */}
        <div className={styles.foroCard}>
          <Heading as="h3">Panel de elementos</Heading>
          <img src={panelElementosImg} alt="Panel de elementos" className={styles.foroImg} />
          <p>
            Depura JavaScript, conserva los cambios realizados en Herramientas para desarrolladores entre las recargas de páginas, guarda y ejecuta fragmentos de JavaScript, y guarda los cambios que realices en Herramientas para desarrolladores en fuentes locales.
          </p>
          <ul>
            <li>Cómo comenzar a depurar JavaScript</li>
            <li>Cómo pausar el código con puntos de interrupción</li>
            <li>Edita y guarda archivos en un lugar de trabajo</li>
            <li>Ejecuta fragmentos de JavaScript</li>
            <li>Referencia de depuración de JavaScript</li>
            <li>Cómo anular de forma local el contenido web y los encabezados de respuesta HTTP</li>
          </ul>
        </div>

        {/* Panel de consola */}
        <div className={styles.foroCard}>
          <Heading as="h3">Panel de consola</Heading>
          <img src={panelConsolaImg} alt="Panel de consola" className={styles.foroImg} />
          <p>Visualiza mensajes de registro, errores y advertencias generados por la página web.</p>
          <ul>
            <li>Cómo usar la consola</li>
            <li>Filtrar y buscar mensajes</li>
            <li>Ejecutar comandos rápidos</li>
          </ul>
        </div>

        {/* Panel de fuentes */}
        <div className={styles.foroCard}>
          <Heading as="h3">Panel de fuentes</Heading>
          <img src={panelFuentesImg} alt="Panel de fuentes" className={styles.foroImg} />
          <p>Inspecciona y edita archivos fuente, como JavaScript y CSS, directamente en el navegador.</p>
          <ul>
            <li>Editar archivos fuente</li>
            <li>Buscar en archivos</li>
            <li>Administrar puntos de interrupción</li>
          </ul>
        </div>

        {/* Panel de red */}
        <div className={styles.foroCard}>
          <Heading as="h3">Panel de red</Heading>
          <img src={panelRedImg} alt="Panel de red" className={styles.foroImg} />
          <p>Consulta y depura la actividad de red.</p>
          <ul>
            <li>Cómo inspeccionar la actividad de red</li>
            <li>Referencia de las funciones de red</li>
            <li>Ver recursos de la página</li>
          </ul>
        </div>

        {/* Panel de grabadora */}
        <div className={styles.foroCard}>
          <Heading as="h3">Panel de grabadora</Heading>
          <img src={panelGrabadoraImg} alt="Panel de grabadora" className={styles.foroImg} />
          <p>Graba, vuelve a reproducir y mide los flujos de usuarios.</p>
          <ul>
            <li>Graba, vuelve a reproducir y mide los flujos de usuarios</li>
            <li>Cómo personalizar la grabadora con extensiones</li>
            <li>Referencia de las funciones de la grabadora</li>
          </ul>
        </div>

        {/* Panel de rendimiento */}
        <div className={styles.foroCard}>
          <Heading as="h3">Panel de rendimiento</Heading>
          <img src={panelRendimientoImg} alt="Panel de rendimiento" className={styles.foroImg} />
          <p>Encuentra formas de mejorar el rendimiento de la carga y del tiempo de ejecución.</p>
          <ul>
            <li>Optimiza la velocidad del sitio web</li>
            <li>Analiza el rendimiento del entorno de ejecución</li>
            <li>Referencia de las funciones de rendimiento</li>
          </ul>
        </div>

        {/* Panel de memoria */}
        <div className={styles.foroCard}>
          <Heading as="h3">Panel de memoria</Heading>
          <img src={panelMemoriaImg} alt="Panel de memoria" className={styles.foroImg} />
          <p>Encuentra y corrige problemas de memoria que afecten el rendimiento de la página, por ejemplo, fugas de memoria.</p>
          <ul>
            <li>Cómo solucionar problemas de memoria</li>
          </ul>
        </div>

        {/* Panel de la aplicación */}
        <div className={styles.foroCard}>
          <Heading as="h3">Panel de la aplicación</Heading>
          <img src={panelAplicacionImg} alt="Panel de la aplicación" className={styles.foroImg} />
          <p>
            Inspecciona todos los recursos que están cargados, incluidas las bases de datos IndexedDB o Web SQL, el almacenamiento local y de sesión, las cookies, la caché de aplicaciones, las imágenes, las fuentes y las hojas de estilo.
          </p>
          <ul>
            <li>Cómo depurar apps web progresivas</li>
            <li>Cómo ver y editar el almacenamiento local</li>
            <li>Cómo ver, agregar, editar y borrar cookies</li>
            <li>Consulta la información de la prueba de origen</li>
          </ul>
        </div>

        {/* Panel de seguridad */}
        <div className={styles.foroCard}>
          <Heading as="h3">Panel de seguridad</Heading>
          <img src={panelSeguridadImg} alt="Panel de seguridad" className={styles.foroImg} />
          <p>Depura problemas de contenido mixto, problemas de certificados y mucho más.</p>
          <ul>
            <li>Comprende los problemas de seguridad</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;
