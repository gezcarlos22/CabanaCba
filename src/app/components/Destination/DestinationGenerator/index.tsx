import { DestinationData } from '@/app/types/destinationdata'
import DestinationPage from '../DestinationPage'

interface DestinationGeneratorProps {
  destinationId: string
  destinations: DestinationData[]
}

const DestinationGenerator = ({ destinationId, destinations }: DestinationGeneratorProps) => {
  const destination = destinations.find(dest => dest.id === destinationId)
  
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Destino no encontrado</h1>
          <p className="text-gray-600">El destino que buscas no existe o ha sido movido.</p>
        </div>
      </div>
    )
  }

  return <DestinationPage destination={destination} />
}

export default DestinationGenerator