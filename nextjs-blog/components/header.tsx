import Link from 'next/link';

export default function Header (){
    return (
        <>
            <header>
                <div className="logo">
                    <Link href="/">Kim Nguyen</Link>
                </div>
                <div>
                    <Link href="/test">Test Page</Link>
                </div>
            </header>
        </>
    )
}