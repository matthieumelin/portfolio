import routes from '@/utils/routes'
import { useState, type FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import Button from '@/components/Button'

const Navbar: FC = () => {
    const [open, setIsOpen] = useState<boolean>(false);

    const navLinkClassNames = (isActive: boolean) => `${isActive ? "text-white" : "text-neutral-400 hover:text-white duration-200"}`;

    const handleToggleNavbar = () => setIsOpen(prev => !prev);

    return (
        <nav className='border-b border-neutral-800 lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-50 bg-black-custom'>
            <div className='max-w-360 mx-auto lg:flex lg:items-center lg:justify-between p-5'>
                <div className='flex items-center justify-between'>
                    <Link to={routes.Home}>
                        <h1 className='text-white text-xl font-semibold'>Matthieu Melin</h1>
                    </Link>
                    <Button className='lg:hidden' theme='transparent' onClick={handleToggleNavbar}>
                        {open ? <LiaTimesSolid size={20} color='white' /> : <RxHamburgerMenu size={20} className="text-neutral-500" />}
                    </Button>
                </div>

                <ul className={`overflow-hidden lg:overflow-visible lg:flex lg:gap-8 items-center transition-all duration-500 ease-in-out space-y-2 lg:space-y-0 ${open ? 'mt-4 lg:mt-0 max-h-40 opacity-100' : 'max-h-0 lg:max-h-screen opacity-0 lg:opacity-100'}`}>
                    <li>
                        <NavLink
                            to={routes.Home}
                            className={({ isActive }) => navLinkClassNames(isActive)}>Accueil</NavLink>
                    </li>
                    <li>
                        <a
                            href={`#projects`}
                            className={`text-neutral-400 hover:text-white duration-200`}>Projets</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar