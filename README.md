# WLA Landing - Estado Actual del Proyecto

## Objetivo

Recrear y modernizar la landing de WoW Latinoamérica utilizando:

* React
* Vite
* Tailwind CSS
* React Router
* Lucide React
* Font Awesome

Inspiración principal:

https://www.wowlatinoamerica.com/landing/

---

# Tecnologías

## Frontend

* React 19
* Vite
* TailwindCSS
* React Router DOM
* Lucide React
* Font Awesome

## Deploy

* GitHub
* Netlify

Deploy automático mediante:

```bash
git push origin main
```

---

# Estructura del proyecto

```txt
src/
│
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── HeroStat.jsx
│   ├── GlowButton.jsx
│   ├── FeatureCards.jsx
│   ├── InfoStrip.jsx
│   ├── Dashboard.jsx
│   ├── BottomGrid.jsx
│   └── Footer.jsx
│
├── App.jsx
├── main.jsx
│
public/
│
├── assets/
│   ├── bg.mp4
│   ├── logo_sin_fondo.png
│   ├── logo_footer.png
│   ├── new_logo.png
│   └── wotlk-title-transparent_3.png
│
└── _redirects
```

---

# Funcionalidades implementadas

## Layout

* Video de fondo en loop
* Overlay oscuro con gradientes
* Diseño responsive
* Inspirado en landing gaming moderna

---

## Header

### Desktop

* Logo WLA
* Menú centrado
* Indicador activo con degradado blanco → azul
* Botón Discord
* Botón Descargar Launcher

### Mobile

* Menú hamburguesa
* Navegación responsive
* Cierre automático al navegar

---

## Hero

### Título

Imagen:

```txt
wotlk-title-transparent_3.png
```

### Subtítulo

```txt
x3 · Soporte real · Instalación guiada · Hermandades activas
```

### CTA

* Descargar Launcher
* Cómo empezar

### Stats

* Online
* Uptime
* ETA Descarga
* 17 años de legado

---

## GlowButton

Componente reutilizable.

Ubicación:

```txt
src/components/GlowButton.jsx
```

Características:

* Gradiente azul
* Glow exterior
* Hover animado
* Reflejo interno
* Reutilizable en Header y Hero

Props:

```jsx
<GlowButton size="sm">
  Descargar Launcher
</GlowButton>

<GlowButton size="md">
  Descargar Launcher
</GlowButton>
```

---

## Footer

Inspirado en la landing oficial.

Contiene:

* Logo
* Descripción
* Enlaces
* Redes sociales
* Copyright

Efectos:

* Hover azul
* Glow en iconos
* Fondo translúcido
* Backdrop blur

---

# React Router

Configurado.

Rutas actuales:

```txt
/
/como-empezar
/estado
```

Pendientes:

```txt
/servidor
/comunidad
/soporte
/cuenta
```

---

# Netlify

Archivo requerido:

```txt
public/_redirects
```

Contenido:

```txt
/* /index.html 200
```

Permite funcionamiento correcto de React Router.

---

# Próximos pasos

## Prioridad alta

### Header

* Dropdowns reales
* Más parecido a la landing original

### Hero

* Ajustar spacing
* Ajustar CTA
* Agregar animaciones

### Cards

Completar:

* Descargar
* Estado servidor
* Cómo empezar
* Discord

---

## Prioridad media

### Dashboard

Implementar:

* Estado servidor
* Noticias
* Guild Finder
* Eventos

### Footer

Ajustes finos de espaciado

---

## Prioridad futura

### Backend

* API estado servidor
* API jugadores online
* API uptime

### Cuenta

* Login
* Registro
* Recuperar contraseña

### Launcher

* Descarga real
* Versionado
* Parches

---

# Convención visual

Inspiración:

* Blizzard
* WoW Latinoamérica
* Battle.net

Paleta:

```txt
Azul principal:
#2f7dff

Azul oscuro:
#1857d8

Texto:
#ffffff

Texto secundario:
#94a3b8

Fondo:
#061321
```

---

# Estado actual

Proyecto funcional.

✔ React configurado
✔ Tailwind configurado
✔ Router configurado
✔ Responsive funcionando
✔ Deploy automático en Netlify
✔ Hero funcional
✔ Header funcional
✔ Footer funcional
✔ GlowButton reutilizable

# Deploy

https://newwla.netlify.app/

# Estado general estimado:

80% Landing inicial completada.