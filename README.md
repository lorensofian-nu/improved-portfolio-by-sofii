# Portafolio By Sofii

> Portafolio personal de Loren Sofía Núñez Carvajal - Desarrolladora junior

## 📸 Vista previa

![Portafolio By Sofii](https://img.shields.io/badge/Status-Activo-brightgreen)

Un portafolio web moderno, colorido y lleno de personalidad que muestra mis habilidades, proyectos y experiencia como desarrolladora.

## 🎨 Características

- **Diseño lila y pastel** - Estética única con la esencia By Sofii
- **Tema oscuro/clarro** - Alternancia con un botón dedicado
- **Animaciones fluidas** - Efectos de scroll, hover y transiciones suaves
- **Responsive** - Adaptable a todos los dispositivos
- **Sección "Sobre mí"** - Con efecto de texto que se escribe solo
- **Hard Skills** - Habilidades técnicas con barras de progreso
- **Soft Skills** - Habilidades blandas con chips visuales
- **Lenguajes y tecnologías** - Tarjetas interactivas con iconos SVG
- **Proyectos** - Galería filtrable por categorías
- **Contacto** - Información de contacto con enlaces directos
- **Foto personalizable** - Carga tu foto haciendo clic en el espacio reservado

## 🚀 Tecnologíasadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos, animaciones y diseño responsive
- **JavaScript** - Interactividad y funcionalidad
- **SVG** - Iconos personalizados

## 💡 Funcionalidades especiales

- **Efecto de escritura automática** en la descripción principal
- **Barras de habilidades** que se llenan al hacer scroll
- **Filtro de proyectos** por categorías (Web, Diseño, Bases de datos, Automatización, Java)
- **Confeti secreto** - Haz clic 5 veces rápidos en el logo para activar una lluvia de emojis
- **Chispas al hacer clic** - Efecto visual en cualquier parte de la página
- **Botones magnéticos** - Efecto de atracción al pasar el cursor
- **Tarjetas 3D** - Inclinación al mover el mouse
- **Brillo que sigue al cursor** - Efecto de luz dinámico

## 🎯 Estructura del proyecto

```
portafolio-by-sofii/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
├── README.md           # Este archivo
└── img/
    ├── foto.jpg        # Foto de perfil (opcional)
    └── LEEME.txt        # Instrucciones para la foto
```

## 📥 Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/improved-portfolio-by-sofii.git
   ```

2. Navega al directorio:
   ```bash
   cd improved-portfolio-by-sofii
   ```

3. Abre `index.html` en tu navegador favorito

## ⚙️ Personalización

### Foto de perfil
1. Coloca tu foto en `img/foto.jpg`
2. O haz clic en el círculo de foto en la página y selecciona una imagen

### Información personal
Edita los siguientes elementos en `index.html`:
- **Título de la página** (línea 5)
- **Nombre y descripción** (sección "Sobre mí")
- **Correo electrónico** (sección "Contacto")
- **Enlaces de GitHub y LinkedIn** (sección "Contacto")

### Proyectos
Para agregar un nuevo proyecto en la sección "Proyectos":
```html
<div class="card proj" data-cat="categoria1 categoria2">
  <h3>🎨 Nombre del proyecto</h3>
  <p>Descripción breve del proyecto.</p>
  <span class="chip">Tecnología1</span>
  <span class="chip">Tecnología2</span>
</div>
```

Las categorías disponibles son: `web`, `diseno`, `datos`, `auto`, `java`

### Habilidades
Modifica el array `roles` en `script.js` para cambiar los textos que aparecen en el efecto de escritura:
```javascript
var roles = ['Desarrolladora junior', 'Diseñadora de interfaces', 'Creadora de proyectos lila', 'Estudiante curiosa'];
```

## 🎨 Paleta de colores

| Color | Código | Uso |
|-------|--------|-----|
| Morado principal | `#5b3cc4` | Bordes, textos principales |
| Lila | `#a78bfa` | Acentos, degradados |
| Azul claro | `#8b9cff` | Acentos secundarios |
| Amarillo | `#ffe08a` | Acentos cálidos |
| Fondo A | `#fffbe6` | Fondo claro (modo light) |
| Fondo B | `#fff7d1` | Fondo claro secundario |
| Fondo C | `#fffdf1` | Fondo claro terciario |

## 📝 Notas

- El portafolio está diseñado para mostrar mejor en navegadores modernos (Chrome, Firefox, Edge, Safari)
- Las animaciones respetan la preferencia `prefers-reduced-motion` del sistema
- La foto de perfil se guarda en `localStorage` para persistir entre sesiones

## 👤 Autora

**Loren Sofía Núñez Carvajal**

- Edad: 18 años
- Ubicación: Cúcuta, Norte de Santander, Colombia
- Marca personal: **By Sofii**

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes sugerencias, abre un issue o envía un pull request.

## 📄 Licencia

Este proyecto es de código abierto y puedes usarlo como base para tu propio portafolio.

---

Hecho con 💜 por Sofi · By Sofii
