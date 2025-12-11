import DestinationPage from '@/app/components/Destination/DestinationPage'
import Insta from '@/app/components/Home/Insta'
import { destinationsData } from '@/app/data/destinations'
import { notFound } from 'next/navigation'

export default function MinaClaveroPage() {
  const destination = destinationsData.find(dest => dest.id === 'mina-clavero')
  
  if (!destination) {
    notFound()
  }

  return (<>
  <DestinationPage destination={destination} />
  <Insta/>
  </>)
}