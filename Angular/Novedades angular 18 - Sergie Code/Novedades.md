# NOVEDADES ANGULAR 18

## SIGNAL INPUTS 
Las signal inputs permiten enlazar valores desde componentes padres, similar a @lnput. Sin embargo al ser signals pueden cambiar durante el ciclo de vida del componente. Angular admite dos variantes de entradas de señal: 

- Entradas opcionales: Son opcionales de forma predeterminada. Se puede especificar un valor inicial explícito, o Angular usará implícitamente 'undefined' como valor inicial. 
- Entradas requeridas: Siempre tienen un valor del tipo de entrada dado. No puede haber un valor inicial, y se declaran usando la función 'input.required'. 

![](/images/1.png)
![](/images/2.png)
![](/images/3.png)
![](/images/4.png)

## SIGNAL OUTPUTS
Nueva forma de declarar outputs (salidas) en Angular que proporciona una API más sencilla y segura para emitir valores desde componentes a componentes padre.

Ofrece mejoras en la seguridad de tipos y la limpieza automática de outputs. Los Signal Outputs se pueden declarar mediante las funciones output() y outputFromObservable(), reduciendo la necesidad de código repetitivo y complejidades innecesarias. 

![](/images/5.png)
![](/images/6.png)
![](/images/7.png)
![](/images/8.png)

## SIGNAL QUERIES

Las consultas de señal son una forma de buscar elementos hijos y leer valores de sus inyectores dentro de un componente o directiva. Puedes utilizar las funciones viewChild y viewChildren para consultas de vista, y contentChild y contentChildren para consultas de contenido. 

![](/images/9.png)
![](/images/10.png)
![](/images/11.png)

## MODEL INPUTS

Establecer conexiones de datos bidireccionales entre componentes padre e hijo, lo cual no era posible con las señales de solo lectura previamente disponibles. 

Esto se logra utilizando una sintaxis específica en el código, como se muestra en el ejemplo de un componente de casilla de verificación personalizado. 

![](/images/12.png)

## NG-CONTENT ACTUALIZADO

ng-content es una directiva que se utiliza para insertar contenido dentro de un componente desde fuera de este. Anteriormente, no era posible especificar un contenido por defecto y ahora es posible.

![](/images/13.png)
![](/images/14.png)

## PROPIEDAD EVENTS PARA FORMULARIOS

Las clases FormControI, FormGroup y FormArray de los formularios de Angular ahora exponen una propiedad llamada eventos, que te permite suscribirte a un flujo de eventos para este control de formulario. 

![](/images/15.png)

## REDIRECCIÓN DE RUTAS CON FUNCIONES

La propiedad redirectTo en las rutas ahora puede aceptar una función que devuelve una cadena. Esto proporciona una mayor flexibilidad al redireccionar.

