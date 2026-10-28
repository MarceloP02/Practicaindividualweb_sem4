# RUNCTY · Requisitos, tecnologías y propuesta de diseño

Práctica individual · Semana 4 · Ingeniería Web · UTPL

## Autoría

| Rol | Nombre |
|---|---|
| Diseño y desarrollo de la página web | **Marcelo Pico Benitez** |
| Información del proyecto RUNCTY (requisitos, tecnologías y prototipo en Figma) | Equipo RUNCTY: Joel Domínguez Ochoa, Marcelo Pico Benitez y Lennin Salinas Quinche |
| Docente | Ing. Diana Torres Guarnizo |
| Cliente del proyecto | Club Deportivo Gacelas Running Team |

El contenido pertenece al trabajo grupal del equipo RUNCTY. El diseño, la estructura y el código de esta página son trabajo individual de Marcelo Pico Benitez.

## ¿Qué contiene la página?

Reúne en una sola página web lo que antes eran dos documentos de Word y un enlace:

1. **Requisitos** (documento *Levantamiento de Requisitos Funcionales y No Funcionales*)
   - Descripción del proyecto y sus tres partes: aplicación web, app Android y servidor con API REST.
   - Alcance inicial: qué se desarrollará, qué depende del avance del proyecto y qué queda fuera.
   - Identificación de los 5 tipos de usuario y sus responsabilidades.
   - 23 requisitos funcionales (RF01 a RF23) en 4 grupos y 12 requisitos no funcionales (RNF01 a RNF12), con su criterio de comprobación.
2. **Tecnologías** (documento *RUNCTY · Tecnologías del proyecto*)
   - Arquitectura propuesta (Figura 1).
   - Tecnologías por capa, contenidos de Ingeniería Web, seguridad, infraestructura y costo, herramientas de trabajo y la consulta para la ingeniera.
3. **Propuesta de diseño**
   - Botón que abre en una pestaña nueva el prototipo navegable del equipo en Figma: [Prototipo RUNCTY Web y Móvil](https://www.figma.com/make/gIfoqALJYSt6hu2ZyHCxu8/Prototipo-RUNCTY-Web-y-M%C3%B3vil?t=76EYvWF3TbzVXDP3-1).

## Estructura de carpetas

```
Practicaindividualweb_sem4/
├── css/
│   ├── componentes.css   → piezas reutilizables: botones, tarjetas, pestañas, desplegables, tablas
│   └── estilos.css       → base: tipografía, encabezado, portada, secciones, pie y responsive
├── imagenes/
│   └── arquitectura-runcty.png   → Figura 1: arquitectura propuesta
├── index.html            → contenido de la página
└── README.md             → este archivo
```

## Tecnologías usadas en la página

- **HTML5 semántico:** `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `table`, `details` y `footer`.
- **CSS3:** Grid, Flexbox, media queries, transiciones y animaciones.
- **Sin JavaScript:** la interactividad se hace solo con CSS.

| Interacción | Cómo funciona |
|---|---|
| Pestañas de requisitos | Botones de radio ocultos + `label` + selector `:checked ~` |
| Requisitos y alcance desplegables | Etiquetas `<details>` y `<summary>` |
| Menú en celular | Checkbox oculto + selector `:checked ~` |
| Tarjetas, botones y filas de tabla | `:hover` con `transition` |
| Navegación entre secciones | Enlaces internos (`#requisitos`) con `scroll-behavior: smooth` |

## Diseño responsive y accesibilidad

- Se adapta a celular, tablet y computadora (de 360 a 1920 px).
- Enlace "Saltar al contenido", foco visible con teclado, texto alternativo en las imágenes y buen contraste de colores.

## Validación

- HTML: [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input), sin errores ni advertencias.
- CSS: [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/), sin errores ni advertencias.

## Cómo abrirla

Abrir `index.html` en el navegador o usar la extensión *Live Server* de Visual Studio Code.