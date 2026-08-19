# Arquitectura

## Aplicación

Amaru.online es un sitio Astro estático. `MainLayout.astro` concentra metadata, canonical, favicon y manifest. `index.astro` compone el header, hero, librería, barra informativa y modal; no hay servidor, API, autenticación ni almacenamiento remoto.

## Componentes

- `Header.astro`: marca, navegación desktop, búsqueda y menú móvil.
- `Hero.astro`: jerarquía editorial, principios y CTAs.
- `Bookshelf.astro`: marco de piedra, grid y controles móviles.
- `ProjectCard.astro`: tarjeta reutilizable y accesible para cada proyecto.
- `ProjectModal.astro`: detalle semántico para proyectos sin URL.
- `StatsBar.astro`: métricas derivadas del catálogo local.
- `QuipuDecoration.astro`: capa decorativa con el activo local.

## Datos e interacción

`src/data/projects.ts` es la única fuente del catálogo. El script pequeño de `index.astro` filtra el atributo de búsqueda, mantiene el estado de página del carrusel móvil, abre el `<dialog>` nativo y restaura el foco. La búsqueda cubre título, descripción, categoría y palabras clave.

## Responsive

Desktop usa dos columnas: hero a la izquierda y 4×3 bookshelf a la derecha. Debajo de 640px el marco conserva una tarjeta visible por vez y ofrece anterior/siguiente, indicador y soporte de swipe visual mediante interacción táctil del navegador. El documento permanece bloqueado; únicamente el dialog y el panel móvil pueden comportarse como overlays.

## Despliegue

Astro genera HTML/CSS/JS estático en `dist/`. `astro.config.mjs` fija `base: '/19082026amaru.online'`. El workflow `.github/workflows/deploy.yml` construye y publica el artifact con GitHub Pages.
