import React from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

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

export default function HomepageFeatures() {
  return (
    <section className={styles.foroSection}>
      <div className={styles.container}>
        <Heading as="h1" className={styles.sectionTitle}>
          Descripción general
        </Heading>
        <p>
          Las Herramientas para desarrolladores de Chrome son un conjunto de herramientas para desarrolladores web que están integradas directamente en el navegador Google Chrome. Las Herramientas para desarrolladores pueden ayudarte a editar páginas sobre la marcha y a diagnosticar problemas con rapidez, lo que, en última instancia, te ayuda a crear mejores sitios web en menos tiempo.
        </p>

        <div className={styles.videoWrapper}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t1c5tNPpXjs?si=I0K7cA0rm6ZqMaAJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          Mira el video para ver demostraciones en vivo de los flujos de trabajo principales de Herramientas para desarrolladores, como la depuración de CSS, el prototipado de CSS, la depuración de JavaScript y el análisis del rendimiento de carga.
        </p>

        <Heading as="h2" className={styles.sectionSubtitle}>
          Abrir Herramientas para desarrolladores
        </Heading>
        <ul>
          <li>
            Para trabajar con el DOM o CSS, haz clic con el botón derecho en un elemento de la página y selecciona <b>Inspect</b> para ir al panel Elements. También puedes presionar <b>Comando + Opción + C</b> (Mac) o <b>Control + Mayúsculas + C</b> (Windows, Linux y ChromeOS).
          </li>
          <li>
            Para ver los mensajes registrados o ejecutar JavaScript, presiona <b>Comando + Opción + J</b> (Mac) o <b>Control + Mayúsculas + J</b> (Windows, Linux y ChromeOS) para ir directamente al panel de la Consola.
          </li>
        </ul>
        <p>
          Consulte <a href="https://developer.chrome.com/docs/devtools/open/" target="_blank" rel="noopener noreferrer">Abrir las Herramientas para desarrolladores de Chrome</a> para obtener más detalles y flujos de trabajo.
        </p>

        <Heading as="h2" className={styles.sectionSubtitle}>
          Comenzar
        </Heading>
        <p>
          Si eres un desarrollador web con más experiencia, estos son los puntos de partida recomendados para aprender cómo las Herramientas para desarrolladores pueden mejorar tu productividad:
        </p>
        <ul>
          <li>Cómo ver y cambiar el DOM</li>
          <li>Cómo ver y cambiar CSS</li>
          <li>Depura JavaScript</li>
          <li>Visualiza mensajes y ejecuta JavaScript en la consola</li>
          <li>Optimiza la velocidad del sitio web</li>
          <li>Cómo inspeccionar la actividad de red</li>
        </ul>

        <Heading as="h2" className={styles.sectionSubtitle}>
          Descubre Herramientas para desarrolladores
        </Heading>
        <p>
          La IU de Herramientas para desarrolladores puede ser un poco abrumadora... ¡Hay muchas pestañas! Sin embargo, si te tomas un tiempo para familiarizarte con cada pestaña y entender lo que es posible, es posible que descubras que Herramientas para desarrolladores puede aumentar considerablemente tu productividad.
        </p>

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
            <p>Visualiza y cambia el DOM y la CSS.</p>
            <ul>
              <li>Cómo comenzar a ver y cambiar el CSS</li>
              <li>Editar CSS</li>
              <li>Edita el DOM</li>
              <li>Encuentra CSS no válidos, anulados, inactivos y otros tipos de CSS</li>
              <li>Identifica posibles mejoras del CSS</li>
              <li>Emula temas claros y oscuros, el contraste y otras funciones de medios de CSS</li>
              <li>Busca CSS sin usar</li>
              <li>Cómo inspeccionar animaciones</li>
            </ul>
          </div>

          {/* Panel de la consola */}
          <div className={styles.foroCard}>
            <Heading as="h3">Panel de la consola</Heading>
            <img src={panelConsolaImg} alt="Panel de la consola" className={styles.foroImg} />
            <p>Ver mensajes y ejecutar JavaScript desde la consola.</p>
            <ul>
              <li>Comienza a usar la consola</li>
              <li>Referencia de la API de Console Utilities</li>
              <li>Referencia de la API de Console</li>
            </ul>
          </div>

          {/* Panel de fuentes */}
          <div className={styles.foroCard}>
            <Heading as="h3">Panel de fuentes</Heading>
            <img src={panelFuentesImg} alt="Panel de fuentes" className={styles.foroImg} />
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
            {/* Comunidad */}
        <div className={styles.communityBlock}>
          <Heading as="h2" className={styles.sectionSubtitle}>
            Comunidad
          </Heading>
          <p>
            Presenta informes de errores y solicitudes de funciones en Crbug, el servicio de seguimiento de errores del equipo de ingeniería.
          </p>
          <ul>
            <li>
              <a href="https://crbug.com/" target="_blank" rel="noopener noreferrer">
                Crbug
              </a>
            </li>
          </ul>
          <p>
            Si quieres informarnos sobre un error o solicitar una función, pero no tienes mucho tiempo, puedes enviar un tweet a <a href="https://twitter.com/ChromeDevTools" target="_blank" rel="noopener noreferrer">@ChromeDevTools</a>. Respondemos y enviamos anuncios desde la cuenta con regularidad.
          </p>
          <ul>
            <li>
              <a href="https://twitter.com/ChromeDevTools" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
          <p>
            Para obtener ayuda con las herramientas para desarrolladores, Stack Overflow es el mejor canal.
          </p>
          <ul>
            <li>
              <a href="https://stackoverflow.com/questions/tagged/google-chrome-devtools" target="_blank" rel="noopener noreferrer">
                Stack Overflow
              </a>
            </li>
          </ul>
          <p>
            Para informar errores o solicitar funciones en los documentos de Herramientas para desarrolladores, abre un problema de GitHub.
          </p>
          <ul>
            <li>
              <a href="https://github.com/GoogleChrome/developer.chrome.com/issues" target="_blank" rel="noopener noreferrer">
                Problemas con Documentos
              </a>
            </li>
          </ul>
          <p>
            Herramientas para desarrolladores también tiene un canal de Slack, pero el equipo no lo supervisa de forma coherente.
          </p>
          <ul>
            <li>
              <a href="https://devtools-slack.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                Slack
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
      
    </section>
  );
}