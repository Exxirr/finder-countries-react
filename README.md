# Finder Countries React 🌎

Una aplicación moderna, responsiva y eficiente para buscar y consultar información detallada de países en tiempo real, conectada directamente a la API pública de **Rest Countries**.

Este proyecto fue desarrollado con un enfoque en la arquitectura limpia de React, la modularización de componentes y la optimización del rendimiento en las búsquedas.

## 🚀 Demo
Puedes ver la aplicación en vivo aquí: [Enlace de tu demo en Vercel](https://finder-countries-react.vercel.app/)

## ✨ Funcionalidades Clave

- **Búsqueda Automatizada (Debounce):** La aplicación optimiza las peticiones a la API ejecutando la búsqueda automáticamente un segundo después de que el usuario termina de escribir, evitando sobrecargar el servidor con renders innecesarios.
- **Diseño Responsivo de Alto Impacto:** Interfaz estilizada y completamente adaptable a dispositivos móviles, tablets y pantallas de escritorio utilizando el sistema de rejilla (Grid) de Bootstrap 5.
- **Manejo Exhaustivo de Estados:** Control total sobre los estados de carga (*Loading con Spinners animados*), manejo de errores del servidor (*Alertas de Error*) y renderizado condicional.
- **Formateo de Datos:** Presentación limpia de la información técnica (por ejemplo, conversión de números de población extensos a formato legible con separadores de miles).

## 🛠️ Arquitectura y Tecnologías

El proyecto sigue una estructura limpia separando la lógica de negocio de la interfaz visual:

- **React 18** (Uso de Hooks: `useState`, `useEffect`)
- **Custom Hooks:** Toda la lógica de peticiones asíncronas, debounce y control de estados está centralizada y encapsulada en el hook personalizado `useCountry.js`.
- **Vite:** Entorno de desarrollo de alto rendimiento para el bundling.
- **Bootstrap 5:** Framework CSS utilizado para la maquetación rápida, diseño de tarjetas simétricas y componentes responsivos.
