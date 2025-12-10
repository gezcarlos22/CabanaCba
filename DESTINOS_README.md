# Sistema de Páginas de Destinos Reutilizable

## Estructura Creada

### 1. Tipos de Datos
- `src/app/types/destinationdata.ts` - Define la estructura de datos para destinos

### 2. Componentes
- `src/app/components/Destination/DestinationPage/index.tsx` - Componente principal reutilizable
- `src/app/components/Destination/DestinationGenerator/index.tsx` - Helper para páginas dinámicas

### 3. Datos
- `src/app/data/destinations.ts` - Datos de ejemplo de destinos

### 4. Páginas de Ejemplo
- `src/app/(site)/destinos/villa-dolores/page.tsx` - Página de ejemplo

## Cómo Usar

### Para crear un nuevo destino:

1. **Agregar datos del destino** en `src/app/data/destinations.ts`:
```typescript
{
  id: 'nuevo-destino',
  name: 'Nombre del Destino',
  description: 'Descripción breve',
  heroImage: '/images/destinations/hero.jpg',
  heroVideo: '/videos/destino.mp4', // Opcional
  gallery: ['/images/1.jpg', '/images/2.jpg'],
  highlights: [
    {
      title: 'Característica',
      description: 'Descripción de la característica',
      icon: '/images/icons/icon.svg' // Opcional
    }
  ],
  activities: [
    {
      name: 'Actividad',
      description: 'Descripción de la actividad',
      image: '/images/activity.jpg',
      duration: '2 horas', // Opcional
      difficulty: 'Fácil' // Opcional: 'Fácil' | 'Moderado' | 'Difícil'
    }
  ],
  location: {
    address: 'Dirección completa'
  },
  bestTimeToVisit: 'Mejor época para visitar',
  tips: ['Consejo 1', 'Consejo 2']
}
```

2. **Crear la página** en `src/app/(site)/destinos/[nombre-destino]/page.tsx`:
```typescript
import DestinationPage from '@/app/components/Destination/DestinationPage'
import { destinationsData } from '@/app/data/destinations'
import { notFound } from 'next/navigation'

export default function NuevoDestinoPage() {
  const destination = destinationsData.find(dest => dest.id === 'nuevo-destino')
  
  if (!destination) {
    notFound()
  }

  return <DestinationPage destination={destination} />
}
```

3. **Agregar las imágenes** en las carpetas correspondientes:
   - `/public/images/destinations/` - Imágenes principales y galería
   - `/public/images/activities/` - Imágenes de actividades
   - `/public/images/icons/` - Iconos (opcional)
   - `/public/videos/` - Videos (opcional)

## Estructura de Secciones

Cada página de destino incluye:

1. **Hero Section** - Imagen/video principal con título y descripción
2. **Highlights** - Características destacadas del destino
3. **Galería** - Colección de imágenes del lugar
4. **Actividades** - Lista de actividades disponibles con detalles
5. **Información** - Ubicación, mejor época para visitar y consejos

## Personalización

- Modifica los estilos en el componente `DestinationPage`
- Agrega nuevos campos al tipo `DestinationData` según necesites
- Personaliza las secciones editando el componente principal

## Rutas Generadas

- `/destinos/villa-dolores` - Ejemplo creado
- Agrega más destinos siguiendo el patrón `/destinos/[id-destino]`