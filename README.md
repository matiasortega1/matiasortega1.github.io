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

Este repositorio contiene el código fuente de mi portfolio personal como **Data Analyst Jr.** Es un sitio estático de una sola página (*single-page*), sin frameworks ni dependencias de build: estructurado bajo buenas prácticas de modularización (HTML, CSS y JS en archivos desacoplados), diseñado para ser ultra liviano, accesible y fácil de mantener.

El objetivo del sitio es doble:

- Presentar mi **perfil profesional** de Data Analyst Jr., respaldado por un background de más de 10 años en administración, gestión y Supply Chain, destacando la capacidad de traducción de datos de negocio a decisiones analíticas.
- Mostrar mis **proyectos de análisis de datos** ([`superstore-sales-analytics`](https://github.com/matiasortega1/superstore-sales-analytics) y [`Ecommerce-Analytics-Project`](https://github.com/matiasortega1/Ecommerce-Analytics-Project)) con sus métricas clave, capturas de los dashboards y enlaces a sus respectivos repositorios.

---

## 🛠️ Stack Técnico

| Herramienta | Uso |
|---|---|
| **HTML5** | Estructura semántica completa (etiquetas semánticas, `<dl>` para KPIs y mejoras de accesibilidad ARIA). |
| **CSS3** | Diseño responsive (Flexbox, CSS Grid, variables CSS, transiciones sutiles de hover y optimización móvil), desacoplado en `style.css`. |
| **JavaScript (vanilla)** | Animación fluida de contadores de KPIs y control del menú colapsable responsive, desacoplado en `main.js`. |
| **Google Fonts** | `Sora` (títulos y logos) e `Inter` (cuerpo de texto y datos). |
| **GitHub Pages** | Servidor de hosting y despliegue continuo (CI/CD) automático desde la rama `main`. |

---

## 📂 Estructura del Repositorio

```
matiasortega1.github.io/
│
├── index.html                       # Estructura semántica principal (HTML5)
├── favicon.svg                      # Favicon vectorizado (SVG)
├── .gitignore                       # Filtro de archivos innecesarios para el repositorio
├── README.md                        # Este archivo
│
└── assets/
    ├── css/
    │   └── style.css                # Estilos globales, variables de diseño y responsive
    ├── js/
    │   └── main.js                  # Animaciones de KPIs y comportamiento interactivo
    ├── docs/
    │   └── Matias-Ortega-CV.pdf     # CV descargable
    └── images/
        ├── foto-perfil.png          # Foto de perfil principal
        └── projects/
            ├── superstore-dashboard.png  # Previsualización local del dashboard comercial
            └── ecommerce-dashboard.png   # Previsualización local del dashboard de e-commerce
```

---

## 📄 Contenido de la Página

| Sección | Descripción |
|---|---|
| **Perfil** | Extracto profesional y datos clave de negocio (rol, ubicación, experiencia, idiomas y stack BI). |
| **Experiencia** | Trayectoria profesional en AMPM Global SRL y H.B. Fuller Argentina, destacando métricas de impacto y automatizaciones logradas. |
| **Stack técnico** | Herramientas agrupadas por especialidad (Modelado & BI, Datos & Análisis, Negocio & Herramientas). |
| **Proyectos** | Fichas técnicas de los proyectos principales con métricas reales, fallbacks sin JavaScript e imágenes locales optimizadas. |
| **Contacto** | Formas de contacto directas (Email, teléfono, descarga de CV, LinkedIn y GitHub). |

---

## 🚀 Cómo Correrlo en Local

El proyecto está listo para ejecutarse sin necesidad de instalar dependencias de Node.js o procesos de compilación. Simplemente clona e inicia:

```bash
git clone https://github.com/matiasortega1/matiasortega1.github.io.git
cd matiasortega1.github.io
```

Luego puedes abrir `index.html` directamente en tu navegador (doble clic) o iniciarlo con un servidor local básico:

```bash
python -m http.server 8000
# Abrir en: http://localhost:8000
```

---

## 🌐 Despliegue (GitHub Pages)

El despliegue está configurado para ejecutarse automáticamente en cada actualización de la rama `main` (Settings → Pages → Source: Deploy from a branch). 

Dado que el repositorio lleva el nombre exacto de la cuenta de usuario (`matiasortega1.github.io`), GitHub lo sirve directamente en la raíz de su dominio: **[https://matiasortega1.github.io/](https://matiasortega1.github.io/)**

---

## 🔄 Sincronización y Actualizaciones

Cualquier edición o mejora en los archivos del portafolio se sube al repositorio con comandos de Git estándar:

```bash
git add .
git commit -m "docs: actualiza secciones del portafolio"
git push origin main
```

En aproximadamente 1 o 2 minutos, GitHub Pages completará la compilación del sitio web actualizando la versión online automáticamente.

---

## ✉️ Contacto

- **Email:** matiasdanielortega1@gmail.com
- **Teléfono:** +54 11 5793-9954
- **LinkedIn:** [in/matias-daniel-ortega](https://www.linkedin.com/in/matias-daniel-ortega/)
- **GitHub:** [@matiasortega1](https://github.com/matiasortega1)
