import Image from 'next/image';

export default function Logo() {
  return (
    <>
      <div>
        <div className='container mx-auto'>
          <div>
            <Image height={100} width={100} src='/image/logo/logo1.png' alt='logo' />
          </div>
        </div>
      </div>
    </>
  )
}