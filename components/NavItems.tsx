'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navItems: {label: string; href: string}[] = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
]

const NavItems = () => {
    const pathName = usePathname()

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({label, href}) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(pathName === href && 'text-primary font-semibold')}
                >
                    {label}
                </Link>
            ))}
        </nav>
    )
}

export default NavItems