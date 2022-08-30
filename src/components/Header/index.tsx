import { FiShoppingCart } from 'react-icons/fi';
import { Logo } from './Logo';

export function Header () {

  return (
    <nav className="max-w-[1120px] mx-auto fixed inset-0 z-50 px-12 w-[100%] h-[5rem] bg-gray-800 shadow-lg lg:bg-transparent lg:shadow-none lg:absolute">
      <div className="text-center pt-4 flex justify-between items-center w-[100%] mx-auto relative ">
        <span className='lg:hidden'></span>
        <span>
          <Logo />
        </span>
        <ul className='flex gap-8 items-center'>
          <a className='hidden lg:block transition-colors hover:text-yellow-500 cursor-pointer'>
            <li>All</li>
          </a>
          <a className='hidden lg:block transition-colors hover:text-yellow-500 cursor-pointer'>
            <li>Brands</li>
          </a>
          <a className='hidden lg:block transition-colors hover:text-yellow-500 cursor-pointer'>
            <li>Contact</li>
          </a>
          <a className='hidden lg:block transition-colors hover:text-yellow-500 cursor-pointer'>
            <li>Favorites</li>
          </a>
          <li>
            <FiShoppingCart size={20}/>
          </li>
        </ul>
      </div>
    </nav>
  );
}