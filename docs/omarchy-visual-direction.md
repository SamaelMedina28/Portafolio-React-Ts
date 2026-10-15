# Dirección visual: Omarchy 4

Investigación realizada el 14 de octubre de 2026 (Tijuana).

## Fuentes oficiales

- [Sitio de Omarchy](https://omarchy.org/): ofrece Omarchy 4.0.4 al momento de la investigación. El sitio admite distintas paletas; Omarchy no tiene una única combinación de colores.
- [Release Quattro 4.0.0](https://github.com/omacom/omarchy/releases/tag/v4.0.0): integra barra, menús, lanzador, notificaciones y paneles en Quickshell, con un sistema de temas compartido.
- [Temas](https://omarchy.org/manual/themes/): coordinación del escritorio, terminal, editor y shell.
- [Tipografía](https://omarchy.org/manual/fonts/): JetBrainsMono Nerd Font como fuente predeterminada del sistema y terminal.
- [Branding](https://omarchy.org/manual/branding/): marca ASCII basada en FIGlet Delta Corps Priest 1.
- [Paleta Tokyo Night del escritorio](https://github.com/omacom/omarchy/blob/quattro/themes/tokyo-night/colors.toml).
- [CSS del sitio consultada](https://omarchy.org/_astro/page-seo.KVOB7UVe.css): paletas web y fuentes JetBrains Mono / Geist. URL de asset versionado, susceptible a cambiar.

## Interpretación para Samael Medina

La identidad personal usa un monograma `sm` y un nombre pixelado original. Se toman de Omarchy el lenguaje de terminal, las ventanas delimitadas, la tipografía monoespaciada, los botones rectangulares y el cambio coordinado de tema.

Ethereal es el tema inicial: fondo `#060B1E`, superficie profunda `#040816`, panel `#131a3a`, texto `#ffcead`, secundario `#6d7db6`, acento lavanda `#7d82d9` y lavanda clara `#c2c4f0`. Sus colores salen de [la paleta oficial de Omarchy](https://github.com/omacom/omarchy/blob/quattro/themes/ethereal/colors.toml). Tokyo Night conserva su fondo `#1a1b26`, texto `#c0caf5` y acento verde `#9ece6a`; Osaka Jade, Gruvbox y Flexoki Light siguen disponibles como alternativas.

- Portada con nombre pixelado, retrato y resumen del stack en ventanas.
- Navegación numerada y selector de cuatro temas con persistencia local.
- Cuatro proyectos destacados y acceso a los 17 proyectos originales; galería modal y enlaces conservados.
- Secciones de perfil, experiencia, herramientas y contacto integradas en el mismo sistema de colores.
- Diseño adaptable, foco visible, enlace de salto y respeto a movimiento reducido.

## Comprobaciones

- Build de TypeScript + Vite.
- Selector de tema y persistencia tras recarga.
- Alternancia entre cuatro proyectos destacados y los 17 del archivo.
- Galería modal, navegación entre imágenes, Escape y restauración del foco.
- Revisión en navegador de anchos de escritorio y móvil.

El formulario conserva su integración existente con Formspree. La revisión no envía mensajes reales.
