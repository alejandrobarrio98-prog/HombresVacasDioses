# Cómo actualizar este sitio

Este documento explica, paso a paso, cómo agregar o cambiar libros,
pinturas, fotografías y escritos en el sitio. Está pensado para que lo
pueda seguir cualquier persona, sin conocimientos técnicos previos.

## Qué archivo edita cada cosa

| Quieres cambiar…                        | Abre este archivo   |
|-----------------------------------------|---------------------|
| Los libros a la venta                   | `libros.html`       |
| Las pinturas a la venta                 | `pinturas.html`     |
| Las fotografías enmarcadas              | `fotografias.html`  |
| Un escrito, o agregar uno nuevo         | `escritos.html`     |
| La biografía y el retrato               | `sobre.html`        |
| La página de inicio (portada)           | `index.html`        |
| Los colores, tipografías o el diseño    | `styles.css`        |

Todos son archivos de texto normales. Se pueden abrir con cualquier
editor (por ejemplo, **Bloc de notas** en Windows o **TextEdit** en
Mac). Para ver los cambios: guarda el archivo y abre el mismo archivo
con doble clic — se abrirá en tu navegador.

## Agregar un libro, una pintura o una fotografía

Dentro de cada archivo (`libros.html`, `pinturas.html`,
`fotografias.html`) hay bloques de código repetidos, uno por cada
obra. Cada bloque empieza con:

```
<article class="card">
```

…y termina con:

```
</article>
```

Para agregar una obra nueva:

1. **Copia** un bloque completo (desde `<article class="card">` hasta
   `</article>`, incluyendo esas dos líneas).
2. **Pégalo** justo debajo del bloque original.
3. Cambia los textos: título, descripción, precio, y el nombre de la
   obra en el enlace de WhatsApp.
4. Guarda el archivo y recarga la página en el navegador.

Los bloques ya tienen comentarios en español, dentro del código,
explicando qué cambiar en cada línea.

## Agregar una imagen a una obra

Por ahora las obras muestran un fondo de color. Cuando tengas una
fotografía de la obra:

1. Guarda la imagen dentro de la carpeta `assets/` (si no existe,
   créala). Ponle un nombre corto y sin acentos, por ejemplo:
   `vaca-mediodia.jpg`.
2. En el bloque de la obra, busca la línea del fondo, por ejemplo:

   ```
   <div class="card__thumb painterly painterly--dawn" ...></div>
   ```

3. Reemplázala por:

   ```
   <div class="card__thumb">
     <img src="assets/vaca-mediodia.jpg" alt="Vaca al mediodía">
   </div>
   ```

4. Guarda y recarga.

El texto en `alt=""` es lo que leerá una persona con dificultades
visuales. Ponle una descripción breve pero clara.

## Agregar un escrito nuevo

En `escritos.html`:

1. Al principio del contenido hay un índice (`<ol>` dentro de
   `<nav class="writings-toc">`). Añade una línea nueva con el título
   del escrito, un enlace a `#alguna-palabra-corta` (por ejemplo
   `#retrato-julio`) y la fecha.
2. Más abajo, copia uno de los bloques `<article class="writing">`
   completo y cámbiale el `id` (que coincida con la palabra corta que
   usaste en el índice), el título, la fecha y el texto.
3. Guarda y recarga.

Dentro del texto puedes usar:

- `<p>...</p>` para un párrafo.
- `<blockquote>...</blockquote>` para una cita destacada.
- `<h3>...</h3>` para un subtítulo dentro del escrito.
- `<em>...</em>` para poner una palabra en cursiva.
- `<strong>...</strong>` para poner una palabra en negrita.

## Cambiar el número de WhatsApp

El número está escrito directamente en todos los enlaces, con la
forma `wa.me/51999469169`. Si algún día cambias de número, usa la
función **Buscar y reemplazar** de tu editor para reemplazar
`51999469169` por el nuevo número (con código de país, sin espacios
ni el signo `+`).

## Publicar el sitio

Este sitio no necesita ningún servidor especial. Puedes subirlo, tal
cual, a cualquiera de estos servicios gratuitos:

- **GitHub Pages** — si el proyecto ya vive en GitHub, basta con
  activar Pages en la configuración del repositorio.
- **Netlify** — arrastra la carpeta a `app.netlify.com` y listo.
- **Cloudflare Pages** — conecta el repositorio y publica.

Si prefieres, cualquier persona con conocimientos básicos de web
puede ayudarte con la publicación en menos de diez minutos.

## En resumen

- Todos los cambios son a un archivo de texto y una imagen dentro de
  la carpeta `assets/`.
- Copia un bloque, cámbiale los textos, guarda.
- No hay bases de datos, ni contraseñas, ni nada que se pueda romper
  de fondo. Si algo se ve mal, deshaz el cambio y vuelve a la versión
  anterior.
