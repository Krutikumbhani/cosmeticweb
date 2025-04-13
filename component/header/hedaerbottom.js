import Image from 'next/image';
import Logo from './logo';
import NavBar from './navbar';
import NavBarIcon from './navbaricon';

export default function HeaderBottom() {
  return(
     <>
      <div className='px-4'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'> 
            <Logo />
            <div>
              <NavBar />
            </div>
          </div>
          <div>
            <NavBarIcon />
          </div>
          </div>
        </div>
      </div>
     </>
  )
}