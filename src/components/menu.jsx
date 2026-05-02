import { Link } from "react-router-dom"

export default function Menu() {

    const links = [
        { target: "/#aboutme", displayName: "über mich" },
        { target: "/#projects", displayName: "projekte" },
        { target: "/#contact", displayName: "kontakt" },
    ]

    return <div
        className="menu"
    >
        <nav
            className="
            flex leading-[1.2em] font-[MelodramaLight] 
            flex-col md:flex-row lg:flex-row items-end
            gap-[35px] md:gap-[35px] lg:gap-35
            mr-[20px] md:ml-[80px] lg:ml-[160px]
            mt-[20px] lg:mt-5
            text-[24px] md:text-[28px] lg:text-[38px]
            "
        >
            {links.map((link, index) => (
                <Link key={index} to={link.target}>
                    {link.displayName}
                </Link>
            ))}
        </nav>
    </div>
}