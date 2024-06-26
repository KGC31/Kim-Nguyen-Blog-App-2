import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {motion, AnimatePresence} from "framer-motion";

const DesktopNavbar = () => {
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem('access_token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('csrf');
        setToken(null);
        router.push('/login');
    };

    return (
        <>
            <nav className="grid justify-center items-center bg-transparent fixed bottom-5 sm:left-5 h-screen z-30">
                <div className='flex flex-row sm:flex-col gap-8 bg-[#444]/50 p-2 rounded-xl backdrop-blur-sm bg-opacity-85'>
                    <Link href="/">
                        <Image src="/favicon.ico" width={30} height={30} alt="Logo" />
                    </Link>
                    <Link href="/">
                        <svg id="Home 2" className='stroke-2' width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.7054 16.3097H14.8274V21.3887H20.6934V8.88567L12.1504 2.88867L3.8064 8.88567V21.3887H9.7054" stroke="white" strokeWidth="2" strokeLinecap="square" />
                        </svg>
                    </Link>
                    <Link href="/blog">
                        <svg id="Edit" width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3506 3.604L21.25 8.50339L8.14939 21.604L3.25461 21.5994L3.25 16.7046L16.3506 3.604Z" stroke="white" strokeWidth="2" strokeLinecap="square" />
                            <path d="M20.5722 21.5987L3.25488 21.5981" stroke="white" strokeWidth="2" strokeLinecap="square" />
                        </svg>
                    </Link>
                    {!token ? (
                        <>
                            <Link href="/login">
                                <svg id="Login" width="30" height="30" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.1849 12.0003L3.40717 12.0003" stroke="white" strokeWidth="2" strokeLinecap="square" />
                                    <path d="M13.6454 15.2749L16.935 11.9999L13.6454 8.72385" stroke="white" strokeWidth="2" strokeLinecap="square" />
                                    <path d="M9.664 7.375L9.664 2.75L21.0928 2.75L21.0928 21.25L9.664 21.25L9.664 16.625" stroke="white" strokeWidth="2" strokeLinecap="square" />
                                </svg>
                            </Link>
                            <Link href="/signup">
                                <svg id="Add User" width="30" height="30" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.2929 8.66882V12.6788M21.338 10.6737H17.248" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                                    <path d="M10.2049 14.8188C13.4613 14.8104 16.2301 16.3056 17.2478 19.5241C15.1964 20.7746 12.7818 21.2563 10.2049 21.25C7.62803 21.2563 5.21338 20.7746 3.16202 19.5241C4.18092 16.3021 6.94505 14.8104 10.2049 14.8188Z" stroke="white" strokeWidth="2" strokeLinecap="square" />
                                    <path d="M14.5894 7.16961C14.5894 9.61056 12.6106 11.5893 10.1696 11.5893C7.72869 11.5893 5.74991 9.61056 5.74991 7.16961C5.74991 4.72866 7.72869 2.74988 10.1696 2.74988C12.6106 2.74988 14.5894 4.72866 14.5894 7.16961Z" stroke="white" strokeWidth="2" strokeLinecap="square" />
                                </svg>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/profile">
                                <svg id="Profile" width="30" height="30" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.25 14.8188C15.5064 14.8104 18.2752 16.3056 19.2929 19.5241C17.2415 20.7746 14.8269 21.2563 12.25 21.25C9.67313 21.2563 7.25849 20.7746 5.20712 19.5241C6.22603 16.3021 8.99015 14.8104 12.25 14.8188Z" stroke="white" strokeWidth="2" strokeLinecap="square" />
                                    <path d="M16.6699 7.16961C16.6699 9.61056 14.6911 11.5893 12.2501 11.5893C9.80919 11.5893 7.83041 9.61056 7.83041 7.16961C7.83041 4.72866 9.80919 2.74988 12.2501 2.74988C14.6911 2.74988 16.6699 4.72866 16.6699 7.16961Z" stroke="white" strokeWidth="2" strokeLinecap="square" />
                                </svg>
                            </Link>
                            <Link href="/login" onClick={handleLogout}>
                                <svg id="Logout" width="30" height="30" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.019 11.9997L8.24121 11.9997" stroke="red" strokeWidth="2" strokeLinecap="square" />
                                    <path d="M18.479 8.7251L21.7686 12.0001L18.479 15.2761" stroke="red" strokeWidth="1.5" strokeLinecap="square" />
                                    <path d="M13.2554 16.625L13.2554 21.25L2.73144 21.25L2.73144 2.75L13.2554 2.75L13.2554 7.375" stroke="red" strokeWidth="2" strokeLinecap="square" />
                                </svg>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
}


const MobileNavbar = () => {
    const [open, setOpen] = useState(false)
  
    const isOpen = () => {
      setOpen(true)
    }
  
    const closeMenu = () => {
      setOpen(false)
    }
  
    // Let's start animation
    const item = {
      exit: {
        opacity: 0,
        height: 0,
        transition: {
          ease: 'easeInOut',
          duration: 0.3,
          delay: 1.2,
        },
      },
    }
  
    return (
      <div className="fixed w-full z-50">
        <header>
          <div className="fixed top-5 right-5 flex items-center justify-center w-14 h-14 cursor-pointer" onClick={isOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fill='#FFF' fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </div>
        </header>
        <AnimatePresence>
          {open && (
            <motion.div className="absolute inset-0 flex flex-col items-center justify-center w-full h-screen bg-[#111] text-white"
              variants={item}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '100vh', opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit="exit"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-white text-[#111] rounded-full absolute top-5 right-5 z-50 cursor-pointer" onClick={closeMenu}>
                X
              </div>
              <motion.a href="/"
                className="inline-flex items-center justify-center h-20 text-2xl uppercase"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: {
                    ease: 'easeInOut',
                    delay: 1,
                  },
                }}
              >
                Home
              </motion.a>
              <motion.a href="/blog"
                className="inline-flex items-center justify-center h-20 text-2xl uppercase mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: {
                    ease: 'easeInOut',
                    delay: 0.8,
                  },
                }}
              >
                Blog
              </motion.a>
              <motion.a href="/login"
                className="inline-flex items-center justify-center h-20 text-2xl uppercase mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: {
                    ease: 'easeInOut',
                    delay: 0.4,
                  },
                }}
              >
                Login
              </motion.a>
              <motion.a href="Sign up"
                className="inline-flex items-center justify-center h-20 text-2xl uppercase mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: {
                    ease: 'easeInOut',
                    delay: 0.2,
                  },
                }}
              >
                Sign up
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
}

export { DesktopNavbar, MobileNavbar }