'use client'
import { DestinationData } from '@/app/types/destinationdata'
import Hero2 from '@/app/components/Details/Hero2'
import Gallery from '@/app/components/Destination/Components/Gallery'
import Articles from '../../Home/Articles'
import AboutDestinations from '../Components/AboutDestinations'
import Videos from '../Components/Videos'
import Join from '../../Home/Joinus'
import InfoDestinations from '../Components/infoDestinations'

interface DestinationPageProps {
  destination: DestinationData
}

const DestinationPage = ({ destination }: DestinationPageProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero2 data={{
        section: 'hero',
        video: destination.heroVideo || '',
        title: destination.name,
        desc: destination.description
      }} />

      {/* Highlights Section */}
      <AboutDestinations 
        destination={destination}
        sections={destination.aboutSections}
      />

      {/* Gallery Section */}
      <Gallery destination={destination} />

      {/* Activities Section */}
      <Articles 
        activities={destination.activities}
        title="ACTIVIDADES"
        subtitle="Descubre las mejores experiencias"
      />

      {/* Info Section */}
      <InfoDestinations destination={destination}/>

      <Videos 
        videos={destination.videos}
        title="VIDEOS"
        subtitle={`¿Por qué visitar ${destination.name}?`}
      />
      <Join/>
    </div>
  )
}

export default DestinationPage