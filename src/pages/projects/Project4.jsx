import img20 from '../../assets/images/img20.png'
import img21 from '../../assets/images/img21.png'
import img23 from '../../assets/images/img23.png'
import img24 from '../../assets/images/img24.png'
import profile from "../../assets/images/profile.png"
import favoriten from "../../assets/images/favoriten.png"
import collections from "../../assets/images/collections.png"
import checkout from "../../assets/images/checkout.png"
import cover from "../../assets/images/cover.png"
import screen1 from "../../assets/images/screen1.png"
import screen2 from "../../assets/images/screen2.png"
import screen3 from "../../assets/images/screen3.png"
import screen4 from "../../assets/images/screen4.png"
import screen5 from "../../assets/images/screen5.png"


export default function Project4() {
    return <div>
        <a
            href="/"
            className="inline-block mt-[30px] mx-[260px] text-[25px] font-extralight"
        >
            Home
        </a>
        <div
            className="project4 flex flex-col justify-center items-center gap-[50px] mb-[20px]"
        >
            <p
                className="text-center leading-[1.2em] font-[Montserrat, sans-serif] text-[32px] font-extralight mt-[40px]"
            >
                "MONO" Fotoarchiv (React, Tailwind)
            </p>
            <p
                className="-translate-y-10my-[40px] px-[260px] flex flex-col gap-[20px] w-[655] h-[146px] leading-[1.2em] font-[Montserrat, sans-serif] text-[20px] font-extralight"
            >
                Technologie-Stack: React (Vite), React Router (Client-Side Routing), Tailwind CSS, Framer Motion & GSAP (Animationen), Lenis (Smooth Scrolling), Firebase Authentication (E-Mail/Passwort), Cloud Firestore (Echtzeit-Datenbank), Unsplash API (Fotografien und Fotograf:innen-Daten), News API (Artikel), Deployment über Vercel.
            </p>
            <p
                className="-translate-y-30 my-[40px] px-[260px] flex flex-col gap-[20px] w-[655] h-[146px] leading-[1.2em] font-[Montserrat, sans-serif] text-[20px] font-extralight"
            >
                MONO ist eine Plattform für analoge Fotografie, die Inspiration, Wissen und die fotografischen Arbeiten einer Community an einem Ort vereint. Nutzer:innen können Fotograf:innen entdecken, Artikel lesen, persönliche Sammlungen erstellen sowie Fotografien und Prints präsentieren, kaufen und verkaufen. Ziel des Projekts ist es, die Sichtbarkeit, Vernetzung und den Austausch innerhalb der analogen Fotografie-Community zu fördern und gleichzeitig als Archiv, Lernplattform und kreatives Netzwerk zu dienen.            </p>
            <a
                href="https://projekt3-react-mono-filmarchiv.vercel.app/"
                className="-translate-y-40 underline px-[260px] leading-[1.2em] font-[Montserrat, sans-serif] text-[20px] font-extralight"
            >
                Projekt anschauen
            </a>
            <a
                href="https://github.com/tetianarusetska/Projekt3-React-Mono-Filmarchiv"
                className="underline -translate-y-50 px-[260px] leading-[1.2em] font-[Montserrat, sans-serif] text-[20px] font-extralight"
            >
                Github
            </a>
            <img
                src={cover}
                alt="img17"
                className="w-[993px] h-[589px] -translate-y-30"
            />
            <img
                src={img21}
                alt="img21"
                className="w-[993px] h-[589px]"
            />
            <img
                src={img23}
                alt="img23"
                className="w-[993px] h-[589px]"
            />
            <img
                src={img24}
                alt="img24"
                className="w-[993px] h-[589px]"
            />
            <img
                src={favoriten}
                alt="img26"
                className="w-[993px] h-[589px]"
            />
            <img
                src={collections}
                alt="img27"
                className="w-[993px] h-[589px]"
            />
            <img
                src={checkout}
                alt="img28"
                className="w-[993px] h-[589px]"
            />
            <img
                src={profile}
                alt="img25"
                className=""
            />
            <img
                src={screen1}
                alt="img29"
                className='w-200 h-300'
            />
            <img
                src={screen2}
                alt="img30"
                className='w-200 h-200'
            />
            <img
                src={screen3}
                alt="img31"
                className='w-200 h-300'
            />
            <img
                src={screen4}
                alt="img32"
                className="w-[993px] h-[589px]"
            />
            <img
                src={screen5}
                alt="img33"
                className="w-[993px] h-[589px] mb-20"
            />
        </div>
    </div >
}