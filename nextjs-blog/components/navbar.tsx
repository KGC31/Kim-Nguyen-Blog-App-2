import Link from 'next/link'
import Image from 'next/image'
export default function navbar (){
    return (
        <>
            <nav className="grid justify-center place-content-center items-center bg-transparent fixed left-5 h-screen z-30">
                <div className='flex flex-col gap-8 bg-[#444]/50 p-2 rounded-xl backdrop-blur-sm bg-opacity-85'>
                    <Link href="/" className=''><Image src="/favicon.ico" width={30} height={30} alt="Logo"/></Link>
                    <Link href="/" className=''>
                        <svg id="Home 2" className='stroke-2' width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.7054 16.3097H14.8274V21.3887H20.6934V8.88567L12.1504 2.88867L3.8064 8.88567V21.3887H9.7054" stroke="white" stroke-width="2" stroke-linecap="square"/>
                        </svg>
                    </Link>
                    <Link href="/blog" className=''>
                        <svg id="Edit" width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3506 3.604L21.25 8.50339L8.14939 21.604L3.25461 21.5994L3.25 16.7046L16.3506 3.604Z" stroke="white" stroke-width="2" stroke-linecap="square"/>
                            <path d="M20.5722 21.5987L3.25488 21.5981" stroke="white" stroke-width="2" stroke-linecap="square"/>
                        </svg>
                    </Link>
                    <Link href="/login" className=''>
                        <svg id="Login"width="30" height="30" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1849 12.0003L3.40717 12.0003" stroke="white" stroke-width="2" stroke-linecap="square"/>
                            <path d="M13.6454 15.2749L16.935 11.9999L13.6454 8.72385" stroke="white" stroke-width="2" stroke-linecap="square"/>
                            <path d="M9.664 7.375L9.664 2.75L21.0928 2.75L21.0928 21.25L9.664 21.25L9.664 16.625" stroke="white" stroke-width="2" stroke-linecap="square"/>
                        </svg>
                    </Link>
                    <Link href="/register" className=''>
                        <svg id="Add User"width="30" height="30" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.2929 8.66882V12.6788M21.338 10.6737H17.248" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                            <path d="M10.2049 14.8188C13.4613 14.8104 16.2301 16.3056 17.2478 19.5241C15.1964 20.7746 12.7818 21.2563 10.2049 21.25C7.62803 21.2563 5.21338 20.7746 3.16202 19.5241C4.18092 16.3021 6.94505 14.8104 10.2049 14.8188Z" stroke="white" stroke-width="2" stroke-linecap="square"/>
                            <path d="M14.5894 7.16961C14.5894 9.61056 12.6106 11.5893 10.1696 11.5893C7.72869 11.5893 5.74991 9.61056 5.74991 7.16961C5.74991 4.72866 7.72869 2.74988 10.1696 2.74988C12.6106 2.74988 14.5894 4.72866 14.5894 7.16961Z" stroke="white" stroke-width="2" stroke-linecap="square"/>
                        </svg>
                    </Link>
                    

                </div>
                {/* <Link href="/" className="text-xl font-bold">Kim Nguyen</Link>
                <div className="flex items-center">
                    <ul className="flex items-center space-x-6">
                        <li className="font-semibold"><Link href="/login">Login</Link></li>
                        <li className="font-semibold"><Link href="/register">Register</Link></li>
                    </ul>
                </div> */}
            </nav>
        </>
    )
}