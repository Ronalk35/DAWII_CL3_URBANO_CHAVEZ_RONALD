# DAWIIT3URBANOCHAVEZRONALD

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Angular Consumo de API

## Conclusión
Esta aplicación demuestra cómo consumir datos de una API y mostrarlos en una interfaz de usuario moderna y responsive. Con el uso de Angular Material, se crean interfaces atractivas y dinámicas que mejoran la interacción del usuario.

## Tech Stack
**Client:** Angular, Angular Material

**Server:** JSONPlaceholder (API externa de prueba)

**API:** JSONPlaceholder - API gratuita que ofrece datos ficticios para pruebas y prototipos.
https://jsonplaceholder.typicode.com/todos

## Componentes Principales
AppComponent: Componente raíz de la aplicación. Contiene el menú principal y gestiona la navegación entre los componentes de "Planetas" y "Tareas Completadas".
TodosComponent: Muestra una lista de tareas completadas que cumplen ciertos criterios, usando MatCardModule y MatListModule de Angular Material para mejorar la presentación.
LocationsComponent: (Debe crearse y configurarse para mostrar información sobre ubicaciones o planetas).
Configuración del Proyecto
MaterialModule
Este módulo agrupa todos los módulos de Angular Material que la aplicación necesita, facilitando la gestión de importaciones. Incluye módulos como MatCardModule, MatToolbarModule, MatButtonModule, etc., que se exportan para ser usados en otros componentes.

## App Configuración de Rutas
El archivo routes.ts configura las rutas de la aplicación, permitiendo la navegación entre las páginas de "Locations" y "Todos".

## App Configuración de Proveedores
El archivo appConfig proporciona configuraciones y servicios adicionales, como el router, el cliente HTTP y las animaciones.

## Screenshots

![Consumo de API](src/img/Api.png)
