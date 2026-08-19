# Amaru.online

Amaru.online es una biblioteca digital de proyectos, fuentes y conocimiento conectado. Esta primera versión es una aplicación estática de una sola pantalla, inspirada en sistemas andinos de organización y memoria.

## Stack

- Astro + TypeScript
- Tailwind CSS para la capa de utilidades, con CSS tokens para la identidad visual
- SVG y CSS para iconos e interacción; JavaScript del navegador mínimo
- GitHub Pages mediante GitHub Actions

## Requisitos e instalación

Se requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

La aplicación se sirve con la base `/19082026amaru.online/`, igual que el proyecto publicado en GitHub Pages.

## Build y preview

```bash
npm run check
npm run build
npm run preview
```

`npm run build` ejecuta el chequeo Astro y genera `dist/` sin backend ni base de datos.

## Arquitectura y estructura

La composición vive en `src/pages/index.astro`; el layout y las partes visuales están separadas en `src/layouts/` y `src/components/`. El catálogo único está en `src/data/projects.ts`. La explicación completa está en [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) y [`docs/PROJECT_STRUCTURE.md`](docs/PROJECT_STRUCTURE.md).

## Activos y fuentes

Los originales permanecen en `imagenes/`. La versión usada por el sitio está en `public/assets/` con nombres normalizados: `logo.png`, `fondo.png`, `box.png` y `quipu.png`. No hay fuente local suministrada; el sistema usa Georgia para display y Trebuchet MS/Segoe UI para interfaz, con fallback seguro del sistema.

## Añadir un proyecto

Agrega un objeto tipado a `src/data/projects.ts`. Define `id`, número, título, descripción, categoría, color, icono, estado, palabras clave y una URL real si existe. Si `url` se omite, la tarjeta abre el modal de detalle accesible y no navega a una ruta inventada.

## Documentación

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): componentes, estado, búsqueda y despliegue.
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md): tokens, tipografía, tarjetas y motivos andinos.
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md): GitHub Pages y rutas base.
- [`docs/PROJECT_STRUCTURE.md`](docs/PROJECT_STRUCTURE.md): mapa de carpetas y responsabilidades.
- [`docs/RESPONSIVE_STRATEGY.md`](docs/RESPONSIVE_STRATEGY.md): estrategia sin scroll de documento.
