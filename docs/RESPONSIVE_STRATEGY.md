# Estrategia responsive sin scroll de documento

En escritorio y tablet la raíz usa `height: 100dvh`, `min-height: 100svh` y `overflow: hidden`; el shell distribuye el header y el escenario con filas flexibles. En móvil el shell pasa a una columna de altura automática y permite scroll vertical cuando la altura disponible no alcanza.

## Desktop y tablet

Entre 640px y escritorio, el escenario usa dos columnas. El bookshelf mantiene una relación 1.414:1 y el grid conserva 4 columnas × 3 filas dentro del marco. En tablet se reducen gaps, tipografía y estadísticas cualitativas antes de permitir cualquier overflow.

## Móvil

En menos de 640px, el layout pasa a una columna: header compacto, hero reducido, bookshelf con proporción 1.414:1 y controles compactos. El bookshelf cambia a una única tarjeta visible con controles anterior/siguiente e indicador. Las tarjetas restantes siguen en el DOM y se pueden recorrer; el documento puede desplazarse verticalmente en teléfonos bajos. La búsqueda filtra la colección y reinicia el índice móvil.

## Overlays

El menú móvil y el detalle de proyecto son overlays. El menú bloquea visualmente el fondo y el dialog nativo maneja su propio foco y cierre con Escape. Se priorizan `clamp()`, `minmax(0, ...)`, `min-height: 0`, proporciones estables y puntos de quiebre mínimos para evitar clipping.
