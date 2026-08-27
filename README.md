# 💼 Portfolio — Matías Ortega | Data Analytics

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-35C7B0)](https://matiasortega1.github.io/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](#)

Sitio personal de portfolio, publicado con **GitHub Pages** en [matiasortega1.github.io](https://matiasortega1.github.io/). Reúne mi perfil profesional, experiencia laboral, stack técnico y los proyectos de análisis de datos de este perfil de GitHub, con acceso directo a mi CV en PDF.

[![Preview](https://raw.githubusercontent.com/matiasortega1/matiasortega1.github.io/main/assets/images/foto-perfil.png)](https://matiasortega1.github.io/)

---

## 📌 Tabla de Contenidos

1. [Descripción General](#-descripción-general)
2. [Stack Técnico](#️-stack-técnico)
3. [Estructura del Repositorio](#-estructura-del-repositorio)
4. [Contenido de la Página](#-contenido-de-la-página)
5. [Cómo Correrlo en Local](#-cómo-correrlo-en-local)
6. [Despliegue (GitHub Pages)](#-despliegue-github-pages)
7. [Actualizar el Sitio](#-actualizar-el-sitio)
8. [Contacto](#️-contacto)

---

## 📝 Descripción General

Este repositorio contiene el código fuente de mi portfolio personal como **Data Analyst / Business Analyst**, con foco en Supply Chain Analytics. Es un sitio estático de una sola página (*single-page*), sin frameworks ni dependencias de build: HTML, CSS y JavaScript vanilla en un único archivo, pensado para cargar rápido y ser fácil de mantener.

El objetivo del sitio es doble:

- Presentar mi **perfil profesional** y trayectoria de +10 años en Supply Chain / SAP en transición hacia Data Analytics.
- Mostrar mis **proyectos de análisis de datos** ([`superstore-sales-analytics`](https://github.com/matiasortega1/superstore-sales-analytics) y [`Ecommerce-Analytics-Project`](https://github.com/matiasortega1/Ecommerce-Analytics-Project)) con sus métricas clave y capturas de los dashboards en Power BI.

## 🛠️ Stack Técnico

| Herramienta | Uso |
|---|---|
| **HTML5** | Estructura semántica de la página (single-file) |
| **CSS3** | Diseño (grid, variables CSS, animaciones), sin frameworks |
| **JavaScript (vanilla)** | Scroll-reveal con `IntersectionObserver` y animación de conteo en los KPIs |
| **Google Fonts** | Space Grotesk (títulos), Inter (texto), JetBrains Mono (datos) |
| **GitHub Pages** | Hosting y despliegue continuo desde la rama `main` |

## 📂 Estructura del Repositorio

```
matiasortega1.github.io/
│
├── index.html                       # Página completa (HTML + CSS + JS)
│
├── assets/
│   ├── images/
│   │   └── foto-perfil.png          # Foto de perfil usada en el hero
│   └── docs/
│       └── Matias-Ortega-CV.pdf     # CV descargable desde el botón "Descargar CV"
│
└── README.md                        # Este archivo
```

## 📄 Contenido de la Página

| Sección | Descripción |
|---|---|
| **Perfil** | Extracto profesional y datos clave (rol, ubicación, experiencia, idiomas) |
| **Experiencia** | Trayectoria en AMPM Global SRL y H.B. Fuller Argentina, con logros cuantificados |
| **Stack técnico** | Herramientas agrupadas en Modelado & BI / Datos & Análisis / Negocio & Herramientas |
| **Proyectos** | Casos de estudio de `superstore-sales-analytics` y `Ecommerce-Analytics-Project` |
| **Contacto** | Email, teléfono, botón de descarga de CV, LinkedIn y GitHub |

## 🚀 Cómo Correrlo en Local

No requiere instalación ni build. Alcanza con abrir el archivo directamente:

```bash
git clone https://github.com/matiasortega1/matiasortega1.github.io.git
cd matiasortega1.github.io
```

Luego abrí `index.html` en el navegador (doble clic, o clic derecho → "Abrir con"). Opcionalmente, para servirlo en un servidor local:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## 🌐 Despliegue (GitHub Pages)

El sitio se publica automáticamente desde la rama `main` de este repositorio vía **GitHub Pages** (Settings → Pages → Deploy from a branch → `main` / `root`). Al estar el repositorio nombrado `matiasortega1.github.io`, GitHub lo sirve directamente en la raíz del dominio: **https://matiasortega1.github.io/**

## 🔄 Actualizar el Sitio

Cualquier cambio (texto, foto, CV) se sube con un commit normal a `main`:

```bash
git add .
git commit -m "Actualizo CV y sección de experiencia"
git push
```

GitHub Pages redepliega automáticamente en 1-3 minutos.

## ✉️ Contacto

- **Email:** matiasdanielortega1@gmail.com
- **Teléfono:** +54 11 5793-9954
- **LinkedIn:** [in/matias-daniel-ortega](https://www.linkedin.com/in/matias-daniel-ortega/)
- **GitHub:** [@matiasortega1](https://github.com/matiasortega1)
