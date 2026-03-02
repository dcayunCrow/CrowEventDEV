# 🦅 Crow

Mobile First Application built with Next.js 16, Tailwind CSS, and SASS.

## Stack

- **Next.js 16** - React Framework con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS utility-first
- **SASS** - Preprocesador CSS con variables y mixins

## Mobile First

Este proyecto está diseñado con enfoque **mobile-first**:

- Breakpoints configurados para escalar de mobile a desktop
- Viewport optimizado para dispositivos móviles
- Safe areas para notch y barras de navegación
- Touch interactions optimizadas
- Dynamic viewport height (dvh) para browsers móviles

### Breakpoints (SASS)

```scss
$breakpoints: (
  "sm": 640px,   // Tablets pequeñas
  "md": 768px,   // Tablets
  "lg": 1024px,  // Desktop pequeño
  "xl": 1280px,  // Desktop
  "2xl": 1536px  // Desktop grande
);

// Uso con mixin
@include respond-to("md") {
  // Estilos para tablet y superior
}
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar producción
npm start
```

## Estructura

```
crow/
├── src/
│   └── app/
│       ├── globals.scss    # Estilos globales + SASS mixins
│       ├── layout.tsx      # Layout principal
│       └── page.tsx        # Página inicial
├── public/                 # Assets estáticos
└── package.json
```

## Roadmap

- [x] Setup inicial mobile-first
- [ ] MVP Mobile
- [ ] Versión Desktop

---

*Crow - Diseñado primero para mobile* 🦅
