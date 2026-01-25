# Dependencias a Instalar

## Frontend

### Setup Inicial
```bash
npm create vite@latest
```

### Dependencias Principales
```bash
npm install react-router-dom react-toastify
npm install -D tailwindcss @tailwindcss/vite
```

### Scripts
```bash
npm run dev
```

### Configuración de Tailwind (vite.config.js)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [react(), tailwindcss()],
})
```

### Herramientas Recomendadas
- VSCode Extension: RAFCE Snippets

### Estructura de Carpetas
```
src/
├── pages/          (Vistas principales)
│   ├── Formulario.jsx
│   ├── Informacion.jsx
│   ├── Menu.jsx
│   └── Reporte.jsx
├── components/     (Componentes reutilizables)
│   └── Navbar.jsx
└── context/        (Gestión de estado)
```

### Stack Tecnológico
- **Framework**: React + Vite
- **Estilos**: Tailwind CSS
- **Routing**: React Router DOM
- **Notificaciones**: React Toastify

## Backend

### Setup Inicial
```bash
npm init
npm install cors dotenv express jsonwebtoken mongoose multer nodemon validator cloudinary bcrypt
```

### Estructura de Carpetas
```
├── config/
├── controllers/
├── routes/
├── middleware/
├── models/
└── server.js
```

### Scripts
```bash
npm run server
```

### Características
- Multer para carga de imágenes en Cloudinary
- Rutas protegidas con JWT
- Modelos para usuarios y atracciones turísticas
