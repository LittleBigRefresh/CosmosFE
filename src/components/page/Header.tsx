import Link from "next/link";

function NavBarItem({href, title}: {href: string, title: string}) {
    return (
        <Link href={href}>{title}</Link>
    );
}

function NavBar() {
    return (
        <nav className="flex gap-x-1">
            <NavBarItem href="/" title="Home"></NavBarItem>
            <NavBarItem href="/levels" title="Levels"></NavBarItem>
            <NavBarItem href="/photos" title="Photos"></NavBarItem>
            <NavBarItem href="/activity" title="Activity"></NavBarItem>
        </nav>
    );
}

export default function Header() {
    return (
        <div className="flex bg-header-background">
            <h1 className="font-bold mr-1">CosmosFE Prototype</h1>
            <NavBar></NavBar>
        </div>
    );
}
