import DestinationPage from '@/app/components/Destination/DestinationPage'
import Insta from '@/app/components/Home/Insta'
import { destinationsData } from '@/app/data/destinations'
import { notFound } from 'next/navigation'

export default function VillaLasRosasPage() {
  const destination = destinationsData.find(dest => dest.id === 'villa-las-rosas')
  
  if (!destination) {
    notFound()
  }

  return (<>
  <DestinationPage destination={destination} />
  <Insta/>
  </>)
}