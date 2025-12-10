'use client'
import { DestinationData } from '@/app/types/destinationdata'
import Hero2 from '@/app/components/Details/Hero2'
import Gallery from '@/app/components/Destination/Components/Gallery'
import Articles from '../../Home/Articles'
import AboutDestinations from '../Components/AboutDestinations'
import Videos from '../Components/Videos'
import Join from '../../Home/Joinus'

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
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-4xl font-bold mb-6">Ubicación</h3>
              <p className="text-gray-600 mb-8 text-lg">{destination.location.address}</p>
              
              <h3 className="text-2xl font-bold mb-4">Mejor época para visitar</h3>
              <p className="text-gray-600 mb-8 text-lg">{destination.bestTimeToVisit}</p>

              <h3 className="text-2xl font-bold mb-4">Consejos útiles</h3>
              <ul className="space-y-3">
                {destination.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 text-lg">•</span>
                    <span className="text-gray-600 text-lg">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>  
             
            <div className="flex justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27083.310648525836!2d-65.18782425!3d-31.9496681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942cd36012ebb0e1%3A0x3a4d4e674f9e51c4!2sVilla%20Dolores%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1765382945048!5m2!1ses-419!2sar"
                width="500"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Videos 
        videos={destination.videos}
        title="VIDEOS"
        subtitle="Descubre Villa Dolores"
      />
      <Join/>
    </div>
  )
}

export default DestinationPage