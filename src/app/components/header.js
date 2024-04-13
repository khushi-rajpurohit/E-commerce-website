"use client"
import './header.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import DropDown from './dropdown'


export default function Header() {
    return (

        <header className="header">
            <div className="logo">
                <Link href="/">Comfy</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><DropDown /></li>
                    {/* <li><Link href="/products">Products</Link></li> */}
                    <li><Link href="/cart">Cart</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/login">Login</Link></li>
                </ul>
            </nav>
        </header>

    )
}