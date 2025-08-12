# 🌐 LinkPlaza Frontend

<div align="center">
  <img src="./public/logo.png" alt="LinkPlaza Logo" width="120" height="120">
  
  **Una plataforma moderna para centralizar todas tus redes sociales en un solo lugar**
  
  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

---

## 📋 Descripción

LinkPlaza es una aplicación web moderna que permite a los usuarios **centralizar todas sus redes sociales y enlaces importantes en una sola página personalizable**. Similar a Linktree, pero con un diseño elegante y funcionalidades avanzadas como drag & drop, perfiles personalizados y búsqueda de usuarios.

### ✨ Características Principales

- 🎨 **Interfaz elegante** con diseño responsive
- 🔐 **Autenticación segura** de usuarios
- 📱 **Gestión de redes sociales** con activación/desactivación
- 🎯 **Drag & Drop** para reordenar enlaces
- 🖼️ **Subida de imágenes** de perfil
- 🔍 **Búsqueda de usuarios** en tiempo real
- 📊 **Estado en tiempo real** con React Query
- 🎭 **Perfiles públicos** personalizables

---

## 🛠️ Tecnologías Utilizadas

### Core
- **React 18.2.0** - Biblioteca de interfaces de usuario
- **TypeScript 5.2.2** - Superset de JavaScript con tipado estático
- **Vite 5.0.8** - Herramienta de construcción ultrarrápida

### Styling & UI
- **Tailwind CSS 3.4.17** - Framework CSS utilitario
- **Headless UI 2.2.4** - Componentes accesibles sin estilo
- **Heroicons 2.2.0** - Iconos SVG hermosos

### Estado & Datos
- **React Query 5.80.7** - Gestión de estado del servidor
- **Axios 1.9.0** - Cliente HTTP para API calls
- **React Hook Form 7.57.0** - Formularios performantes

### Funcionalidades Avanzadas
- **DND Kit** - Drag and drop moderno para React
- **React Router DOM 7.6.2** - Enrutamiento declarativo
- **Sonner 2.0.5** - Notificaciones toast elegantes
- **Swiper 11.2.10** - Carruseles y sliders táctiles

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Prefijos CSS automáticos

---

## 🚀 Instalación y Configuración

### Prerrequisitos

Asegúrate de tener instalado:
- **Node.js** (versión 18 o superior)
- **npm** o **yarn**

### 1. Clonar el Repositorio

```bash
git clone https://github.com/alu0101540153/LinkPlaza_FrontendDeploy.git
cd LinkPlaza_FrontendDeploy
```

### 2. Instalar Dependencias

```bash
npm install
# o si prefieres yarn
yarn install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:4000/api
VITE_FRONTEND_URL=http://localhost:5173
```

### 4. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la construcción de producción |
| `npm run lint` | Ejecuta el linter para verificar el código |

---

## 🎨 Diseño y UX

### Paleta de Colores
- **Principal**: `#BCA88D` - Dorado elegante
- **Secundario**: `#3E3F29` - Verde oscuro
- **Accent**: `#7D8D86` - Verde gris
- **Background**: `#F1F0E4` - Crema suave

### Características de Diseño
- 📱 **Responsive Design** - Funciona en todos los dispositivos
- 🎭 **Dark/Light Mode** - Soporte para temas
- ⚡ **Animaciones suaves** - Transiciones fluidas
- 🎯 **Accesibilidad** - Cumple estándares WCAG

---

## 🔧 Desarrollo

### Comandos Útiles

```bash
# Instalar nueva dependencia
npm install package-name

# Actualizar dependencias
npm update

# Verificar vulnerabilidades
npm audit

# Limpiar cache
npm cache clean --force
```

### Convenciones de Código
- Usar **TypeScript** para todo el código
- Seguir las reglas de **ESLint**
- Componentes en **PascalCase**
- Hooks personalizados con prefijo **use**

---

## 🌐 Despliegue

### Build para Producción

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

### Variables de Entorno para Producción

```env
VITE_API_URL=https://tu-backend.com/api
VITE_FRONTEND_URL=https://tu-dominio.com
```

---

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

**alu0101540153**
- GitHub: [@alu0101540153](https://github.com/alu0101540153)

---

<div align="center">
  <p>⭐ ¡Dale una estrella si te gusta el proyecto! ⭐</p>
  
  **Hecho con ❤️ y mucho ☕**
</div>
