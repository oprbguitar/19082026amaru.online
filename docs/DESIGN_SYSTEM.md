# Sistema de diseño

## Tokens

Los tokens viven en `src/styles/tokens.css`: verde Amaru, verde oscuro, cyan, naranja, dorado, púrpura, azul, papel, tinta, mutado, borde, sombra, radios y movimiento.

## Tipografía

Georgia/Times New Roman funciona como serif editorial para el nombre y el hero. Trebuchet MS/Segoe UI funciona como sans de interfaz. No se cargan fuentes externas.

## Tarjetas

Cada tarjeta tiene superficie pastel por variante, borde semántico, textura lineal muy sutil, medallón circular superior, número, icono SVG, título, descripción, patrón inferior y flecha circular. Hover desplaza la tarjeta unos píxeles y refuerza la sombra; `prefers-reduced-motion` reduce la transición.

## Motivos

`fondo.png` aporta papel, líneas geométricas y paisaje de baja intensidad. `box.png` aporta el marco de piedra y separadores; las tarjetas siguen siendo DOM independiente. `quipu.png` aporta los hilos turquesa, naranja, violeta y dorado del hero.

## Espaciado, sombras y accesibilidad

El layout usa `clamp()` para escalas, radios suaves y sombras cortas. Los estados de foco son visibles, los controles principales tienen áreas táctiles amplias, la navegación móvil declara `aria-expanded`/`aria-controls`, y el modal nativo responde a Escape y devuelve el foco.
