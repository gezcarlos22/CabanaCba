import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='text-3xl font-semibold'>
      <Image
      src='/images/logo_cabaña2.png'
              alt='logo cabaña'
              width={50}
              height={50}></Image>
    </Link>
  )
}

export default Logo
