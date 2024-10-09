# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  
# Nuestra Tienda de Belleza

Este es un proyecto de una tienda en línea de productos de belleza, desarrollado con React. La aplicación sigue el patrón de arquitectura MVC (Modelo-Vista-Controlador) y utiliza Firebase para el almacenamiento de imágenes de los productos.

## Instalación y Ejecución

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Isaac200301/primera-maquetacion-react.git

2. **Navega a la carpeta:**

   ```bash
   cd tu-repositorio

3. **Instala las dependencias:**

   ```bash
   npm install

4. **Instala la dependencia de Firebase:**

   ```bash
   npm install firebase

5. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev

7. **Estructura del Proyecto**

```plaintext
├── public/
├── src/
│   ├── assets/            # Imágenes y otros recursos estáticos
│   ├── components/        # Componentes de la interfaz de usuario
│   │   ├── Aside.jsx      # Barra de navegación lateral
│   │   ├── Content.jsx    # Sección principal de contenido
│   │   ├── Footer.jsx     # Pie de página de la aplicación
│   │   ├── Gallery.jsx    # Galería de productos y combos
│   │   ├── Header.jsx     # Encabezado de la aplicación
│   ├── config/            # Configuración de Firebase
│   │   └── firebase.jsx   # Configuración y exportación del servicio de almacenamiento
│   ├── data/              # Datos de productos y otros datos estáticos
│   ├── routes/            # Definición de rutas de la aplicación
│   ├── styles/            # Archivos CSS para los estilos de la aplicación
│   │   ├── Gallery.css    # Estilos específicos para la galería
│   │   └── index.css      # Estilos globales
│   ├── utils/             # Funciones auxiliares
│   ├── App.jsx            # Componente principal de la aplicación
│   └── main.jsx           # Punto de entrada de la aplicación
├── .gitignore             # Archivos y carpetas que Git ignorará
├── eslint.config.js       # Configuración de ESLint para el proyecto
├── index.html             # Archivo HTML principal
├── package.json           # Dependencias y scripts del proyecto
└── README.md              # Este archivo


