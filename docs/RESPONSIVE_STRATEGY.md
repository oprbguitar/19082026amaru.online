# Estrategia responsive sin scroll de documento

La raíz del sitio usa `height: 100dvh`, `min-height: 100svh` y `overflow: hidden`. El shell distribuye header, escenario y barra de información con filas flexibles. El escenario tiene `min-height: 0` para que el contenido no empuje al documento.

## Desktop y tablet

Entre 640px y escritorio, el escenario usa dos columnas. El bookshelf mantiene una relación 1.414:1 y el grid conserva 4 columnas × 3 filas dentro del marco. En tablet se reducen gaps, tipografía y estadísticas cualitativas antes de permitir cualquier overflow.

## Móvil

En menos de 640px, el layout pasa a una columna: header compacto, hero reducido, bookshelf interno y barra compacta. El bookshelf cambia a una única tarjeta visible con controles anterior/siguiente e indicador. Las tarjetas restantes siguen en el DOM y se pueden recorrer; no existe scroll vertical de página. La búsqueda filtra la colección y reinicia el índice móvil.

## Overlays

El menú móvil y el detalle de proyecto son overlays. El menú bloquea visualmente el fondo y el dialog nativo maneja su propio foco y cierre con Escape. La interacción interna no habilita el scroll del documento. Se priorizan `clamp()`, `minmax(0, ...)`, `min-height: 0` y puntos de quiebre mínimos para evitar clipping.
