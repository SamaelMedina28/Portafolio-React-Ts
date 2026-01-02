export const projectsData = [
  {
    name: "Ignite Branding Company",
    image_path: "img/projects/ignite.png",
    description:
      "Un sitio web moderno y receptivo para una empresa local, con diseño personalizado y optimizado para SEO.",
    technologies: [
      { name: "HTML5", color: "orange" },
      { name: "Tailwind", color: "blue" },
      { name: "JavaScript", color: "yellow" },
      { name: "React", color: "green" },
      { name: "Next.js", color: "purple" },
    ],
    githubLink: "https://github.com/zepyroth3411/Ignite",
    largeDescription:
      "Este proyecto consistió en el diseño y desarrollo de un sitio web moderno para una empresa en crecimiento. Trabajamos en equipo siguiendo buenas prácticas de desarrollo web, desde la arquitectura hasta el diseño responsivo y la optimización del rendimiento. Una de las experiencias más valiosas fue colaborar utilizando Git y GitHub para el control de versiones de manera profesional, gestionando ramas, pull requests y revisiones de código en un entorno grupal por primera vez. Esto me permitió fortalecer mi capacidad de trabajo en equipo y adoptar flujos de trabajo más organizados y escalables.",
    learnings:
      "En este proyecto experimenté por primera vez un flujo de trabajo más organizado y profesional. Trabajamos con un prototipo completo en Figma elaborado por un diseñador, lo que permitió coordinar mejor el desarrollo y mantener coherencia en la interfaz. También tuve mi primer acercamiento real al uso de control de versiones con Git en un entorno colaborativo, aprendiendo a manejar ramas, conflictos y flujos de trabajo grupales. Además, este proyecto representó mi primera experiencia práctica con Next.js, lo que me permitió entender su estructura, enrutamiento y la forma en que optimiza el rendimiento del sitio.",
    imgsSlider: [
      "img/projects/ignite/img1.png",
      "img/projects/ignite/img2.png",
      "img/projects/ignite/img3.png",
      "img/projects/ignite/img4.png",
      "img/projects/ignite/img5.png",
      "img/projects/ignite/img6.png",
    ],
  },
  {
    name: "CMS Ignite Branding Company",
    image_path: "img/projects/ignite-admin.png",
    description:
      "Un sitio web administrativo para la gestion de proyectos de una empresa haciendo su web empresarial autoadministrable.",
    technologies: [
      { name: "React", color: "green" },
      { name: "TypeScript", color: "blue" },
      { name: "Inertia", color: "purple" },
      { name: "Laravel", color: "red" },
      { name: "Tailwind", color: "cyan" },
    ],
    githubLink: "https://github.com/SamaelMedina28/Ignite",
    largeDescription:
      "Este panel administrativo fue desarrollado para la misma empresa Ignite Branding Company con el objetivo de permitirles gestionar de forma interna sus proyectos, clientes y servicios. Mi participación estuvo enfocada en construir toda la estructura inicial del sistema: desde la arquitectura base del frontend y backend hasta la configuración de los módulos principales para clientes y proyectos. Una vez establecida esta base sólida, el proyecto fue entregado a otros desarrolladores para continuar con su ampliación y mantenimiento. Este desarrollo permitió convertir el sitio principal de la empresa en una plataforma completamente autoadministrable.",
    learnings:
      "En este proyecto tuve mi primer acercamiento real a TypeScript, aprendiendo a tipar correctamente componentes y manejar datos de manera más segura y organizada. También descubrí y utilicé Inertia.js, comprendiendo cómo permite integrar React con Laravel sin la necesidad de construir una API tradicional. Además, pude trabajar con la gestión de imágenes y archivos dentro de un entorno completo, así como la implementación de inicio de sesión, validaciones y un buscador optimizado para proyectos. Todo esto me ayudó a entender mejor cómo se construyen aplicaciones administrativas más completas y funcionales.",
    imgsSlider: [
      "img/projects/ignite-admin/img1.png",
      "img/projects/ignite-admin/img2.png",
      "img/projects/ignite-admin/img3.png",
      "img/projects/ignite-admin/img4.png",
      "img/projects/ignite-admin/img5.png",
      "img/projects/ignite-admin/img6.png",
      "img/projects/ignite-admin/img7.png",
      "img/projects/ignite-admin/img8.png",
    ],
  },
  {
    name: "Sistema POS Karamelos",
    image_path: "img/projects/karamelos.png",
    description:
      "API Rest para un Sistema de punto de venta para una tienda de dulces con diseño personalizado y optimizado para SEO.",
    technologies: [
      { name: "Next.js", color: "orange" },
      { name: "React", color: "green" },
      { name: "TypeScript", color: "blue" },
      { name: "Tailwind", color: "sky" },
      { name: "Laravel", color: "red" },
    ],
    githubLink: "https://github.com/SamaelMedina28/Citlaly",
    largeDescription:
      "Desarrollé una API REST en Laravel para un sistema de punto de venta utilizado en una dulcería local llamada Karamelos. El sistema permite realizar ventas de productos por gramaje, gestionar inventario, crear y administrar usuarios con roles diferenciados (administrador y clerk), y llevar un control completo de las operaciones diarias mediante cortes X y Z, ventas por lote y análisis de diferencias entre cortes. La API incluye módulos para: Registro y control de ventas, Gestión de inventario y productos con imágenes, Administración de usuarios y permisos,Historial de lotes y cortes con cálculos automáticos Consulta detallada de ventas individuales y por periodo Se diseñó pensando en reglas de negocio reales, asegurando que la lógica de ventas, cierres y diferencias reflejara el flujo operativo de un punto de venta físico.",
    learnings:
      "En este proyecto aprendí a manejar lógica de negocio aplicada a un entorno real, especialmente en el cálculo de ventas, cortes y diferencias. Profundicé en la gestión de imágenes entre backend y frontend mediante serialización Base64, y en la construcción de paginación eficiente para consumo desde React/Next.js. También reforcé el uso de middlewares para proteger rutas tanto en la API como en el frontend, estructurando el acceso según roles y garantizando una comunicación segura entre ambos entornos. Además, consolidé buenas prácticas de programación con Git: estructurar ramas para cada feature, realizar pull requests claros y mantener un historial limpio mediante commits descriptivos y consistentes, mejorando el flujo de colaboración y el control de versiones. Y tambien use swagger para documentar la api.",
    imgsSlider: [
      "img/projects/karamelos/img1.png",
      "img/projects/karamelos/img2.png",
      "img/projects/karamelos/img3.png",
      "img/projects/karamelos/img4.png",
      "img/projects/karamelos/img5.png",
      "img/projects/karamelos/img6.png",
      "img/projects/karamelos/img7.png",
    ],
  },
  {
    name: "Costurerias Mariposa",
    image_path: "img/projects/citlaly.png",
    description:
      "Sitio web para una costureria local, con diseño personalizado y optimizado para SEO.",
    technologies: [
      { name: "HTML5", color: "orange" },
      { name: "Tailwind", color: "blue" },
      { name: "JavaScript", color: "yellow" },
    ],
    githubLink: "https://github.com/SamaelMedina28/Citlaly",
    largeDescription:
      "Desarrollé un sitio web para una costurería local con un diseño personalizado y optimizado para SEO. Utilicé HTML5 y Tailwind para crear un diseño moderno y responsive, y JavaScript para agregar interactividad y funcionalidad. También implementé técnicas de optimización para mejorar el rendimiento y la experiencia del usuario.",
    learnings:
      "En este proyecto reforcé mi habilidad para crear interfaces responsivas usando TailwindCSS y mejoré mi forma de estructurar contenido para pequeñas empresas. También aprendí a implementar formularios que envían correos mediante APIs externas como Formspree, ideal para sitios estáticos sin backend. Además, profundicé en buenas prácticas básicas de SEO y optimización para mejorar la presentación de un negocio local en línea.",
    imgsSlider: [
      "img/projects/citlaly/img1.png",
      "img/projects/citlaly/img2.png",
      "img/projects/citlaly/img3.png",
      "img/projects/citlaly/img4.png",
      "img/projects/citlaly/img5.png",
      "img/projects/citlaly/img6.png",
      "img/projects/citlaly/img7.png",
      "img/projects/citlaly/img8.png",
    ],
  },
  {
    name: "Korbo",
    image_path: "img/projects/korbo-mvc.png",
    description:
      "Libreria liguera de PHP puro de arquitectura MVC con documentación.",
    technologies: [
      { name: "PHP", color: "blue" },
      { name: "MySQL", color: "yellow" },
      { name: "Tailwind", color: "cyan" },
      { name: "Git", color: "orange" },
    ],
    githubLink: "https://github.com/SamaelMedina28/Framework_MVC",
    largeDescription:
      "Korbo es una librería ligera desarrollada en PHP puro que implementa una arquitectura MVC inspirada en Laravel. Surgió como solución a un problema común en mi universidad: varios compañeros tenían dificultades para estructurar correctamente sus proyectos finales sin usar frameworks. Para ayudarlos, construí una base funcional que sirviera como mini framework, permitiendo trabajar con rutas, controladores, modelos y vistas de forma organizada. La librería incluye un enrutador similar al de Laravel, métodos como create(), all(), first() y where() para interactuar con la base de datos, así como paginación, buscadores, y las acciones clásicas de index(), create(), update(), entre otras. Tres equipos utilizaron Korbo para desarrollar sus sistemas finales, lo que validó su utilidad como herramienta educativa y práctica para proyectos en PHP sin frameworks.",
    learnings:
      "Este proyecto fue una de mis experiencias más completas con PHP puro. Aprendí a aplicar programación orientada a objetos en un entorno real, estructurando controladores, modelos y servicios desde cero. También entendí cómo construir un sistema de enrutamiento propio, manejar vistas de forma dinámica, implementar buscadores y paginación, y crear métodos personalizados para realizar consultas a la base de datos. Además, trabajé con conceptos como variables de variables y patrones comunes en frameworks modernos, lo que me permitió comprender mejor cómo funcionan internamente herramientas como Laravel.",
    imgsSlider: [
      "img/projects/korbo-mvc/img1.png",
      "img/projects/korbo-mvc/img2.png",
      "img/projects/korbo-mvc/img3.png",
      "img/projects/korbo-mvc/img4.png",
      "img/projects/korbo-mvc/img5.png",
      "img/projects/korbo-mvc/img6.png",
    ],
  },
  {
    name: "Horario UABC",
    image_path: "img/projects/horario.png",
    description:
      "Aplicación web para gestión de horario escolar con autenticación con Jetstream y reactividad con Livewire basado en el antiguo horario de la universidad.",
    technologies: [
      { name: "Laravel", color: "red" },
      { name: "MySQL", color: "yellow" },
      { name: "Livewire", color: "blue" },
      { name: "Tailwind", color: "sky" },
      { name: "Jetstream", color: "purple" },
    ],
    githubLink: "https://github.com/SamaelMedina28/Proyecto_horario_livewire",
    largeDescription:
      "Desarrollé una aplicación web para organizar de forma sencilla el horario escolar universitario, inspirada en el sistema de horarios antiguo de la UABC. La plataforma permite registrar materias, asignarlas a días específicos y visualizar el horario de manera automática según el día actual. Gracias a la integración de Livewire, la interfaz es totalmente reactiva: el carrusel de materias cambia dinámicamente para mostrar únicamente las clases correspondientes a la fecha en la que el usuario accede. La autenticación se implementó con Jetstream, garantizando sesiones seguras, mientras que TailwindCSS permitió crear una interfaz limpia y funcional adaptada a distintos dispositivos.",
    learnings:
      "En este proyecto aprendí a crear formularios dinámicos capaces de enviar arreglos de objetos, lo que me permitió manejar múltiples materias dentro de un mismo envío y procesarlas correctamente en el backend. También profundicé en el uso de Carbon para gestionar fechas, actualizar la información según el día actual y sincronizar el carrusel de clases con la fecha correspondiente. Además, reforcé mi experiencia utilizando Livewire para construir interfaces reactivas sin necesidad de JavaScript personalizado, lo que mejoró mucho mi flujo de trabajo en Laravel.",
    imgsSlider: [
      "img/projects/horario/img1.png",
      "img/projects/horario/img2.png",
      "img/projects/horario/img3.png",
      "img/projects/horario/img4.png",
      "img/projects/horario/img5.png",
      "img/projects/horario/img6.png",
    ],
  },
  {
    name: "Recetapp | Recetario Digital",
    image_path: "img/projects/recetario.png",
    description:
      "Recetario digital para guardar y administrar recetas de cocina con texto enriquesido y reactividad con Livewire.",
    technologies: [
      { name: "Laravel", color: "red" },
      { name: "MySQL", color: "yellow" },
      { name: "Livewire", color: "blue" },
      { name: "Tailwind", color: "sky" },
      { name: "Jetstream", color: "purple" },
    ],
    githubLink: "https://github.com/SamaelMedina28/Proyecto_Recetario",
    largeDescription:
      "Desarrollé una aplicación web para administrar recetas personales, permitiendo organizarlas por categorías como desayunos, pastas, postres, bebidas y más. Cada receta incluye una descripción con texto enriquecido, una lista de ingredientes, instrucciones detalladas y una imagen representativa. Implementé Quill.js para el editor de texto, integrando correctamente su formato dentro del entorno de Tailwind, evitando que se perdieran los estilos y añadiendo un buscador de recetas. También implementé Livewire para la reactividad, lo que me permitió crear una interfaz dinámica y responsive que se actualizaba automáticamente cuando se realizaban cambios en el backend.",
    learnings:
      "En este proyecto aprendí a integrar un editor de texto enriquecido con Quill.js, manejar correctamente imágenes y rutas de almacenamiento en Laravel, y a guardar y mostrar contenido formateado sin que Tailwind afectara los estilos del editor. También reforcé la creación de buscadores eficientes y el uso de Livewire para reactividad en formularios y tablas.",
    imgsSlider: [
      "img/projects/recetario/img1.png",
      "img/projects/recetario/img2.png",
      "img/projects/recetario/img3.png",
      "img/projects/recetario/img4.png",
      "img/projects/recetario/img5.png",
      "img/projects/recetario/img6.png",
    ],
  },
  {
    name: "Pass Manager",
    image_path: "img/projects/pass-manager.png",
    description:
      "Aplicacion web para gestión de contraseñas con autenticación y exportación de contraseñas a excel.",
    technologies: [
      { name: "Laravel", color: "red" },
      { name: "MySQL", color: "yellow" },
      { name: "Livewire", color: "blue" },
      { name: "Tailwind", color: "cyan" },
      { name: "Laravel Excel", color: "green" },
    ],
    githubLink: "https://github.com/SamaelMedina28/Proyecto_passmanager",
    largeDescription:
      "Creé una aplicación web para gestionar contraseñas de forma centralizada, permitiendo a los usuarios guardar, organizar y proteger sus claves de acceso. Añadí autenticación con Laravel Jetstream, un panel para administrar entradas y la opción de exportar todas las contraseñas a Excel utilizando Laravel Excel. La interfaz fue diseñada para ser simple y funcional, acompañada de un buscador y ordenamiento para encontrar rápidamente cada registro.",
    learnings:
      "Aprendí a integrar Laravel Excel para generar archivos descargables, estructurar datos en tablas exportables y proteger rutas y acciones con políticas y middleware. Además reforcé la gestión segura de información sensible y el uso de Livewire para manejar interactividad sin recargar la página.",
    imgsSlider: [
      "img/projects/pass-manager/img1.png",
      "img/projects/pass-manager/img2.png",
      "img/projects/pass-manager/img3.png",
      "img/projects/pass-manager/img4.png",
      "img/projects/pass-manager/img5.png",
      "img/projects/pass-manager/img6.png",
    ],
  },
  {
    name: "Floreria",
    image_path: "img/projects/floreria.png",
    description:
      "Sitio web para una floreria local, con diseño personalizado y optimizado para SEO.",
    technologies: [
      { name: "HTML5", color: "orange" },
      { name: "CSS3", color: "blue" },
      { name: "JavaScript", color: "yellow" },
    ],
    githubLink: "https://github.com/SamaelMedina28/Proyecto_Floreria",
    largeDescription:
      "Desarrollé un sitio web informativo para una florería local, con un diseño limpio, moderno y enfocado en destacar los productos principales. Incluye una sección de catálogo, formularios de contacto y optimización SEO básica para mejorar la visibilidad del negocio en buscadores. La página fue construida desde cero con HTML, CSS y JavaScript, utilizando animaciones suaves y disposición responsiva para adaptarse a distintos dispositivos.",
    learnings:
      "En este proyecto reforcé mis bases de HTML y CSS, especialmente en organización de componentes visuales y buenas prácticas de accesibilidad. También aprendí a trabajar con optimización SEO básica, estructura semántica y optimización de imágenes para mejorar el rendimiento general del sitio.",
    imgsSlider: [
      "img/projects/floreria/img1.png",
      "img/projects/floreria/img2.png",
      "img/projects/floreria/img3.png",
      "img/projects/floreria/img4.png",
      "img/projects/floreria/img5.png",
      "img/projects/floreria/img6.png",
    ],
  },
  {
    name: "Horario UABC React (Migracion en proceso)",
    image_path: "img/projects/horario-react.png",
    description:
      "Se migro la aplicacion web de Horario UABC a React con Inertia para mejor manejo de datos y reactividad. (En proceso)",
    technologies: [
      { name: "Laravel", color: "red" },
      { name: "MySQL", color: "yellow" },
      { name: "React", color: "green" },
      { name: "TypeScript", color: "blue" },
      { name: "Inertia", color: "purple" },
      { name: "Tailwind", color: "cyan" },
    ],
    githubLink: "https://github.com/SamaelMedina28/Horario-react-inertia",
    largeDescription:
      "Esta es la versión en React de la aplicación «Horario UABC», una migración creada con Inertia para aprovechar un flujo más moderno, rápido y dinámico entre Laravel y el frontend. En esta versión mejoré la experiencia visual, la organización de componentes y la forma de gestionar materias y clases dentro del horario.La interfaz permite crear, editar y eliminar tanto materias como las clases asociadas a un día específico, ofreciendo una interacción más fluida gracias a React y una gestión de datos más limpia mediante Inertia. Además, se renovó el diseño general utilizando Tailwind para obtener una apariencia más ordenada, actual y responsiva.",
    learnings:
      "En esta migración profundicé en TypeScript, aprendiendo a usar interfaces, types y el manejo de errores para tener un código más seguro y predecible. También integré componentes de shadcn/ui, lo que me permitió estructurar una interfaz más consistente y escalable. Otro aprendizaje clave fue comprender cómo manejar formularios dinámicos desde React, especialmente al editar múltiples campos al mismo tiempo y al separar correctamente la eliminación visual de campos en el formulario del borrado real en la base de datos, evitando inconsistencias entre UI y backend.",
    imgsSlider: [
      "img/projects/horario-react/img1.png",
      "img/projects/horario-react/img2.png",
      "img/projects/horario-react/img3.png",
      "img/projects/horario-react/img4.png",
      "img/projects/horario-react/img5.png",
      "img/projects/horario-react/img6.png",
      "img/projects/horario-react/img7.png",
    ],
  },
  {
    name: "API Rest Inventario",
    image_path: "img/projects/inventario.png",
    description:
      "API Rest Full en Laravel, con frontend en React para gestión de inventario con autenticación en JWT practicando filtros, paginacion etc.",
    technologies: [
      { name: "Laravel", color: "red" },
      { name: "MySQL", color: "yellow" },
      { name: "React", color: "green" },
      { name: "TypeScript", color: "blue" },
      { name: "Tailwind", color: "cyan" },
      { name: "JWT", color: "green" },
    ],
    githubLink: "https://github.com/SamaelMedina28/API_Inventario",
    largeDescription:
      "Desarrollé una API REST completa en Laravel para gestionar un inventario de productos, incluyendo creación, edición, eliminación y relación con categorías. Implementé autenticación con JWT utilizando cookies para un flujo más seguro y práctico, además de protección de rutas mediante middlewares para garantizar que solo usuarios autenticados puedan acceder al panel. El frontend lo construí con React y TypeScript, consumiendo la API mediante peticiones JSON y creando una interfaz sencilla para manejar productos, categorías y usuarios. También añadí paginación, filtros y una estructura clara de componentes para una mejor experiencia de uso. Durante el desarrollo probé la API desde distintos entornos (JavaScript puro, React y Next.js), lo cual me permitió entender mejor la versatilidad y las ventajas de separar el backend de un monolito tradicional.",
    learnings:
      "En este proyecto aprendí por primera vez a construir una API REST real, manejando respuestas JSON, validaciones y estructura de controladores. También entendí cómo trabajar con formateo y casteo de fechas, especialmente para evitar problemas de zonas horarias al consumir la API desde JavaScript. Dominar JWT fue clave: aprendí a implementarlo tanto de forma tradicional como usando cookies para mantener sesiones seguras. Además, entendí cómo proteger rutas en React y Next.js para evitar accesos no autorizados. Este proyecto me mostró la flexibilidad que brinda crear una API independiente y lo útil que resulta al poder consumirla desde distintas tecnologías y entornos.",
    imgsSlider: [
      "img/projects/inventario/img1.png",
      "img/projects/inventario/img2.png",
      "img/projects/inventario/img3.png",
      "img/projects/inventario/img4.png",
      "img/projects/inventario/img5.png",
      "img/projects/inventario/img6.png",
    ],
  },
  {
    name: "Blog",
    image_path: "img/projects/blog.png",
    description:
      "Blog para compartir articulos sobre desarrollo web y otros temas.",
    technologies: [
      { name: "Laravel", color: "red" },
      { name: "MySQL", color: "yellow" },
      { name: "Livewire", color: "blue" },
      { name: "Tailwind", color: "sky" },
      { name: "Jetstream", color: "purple" },
    ],
    githubLink: "#",
    largeDescription:
      "Este proyecto consiste en un sistema completo para administrar un blog personal. Implementé la creación y gestión de etiquetas, categorías y publicaciones, cada una con su propia descripción, imágenes y contenido enriquecido utilizando Tiptap. Los posts pueden estructurarse con títulos, subtítulos, estilos y diferentes tipos de bloques para mejorar la lectura. Fue un proyecto pensado para ofrecer una experiencia flexible y ordenada al momento de publicar artículos sobre desarrollo web u otros temas, integrando funcionalidad moderna con una interfaz sencilla y clara.",
    learnings:
      "Este proyecto fue mi primer acercamiento práctico a los fundamentos de Laravel: rutas, controladores, modelos, validaciones y relaciones entre tablas. Aprendí a manejar imágenes correctamente, así como a integrar texto enriquecido utilizando Tiptap. También pude trabajar con relaciones uno a muchos y muchos a muchos de forma más profunda. Además, fue mi primera experiencia manejando imágenes y formularios usando Inertia, entendiendo sus diferencias y particularidades respecto a un proyecto tradicional de Laravel.",
    imgsSlider: [
      "img/projects/blog/img1.png",
      "img/projects/blog/img2.png",
      "img/projects/blog/img3.png",
      "img/projects/blog/img4.png",
      "img/projects/blog/img5.png",
      "img/projects/blog/img6.png",
    ],
  },
  {
    name: "Sala de chat",
    image_path: "img/projects/laravel-reverb.png",
    description:
      "Creacion de sala de chat funcional con escucha de eventos en tiempo real. para multiples usuarios practicando con laravel reverb, Echo y Pusher.",
    technologies: [
      { name: "Laravel", color: "red" },
      { name: "Laravel reverb", color: "purple" },
      { name: "Pusher", color: "yellow" },
      { name: "Tailwind", color: "cyan" },
      { name: "Livewire", color: "blue" },
    ],
    githubLink: "https://github.com/SamaelMedina28/Laravel-reverb",
    largeDescription:
      "Este proyecto fue una prueba práctica para comprender cómo funcionan los canales y la transmisión de eventos en tiempo real dentro de Laravel. Implementé una sala de chat donde varios usuarios pueden enviarse mensajes y ver las actualizaciones al instante sin necesidad de recargar la página. También integré el manejo de fotos de perfil para que cada mensaje mostrara correctamente la información del usuario que lo envía. El objetivo principal fue entender el flujo completo: desde emitir un evento, escucharlo en el frontend y mostrar los cambios en tiempo real utilizando Laravel Reverb, Echo y Pusher.",
    learnings:
      "Pude aprender a utilizar Reverb desde sus fundamentos, configurando canales públicos y privados para escuchar eventos en tiempo real. También trabajé con jobs y colas para manejar procesos en segundo plano y asegurar que los mensajes se procesaran correctamente. Este proyecto me ayudó a entender de forma práctica cómo funcionan los canales de escucha, la emisión de eventos y la infraestructura necesaria para aplicaciones en tiempo real.",
    imgsSlider: [
      "img/projects/laravel-reverb/img1.png",
      "img/projects/laravel-reverb/img2.png",
      "img/projects/laravel-reverb/img3.png",
      "img/projects/laravel-reverb/img4.png",
      "img/projects/laravel-reverb/img5.png",
      "img/projects/laravel-reverb/img6.png",
    ],
  },
  {
    name: "Vetcare",
    image_path: "img/projects/vetcare.png",
    description:
      "Sitio web empresarial para veterinaria local con diseño responsive y UX/UI mejorado y rendimiento en SEO.",
    technologies: [
      { name: "Alpine", color: "blue" },
      { name: "Tailwind", color: "cyan" },
      { name: "HTML", color: "orange" },
      { name: "CSS", color: "sky" },
    ],
    githubLink: "https://github.com/SamaelMedina28/VetCare",
    largeDescription:
      "“Vetcare” es una plantilla web profesional diseñada para una veterinaria local, desarrollada con un enfoque en diseño responsivo, accesibilidad y buenas prácticas de SEO. El proyecto incluye secciones informativas, formularios funcionales y una interfaz ligera pensada para ofrecer una experiencia clara y moderna al usuario. Utiliza TailwindCSS y Alpine.js para lograr una interacción fluida sin necesidad de frameworks pesados, manteniendo el código limpio y fácil de escalar.",
    learnings:
      "En este proyecto reforcé el uso de TailwindCSS y aprendí a combinarlo con Alpine.js para manejar pequeñas interacciones sin sacrificar rendimiento. También trabajé en la estructura SEO básica de un sitio empresarial, optimizando tiempos de carga y organizando mejor el contenido. Además, profundicé en la creación de interfaces responsivas y en la importancia de una UX clara y funcional en sitios orientados a negocios locales.",
    imgsSlider: [
      "img/projects/vetcare/img1.png",
      "img/projects/vetcare/img2.png",
      "img/projects/vetcare/img3.png",
      "img/projects/vetcare/img4.png",
      "img/projects/vetcare/img5.png",
      "img/projects/vetcare/img6.png",
    ],
  },
];
