# 📱 Aplicación Ionic con Autenticación y Perfil Personalizado

![Logo de la Aplicación](assets/images/logo.png)

Aplicación móvil desarrollada con **Ionic 7** y **Angular standalone** que implementa autenticación por token, navegación híbrida, animaciones personalizadas y páginas estilizadas como login, home y perfil.

## 🚀 Características principales

- 🔐 Autenticación basada en token JWT simulado  
- 🔄 Navegación híbrida (Angular Router + NavController)  
- 🧭 Lazy-loading en rutas para rendimiento optimizado  
- 💫 Animaciones entre transiciones de páginas (fade, slide)  
- 🛡️ Protección de rutas mediante AuthGuard  
- 🧪 Pruebas unitarias del guard de autenticación  
- 🎨 Estilo personalizado en login, perfil y página principal  
- 👤 Página de perfil con imagen, nombre y datos de contacto  

## 🧩 Estructura del Proyecto

```
src/
├── app/
│   ├── auth/
│   │   ├── login/
│   │   ├── register/
│   │   └── auth.guard.ts
│   ├── tabs/
│   │   ├── home/
│   │   ├── profile/
│   │   └── settings/
│   └── shared/
│       ├── components/
│       └── services/
├── assets/
│   └── images/
│       └── logo.png
│       └── perfil.jpeg
└── environments/
```

## 🔐 Sistema de Autenticación

### AuthGuard Implementation

El guard verifica si el token está en `localStorage` antes de permitir el acceso:

```ts
canActivate(): boolean {
  const token = localStorage.getItem('token');
  if (!token) {
    this.navCtrl.navigateRoot('/auth');
    return false;
  }
  return true;
}
```

### Flujo de Login

1. El usuario inicia sesión  
2. Se guarda un token simulado:
   ```ts
   login() {
     localStorage.setItem('token', 'fake-jwt-token');
     this.navCtrl.navigateRoot('/tabs');
   }
   ```
3. Las rutas protegidas usan `AuthGuard`

## 🖼️ Pantallas Personalizadas

### Login Page

- Estilo visual amigable  
- Animación `fade` al entrar  
- Valida email y contraseña  

### Home Page

- Mensaje de bienvenida personalizado  
- Tarjetas informativas  
- Botones de acción para perfil y logout  

### Perfil Page

- Foto de perfil (`assets/perfil.jpeg`)  
- Nombre y título del usuario  
- Email para contacto  
- Animación `fade` al cargar  
- Diseño limpio y responsive  

## 💫 Animaciones

Las transiciones entre páginas incluyen animaciones como `fade`, implementadas usando Angular `@animations`:

```ts
animations: [
  trigger('fade', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('300ms ease-in', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      animate('300ms ease-out', style({ opacity: 0 }))
    ])
  ])
]
```

## 🧪 Pruebas Unitarias

```ts
describe('AuthGuard', () => {
  it('debe permitir acceso si hay token', () => {
    localStorage.setItem('token', 'token-test');
    expect(guard.canActivate()).toBeTrue();
  });

  it('debe redirigir si no hay token', () => {
    localStorage.removeItem('token');
    expect(guard.canActivate()).toBeFalse();
    expect(navCtrlSpy.navigateRoot).toHaveBeenCalledWith('/auth');
  });
});
```

## 🧰 Cómo Usar

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar en desarrollo:
   ```bash
   ionic serve
   ```

3. Generar build de producción:
   ```bash
   ionic build --prod
   ```

4. Ejecutar pruebas:
   ```bash
   npm test
   ```

## ⚙️ Tecnologías Utilizadas

- Ionic 7  
- Angular 16+ (standalone components)  
- TypeScript 5+  

## 📌 Decisiones Técnicas

- **Componentes standalone**: Simplifican el manejo de módulos y mejoran la carga perezosa  
- **Navegación combinada**: Angular Router para lógica y `NavController` para UX móvil  
- **Autenticación local**: Simulación con `localStorage` para pruebas  
- **Transiciones fluidas**: Mejoran la experiencia del usuario  
- **Diseño personalizado**: Páginas estilizadas con íconos, colores, imagen de perfil y animaciones  

---
