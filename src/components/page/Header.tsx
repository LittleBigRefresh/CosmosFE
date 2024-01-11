import Link from "next/link";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faCertificate, faCoffee, faFireAlt, IconDefinition} from "@fortawesome/free-solid-svg-icons";

function NavBarItem({href, title, icon}: {href: string, title: string, icon: IconDefinition}) {
    return (
        <Link href={href} className="flex items-center gap-x-2 text-xl">
            <FontAwesomeIcon icon={icon} className="w-5 h-5"></FontAwesomeIcon>
            <span>{title}</span>
        </Link>
    );
}

function NavBar() {
    return (
        <nav className="flex gap-x-5">
            <NavBarItem href="/levels" title="Levels" icon={faCertificate}></NavBarItem>
            <NavBarItem href="/photos" title="Photos" icon={faCamera}></NavBarItem>
            <NavBarItem href="/activity" title="Activity" icon={faFireAlt}></NavBarItem>
        </nav>
    );
}

export default function Header() {
    return (
        <div className="flex items-center bg-header-background gap-x-2.5 px-5 py-1 leading-none">
            <Link href="/" title="Home">
                <Image src="/assets/logo.svg" alt="Refresh Logo" width="48" height="48"></Image>
            </Link>

            {/* vertical divider */}
            <div className="mx-1.5 w-[3px] rounded-full h-11 bg-divider"></div>

            <NavBar></NavBar>
        </div>
    );
}
