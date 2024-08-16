import { Button, Navbar, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleNavLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <Navbar className='border-b-2'>
            <Navbar.Brand>
                <Link
                    to='/'
                    className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
                >
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                        F
                    </span>
                    Salon
                </Link>
            </Navbar.Brand>

            <form className='hidden lg:block'>
                <TextInput
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                />
            </form>

            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                <AiOutlineSearch />
            </Button>

            <div className='flex gap-2 md:order-2'>
                <button
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 w-12 h-10 hidden sm:inline"
                    onClick={() => alert('Toggle dark mode')}
                >
                    <FaMoon />
                </button>

                <Link to='/sign-in'>
                    <Button gradientDuoTone='purpleToBlue'>
                        Sign In
                    </Button>
                </Link>

                <Navbar.Toggle />
            </div>

            <Navbar.Collapse className="lg:flex lg:items-center">
                <Navbar.Link>
                    <Link
                        to='/home'
                        onClick={() => handleNavLinkClick('/home')}
                        className={`nav-link ${activeLink === '/home' ? 'active' : ''}`}
                        style={{ color: activeLink === '/home' ? 'blue' : '' }}
                    >
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link
                        to='/about'
                        onClick={() => handleNavLinkClick('/about')}
                        className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}
                        style={{ color: activeLink === '/about' ? 'blue' : '' }}
                    >
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link
                        to='/projects'
                        onClick={() => handleNavLinkClick('/projects')}
                        className={`nav-link ${activeLink === '/projects' ? 'active' : ''}`}
                        style={{ color: activeLink === '/projects' ? 'blue' : '' }}
                    >
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;