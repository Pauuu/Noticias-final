# Página de noticias con boostrap

## Link de Rawgit
https://rawgit.com/Pauuu/Noticias-final/master/news.html


## Bocetos

![Imagen uno](/uno.jpeg)
![Imagen dos](/dos.jpeg)


## Diseño

### Composición de los elementos
La noticia principal se verá arriba y ocupará el 100% de la anchura de su contenedor. Las demás serán la mitad de grandes y se verán de 2 en dos por cada fila. 
A la izquierda estará el contenedor para el anuncio con una mida de 320px de anchura y 615px de altura.

### Relación de los elementos
La página _News.html_ es la página principal del proyecto. En esta se muestran 3 noticias ya cargadas en el html y con links a cada una (_news1.html_, _news2.html_ y _news3.html_). Estas últimas són páginas donde se muestra el la noticia completa. 
El resto de noticias son presentaciones de noticias pero sin ningún tipo de link a ningún sitio. Son cargadas con JS y la información es leída desde ficheros de rawgit.

Cada noticia en la página principal cuenta con un título, una imagen de mediana resolución, una pequeña descripción y la fecha de la noticia.


### Anuncios
Dos tipos de anuncios: Móvil y PC.

El de PC se sitúa en la parte derecha de la página, colocado fijamente, por tanto no puede seguir al usuario.
La de móvil se sitúa en la parte superior de la página, tiene un tamaño menor al de PC.

Los anuncios son cargados con una etiqueta frame. Las noticias tienen un script que funciona como un carrusel que cada X tiempo cambia de imagen.

## Funcionamiento
Las páginas precargadas tienen un link a un archivo .html con la página precargada donde se muestra toda la noticia completa.

La página principal tiene la particularidad de cargar mas noticias (sin link a dicha noticia) al llegar al final de la página o al pulsar el botón de cargar más noticias. El usuario, pulsando un botón de autoscroll tiene la opción de cargar más noticias automáticamente o cargar al pulsar el botón del final de la página.

Las noticias se cargaran a partir de los archivos JSON almacenados en este mismo repositorio en la carpeta <i>data</i>. Cada JSON tiene almacenadas 2 noticias. La página principal carga una row por cada 2 JSONs.

