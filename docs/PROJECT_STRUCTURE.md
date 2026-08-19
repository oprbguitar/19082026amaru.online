# Estructura del proyecto

```text
.
├── imagenes/                 # originales suministrados; no se modifican
├── public/
│   ├── assets/               # copias usadas por producción
│   ├── 404.html
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/           # piezas de la pantalla
│   ├── data/projects.ts      # catálogo único de proyectos
│   ├── layouts/MainLayout.astro
│   ├── pages/index.astro     # composición y estado cliente
│   └── styles/               # tokens y estilos globales
├── .github/workflows/        # despliegue Pages
├── astro.config.mjs
├── package.json
└── tailwind.config.mjs
```

Las tarjetas se modifican desde `src/data/projects.ts`, no desde el markup de la página. Los activos visuales se reemplazan creando una nueva copia normalizada en `public/assets/`; los originales de `imagenes/` son la fuente de diseño.
