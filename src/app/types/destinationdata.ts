export type Activity = {
  name: string
  description: string
  image: string
  duration?: string
  difficulty?: 'Fácil' | 'Moderado' | 'Difícil'
  detailedDescription?: string
  location?: string
}

export type AboutSection = {
  title: string
  content: string[]
  image: string
}

export type Video = {
  iframe: string
  title: string
  description?: string
}

export type DestinationData = {
  id: string
  name: string
  description: string
  heroImage: string
  heroVideo?: string
  gallery: {
    src: string
    alt: string
  }[]
  highlights: {
    title: string
    description: string
    icon?: string
  }[]
  activities: Activity[]
  aboutSections: AboutSection[]
  videos: Video[]
  location: {
    address: string
    coordinates?: {
      lat: number
      lng: number
    }
  }
  bestTimeToVisit: string
  tips: string[]
}