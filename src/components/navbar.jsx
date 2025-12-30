import {cn} from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";


const navitems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contacts", href: "#contact"},
];



export const Navbar = () =>{
    const [isScrolled , setIsScrolled] = useState(false); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isImageOpen, setIsImageOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>

        <div className="container flex items-center justify-between" href="#hero">
            <a className="text-xl font-bold text-primary flex items-center">
                <span className="relative z-10">
                    <a className="text-xl font-bold text-primary flex items-center space-x-3">
                       <img src="./pfp1.jpg" alt="Profile" className="w-10 h-10 rounded-full object-cover cursor-pointer border border-primary"
                            onClick={() => setIsImageOpen(true)}/>
                        <span className="relative z-10 flex items-center space-x-1">
                            <span className="text-glow text-foreground">Hadil</span> {" "}
                            <span> Portfolio</span>
                        </span>

                    </a>
                </span>
            </a>
            {/*for desktop*/}
            <div className="hidden md:flex space-x-8">
                {navitems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        {item.name}
                    </a>
                ))}
            </div>

            {/* for mobile */}

            <button onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "close Menu" : "Open Menu"}>
                    {isMenuOpen ? <X size={24} /> : <Menu size ={24}/>}</button>

            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
            <div className="flex flex-col space-x-8 text-xl">
                {navitems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}>
                        {item.name}

                    </a>
                ))}
            </div>
            </div>
        </div>

        {isImageOpen && (
    <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
        onClick={() => setIsImageOpen(false)}
    >
        <img 
            src="./pfp1.jpg" 
            alt="Profile Large"
            className="w-64 h-64 rounded-xl object-cover border-2 border-primary shadow-xl"
        />
    </div>
)}

    </nav>
    );
}