# NOVEDADES ANGULAR 18

## SIGNAL INPUTS 
Las signal inputs permiten enlazar valores desde componentes padres, similar a @lnput. Sin embargo al ser signals pueden cambiar durante el ciclo de vida del componente. Angular admite dos variantes de entradas de señal: 

- Entradas opcionales: Son opcionales de forma predeterminada. Se puede especificar un valor inicial explícito, o Angular usará implícitamente 'undefined' como valor inicial. 
- Entradas requeridas: Siempre tienen un valor del tipo de entrada dado. No puede haber un valor inicial, y se declaran usando la función 'input.required'. 

![](images/1.png)
![](images/2.png)
![](images/3.png)
![](images/4.png)

## SIGNAL OUTPUTS
Nueva forma de declarar outputs (salidas) en Angular que proporciona una API más sencilla y segura para emitir valores desde componentes a componentes padre.

Ofrece mejoras en la seguridad de tipos y la limpieza automática de outputs. Los Signal Outputs se pueden declarar mediante las funciones output() y outputFromObservable(), reduciendo la necesidad de código repetitivo y complejidades innecesarias. 

![](images/5.png)
![](images/6.png)
![](images/7.png)
![](images/8.png)

## SIGNAL QUERIES

Las consultas de señal son una forma de buscar elementos hijos y leer valores de sus inyectores dentro de un componente o directiva. Puedes utilizar las funciones viewChild y viewChildren para consultas de vista, y contentChild y contentChildren para consultas de contenido. 

![](images/9.png)
![](images/10.png)
![](images/11.png)

## MODEL INPUTS

Establecer conexiones de datos bidireccionales entre componentes padre e hijo, lo cual no era posible con las señales de solo lectura previamente disponibles. 

Esto se logra utilizando una sintaxis específica en el código, como se muestra en el ejemplo de un componente de casilla de verificación personalizado. 

![](images/12.png)

## NG-CONTENT ACTUALIZADO

ng-content es una directiva que se utiliza para insertar contenido dentro de un componente desde fuera de este. Anteriormente, no era posible especificar un contenido por defecto y ahora es posible.

![](images/13.png)
![](images/14.png)

## PROPIEDAD EVENTS PARA FORMULARIOS

Las clases FormControI, FormGroup y FormArray de los formularios de Angular ahora exponen una propiedad llamada eventos, que te permite suscribirte a un flujo de eventos para este control de formulario. 

![](images/15.png)

## REDIRECCIÓN DE RUTAS CON FUNCIONES

La propiedad redirectTo en las rutas ahora puede aceptar una función que devuelve una cadena. Esto proporciona una mayor flexibilidad al redireccionar.

![](images/16.png)

## ANGULAR+WIZ: REPETICIÓN DE EVENTOS

Si la página aún no se ha hidratado y, por lo tanto, no es interactiva, todos los eventos del usuario se perderían. 

A partir de la versión 18 utilizando la distribución de eventos, se grabarán los eventos del usuario y una vez que la aplicación esté hidratada se reproducirán.

Wiz es un framework web interno de Google, diseñado para aplicaciones críticas en rendimiento.  
- Renderizado del lado del servidor (SSR): Renderiza la página en el servidor, optimizando la carga inicial al minimizar el JavaScript necesario. 
- Carga de JavaScript mínima: Solo carga el JavaScript esencial para los componentes interactivos presentes en la página. 
- Biblioteca inline para eventos de usuario: Una pequeña biblioteca integrada gestiona los eventos de usuario mientras se carga el JavaScript requerido. 

![](images/17.png)

Permite registrar eventos de usuario durante la carga de la aplicación y reproducirlos una vez que la aplicación se haya hidratado. Esto asegura que las interacciones del usuario no se pierdan, incluso si la página no es completamente interactiva al momento de la interacción inicial. 

## NGOPTIMIZEDIMAGE

Mejora de rendimiento en la carga de imágenes y si la conexión es lenta la directiva solicita una imagen desenfocada para ocupar el lugar mientras va cargando mejorando la experiencia de usuario.

![](images/18.png)

## DETECCIÓN DE CAMBIOS EN EVOLUCIÓN

Angular ahora ofrece soporte experimental sin zone, eliminando las limitaciones de rendimiento y experiencia del desarrollador asociadas con la biblioteca zone.js. 

![](images/19.png)

## PARTIAL HYDRATION

Se basa en la misma tecnología que las vistas deferidas, pero en lugar de renderizar el bloque @placeholder en el servidor, puedes habilitar un modo donde Angular renderiza el contenido principal del bloque @defer en el servidor. En el cliente, Angular descargará el JavaScript asociado y hidratará el bloque deferido solo cuando se cumplan las condiciones especificadas en una plantilla. 

![](images/20.png)

## DEFER ESTABLE

Permite cargar estos recursos solo cuando se necesitan, lo que puede mejorar el rendimiento de la aplicación. Se puede configurar para cargar en diferentes condiciones, como cuando el navegador está en estado de reposo, cuando el elemento entra en la vista, cuando se produce una interacción con el elemento, entre otros. 

![](images/21.png)

## PUBLIC/ASSETS

En Angular veníamos acostumbrados a poder utilizar dentro de nuestra carpeta SRC archivos estáticos pero en Angular 18, este ya no es el caso. Para poder utilizar archivos estáticos hay que utlizar la carpeta public y las URLS deben apuntar hacia adentro de esta carpeta de forma "absoluta" 

![](images/22.png)
