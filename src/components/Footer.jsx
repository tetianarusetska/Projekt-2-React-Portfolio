import { Link } from "react-router-dom"

export default function Footer() {

    const links = [
        { target: "/impressum", displayName: "Impressum" },
        { target: "/datenschutz", displayName: "Datenschutz" },
        { target: "/footer-contact", displayName: "Kontakt" }
    ]

    return <div 
    className="relative flex flex-row justify-center leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[16px] gap-[20px]
    translate-y-[60px] md:translate-y-[100px] lg:translate-y-[0px]
    mt-[70px] mb-[10px]
    md:text-[20px]
    lg:gap-[50px] lg:mt-[250px] lg:mb-[15px]"
    >
        {links.map((link, index) => (
            <Link key={index} to={link.target}>
                {link.displayName}
            </Link>
        ))}
    </div>
}