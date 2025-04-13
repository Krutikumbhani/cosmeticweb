import HeaderTop from './headertop';
import HeaderBottom from './hedaerbottom';

export default function Header() {
  return(
    <>
    <div className='bg-black'>
        <div className='container mx-auto'>
          <div>
            <HeaderTop />
          </div>
          <div>
            <HeaderBottom />
          </div>
        </div>
    </div>
    </>
  )
}