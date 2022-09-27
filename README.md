En este proyecto se necesitaba crear una página sencilla con React utilizando componentes de clase, que a traves de Context se comunicaran entre sí, toda la maquetación
está hecha con SASS, y se ha utilizado una librería externa de componentes (Material UI).

Para inicializar el proyecto será necesario crearse una carpeta "config" dentro de la carpera "src" que contenga un archivo "apiKey" en el que se aloje la variable con
la api key del New York Times.

La página se divide en tres vistas: Home, Formulario de creación de noticia y Lista de noticias.

En la vista Home, sólo se necesitaba un input para guardar el nombre del usuario en la barra de navegación, que por defecto lanzará el nombre "Usuario", también
se ha añadido un botón de "Logout" que borra el estado de "user" y elimina el nombre.

La barra de navegación está configurada con el componente 'Link' para navegar a través de las distintas vistas.


![Home](https://user-images.githubusercontent.com/103537170/192386273-49ce1b61-1188-4191-bbdb-6ca463fc6caf.png)


En la vista de creación de la noticia, encontramos un formulario con los campos para rellenar la información, en el momento de publicar la noticia nos saldrá un
aviso de que la noticia ha sido guardada correctamente, esto se hace creando un estado para las noticias, que a través del método "spread operator" se unirán a las
que trae la API del NYT.


![Form](https://user-images.githubusercontent.com/103537170/192386885-3e1e5f35-6866-462c-bc2c-1a9f66a35146.png)


Por último encontramos la vista de todas las noticias, tanto las creadas como las consumidas con la API, he optado por una paginación simple para su visionado más
cómodo, tanto las tarjetas como los botones son importados de la librería Material UI, los links, llevan a la noticia seleccionada en la página del NYT.


![news](https://user-images.githubusercontent.com/103537170/192387207-9328a37f-f1fb-44ef-8088-4ecc72a2beb0.png)


Con este proyecto he conseguido asentar los conocimientos sobre la comunicación entre componentes de clase en React, así como el tratamiento de los datos consumidos de
una API y cómo mostrarlos de una forma correcta, a trabajar con librerías de componentes externos y maquetar correctamente con SASS.
