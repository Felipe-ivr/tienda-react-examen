Tienda React – Examen Programación de Componentes (IPLACEX)

Este repositorio contiene el desarrollo completo del **Examen Final de Programación de Componentes**, donde se construyó una aplicación React completamente funcional, integrada con Firebase, validaciones, subida de imágenes, autenticación y finalmente generación de un APK mediante Cordova.

El proyecto combina buenas prácticas de desarrollo, un diseño claro y el uso de servicios modernos en la nube.

---

## 📌 Contenidos del Examen

### ✔️ Ejercicio 1 – Componentes, Estado, Props y Carrito
- Creación del proyecto con `create-react-app`.
- Componentes padre/hijo.
- Uso de props para comunicación descendente.
- Uso de callbacks para comunicación ascendente.
- Manejo de estado del carrito mediante `setState`.
- Render dinámico de productos.
- Bootstrap aplicado para estructura visual.

---

### ✔️ Ejercicio 2 – Formulario con Validaciones + Firebase Firestore
- Implementación de un formulario con **simple-react-validator**.
- Validaciones en tiempo real.
- Envío de datos a **Firebase Firestore**.
- Manejo de estado y retroalimentación al usuario.

---

### ✔️ Ejercicio 3 – Firebase Auth, Firebase Storage, Build y APK
- Módulo completo de autenticación:
  - Registro
  - Inicio de sesión
  - Cierre de sesión
- Subida de imágenes a **Firebase Storage** con vista previa.
- Generación de build web con:
  ```bash
  npm run build
Integración en proyecto Cordova.

Creación del APK:

bash
Copiar código
cordova build android
 APK generado exitosamente en:

swift
platforms/android/app/build/outputs/apk/debug/app-debug.apk
 Tecnologías Utilizadas
React 18

JavaScript ES6

React Scripts

Bootstrap 5

Firebase (Firestore, Auth, Storage)

Simple-react-validator

Cordova

Android SDK

Java 17

 Estructura del Proyecto
css
src/
 ├─ components/
 │    ├─ ProductList.jsx
 │    ├─ ProductItem.jsx
 │    ├─ Cart.jsx
 │    ├─ Formulario.jsx
 │    ├─ AuthForm.jsx
 │    └─ UploadImage.jsx
 ├─ data/
 │    └─ products.js
 ├─ firebase.js
 ├─ App.js
 └─ index.js
 Instalación del Proyecto
1. Clonar repositorio
git clone https://github.com/Felipe-ivr/tienda-react-examen
cd tienda-react-examen

2. Instalar dependencias
npm install

3. Ejecutar en desarrollo
npm start

4. Compilar para producción
npm run build
 Generación del APK

1. Crear proyecto Cordova
cordova create mobile
cordova platform add Android

2. Copiar build de React a 
www/
Copiar build/ dentro de mobile/www/.

3. Compilar APK
cordova build android
APK final:

swift
mobile/platforms/android/app/build/outputs/apk/debug/app-debug.apk

Autor:
Felipe Isaías Vergara Rojas
Analista Programador – IPLACEX
2024–2025q


