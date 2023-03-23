![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

# Evaluación final módulo 3

¡Hola! Bienvenides a mi repositorio donde podréis encontrar la página que he creado para la evaluación del módulo 3 en **Adalab**. 

Puedes visitar el proyecto a través de este enlace: http://beta.adalab.es/modulo-3-evaluacion-final-patricia-becerra/

## ¿En qué consiste?
Si visitas la página, encontraras una wiki con todos los personajes del universo de Harry Potter compuesta por:
```
   - Un header donde poder filtrar por diferentes categorías como: género, casa y nombre.
   - Una lista de personajes dependiendo de la casa a la que pertenecen.
   - Cuando haces click en uno de estos personajes, te llevará a una nueva página para ver con más detalle su información.
```

## Lenguajes utilizados

En este caso, hemos creado esta página con ayuda de React y SaSS para los estilos.

## Contenido
En el Kit hay 3 tipos de ficheros y carpetas:

- Los ficheros que están sueltos en la raíz del repositorio para configurar el proyecto (como gulpfile.js, package.json).
- La carpeta `src/`: donde se encuentran los ficheros de la página web y los componentes que la conforman.
- Las carpetas `public/` y `docs/`, que son generadas automáticamente cuando se arranca el proyecto. Son necesarias para que el kit lea los ficheros que hay dentro de `src/`, los procese y los genere dentro del las nombradas.

## Cómo trabajar con este repositorio

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/):

### Primeros pasos:

1. **Crea tu propio repositorio.**
1. **Copia todos los ficheros** de este proyecto de React en la carpeta raíz de tu repositorio.
   - Recuerda que debes copiar **también los ficheros ocultos**.
   - Si has decidido clonar este repo, no copies la carpeta `.git`. Si lo haces romperás tu propio repositorio.
1. **Abre una terminal** en la carpeta raíz de tu repositorio.
1. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

### Arrancar el proyecto:

Si ya has cumplido todos los pasos anteriores, para arrancar el proyecto, tienes que ejecutar el comando:

```bash
npm start
```

Este comando:

- **Abre una ventana de Chrome y muestra tu página web**, al igual que hace el plugin de VS Code Live Server (Go live).
- También **observa** todos los ficheros que hay dentro de la carpeta `src/`, para que cada vez que modifiques un fichero **refresca tu página en Chrome**.
- También **procesa los ficheros** HTML, SASS / CSS y JS y los **genera y guarda en la carpeta `public/`**. Por ejemplo:
   - Convierte los ficheros SASS en CSS.
   - Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.

Una vez ejecutes `npm start` ya puedes empezar a editar todos los ficheros que están dentro de la carpeta `src/` y programar cómodamente.

Importante: **El proyecto hay que arrancarlo con `npm start` cada vez que te empieces a programar.**

## ¿Falta algo?

¿Crees que hay algo en el proyecto que no funciona bien o que echas de menos? Estoy encantada de escuchar tu feedback y mejorarlo ❤️
