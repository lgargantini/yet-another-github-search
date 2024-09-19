# GitHub User Explorer

![React Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js Badge](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![MUI Badge](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

GitHub User Explorer es una aplicación web desarrollada con NextJS que permite a los usuarios buscar y explorar perfiles de GitHub de manera eficiente. Con esta herramienta, puedes buscar usuarios por nombre, ver una lista de usuarios con sus avatares, marcar usuarios como favoritos y acceder a detalles completos de cada perfil, incluyendo su biografía y repositorios. Todo esto se logra utilizando la API de GitHub Users, proporcionando una experiencia de usuario fluida y rápida.

## Estilo

Se usa CSS Modules y [Material-UI](https://mui.com/) para los componentes.

## Librerías Utilizadas

- [**React**](https://reactjs.org/): Para la construcción de la interfaz de usuario.
- [**Next.js**](https://nextjs.org/): Para el enrutamiento y la estructura del proyecto.
- [**Material-UI (MUI)**](https://mui.com/): Para componentes de interfaz de usuario como Avatar, Badge, List, Divider, Skeleton, Card, Paper, ImageList y Masonry.
- [**Emotion**](https://emotion.sh/docs/introduction): Para el manejo de estilos en componentes.
- [**Fontsource**](https://fontsource.org/): Para la fuente Roboto.

## API

Se integra la API de Github para hacer las busquedas de usuarios y los detalles

- [Lista de usuarios](https://api.github.com/users)
- [Buscar usuarios](https://api.github.com/search/users?q={term})
- [Detalles de usuario](https://api.github.com/users/{username})

### UI a usar

- [Avatar](https://mui.com/material-ui/react-avatar/)
- [Badge](https://mui.com/material-ui/react-badge/)
- [Lists](https://mui.com/material-ui/react-list/)
- [Divider](https://mui.com/material-ui/react-divider/)
- [Skeleton](https://mui.com/material-ui/react-skeleton/)
- [Card](https://mui.com/material-ui/react-card/)
- [Paper (shadow & buttons)](https://mui.com/material-ui/react-paper/)
- [ImageList](https://mui.com/material-ui/react-image-list/)
- [Masonry](https://mui.com/material-ui/react-masonry/)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd github-user-explorer
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

1. Inicia la aplicación:
   ```bash
   npm run dev
   ```
2. Abre tu navegador y navega a `http://localhost:3000`.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
