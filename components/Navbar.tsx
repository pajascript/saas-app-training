import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href='/'>
                <div className="flex items-center cursor-pointer gap-4">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={46}
                        height={44}
                    />
                </div>
            </Link>
            <NavItems />
            <p>Sign In</p>
        </nav>
    )
}

export default Navbar