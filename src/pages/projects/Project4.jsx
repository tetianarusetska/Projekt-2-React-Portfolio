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
            href="/" className="inline-block mt-[30px] mx-4 sm:mx-12 lg:mx-[260px] text-lg sm:text-xl lg:text-[25px] font-extralight">
            Home
        </a>
        <div className="project4 flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-[50px] mb-[20px]">

            <p className="text-center leading-[1.2em] font-[Montserrat, sans-serif] text-xl sm:text-2xl lg:text-[32px] font-extralight mt-6 sm:mt-10 lg:mt-[40px] px-4">
                "MONO" Fotoarchiv (React, Tailwind)
            </p>

            <p className="px-4 sm:px-8 lg:px-0 w-full max-w-[655px] leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight text-center sm:text-left">
                Technologie-Stack: React (Vite), React Router (Client-Side Routing), Tailwind CSS, Framer Motion & GSAP (Animationen), Lenis (Smooth Scrolling), Firebase Authentication (E-Mail/Passwort), Cloud Firestore (Echtzeit-Datenbank), Unsplash API (Fotografien und Fotograf:innen-Daten), News API (Artikel), Deployment über Vercel.
            </p>

            <p className="px-4 sm:px-8 lg:px-0 w-full max-w-[655px] leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight text-center sm:text-left">
                MONO ist eine Plattform für analoge Fotografie, die Inspiration, Wissen und die fotografischen Arbeiten einer Community an einem Ort vereint. Nutzer:innen können Fotograf:innen entdecken, Artikel lesen, persönliche Sammlungen erstellen sowie Fotografien und Prints präsentieren, kaufen und verkaufen. Ziel des Projekts ist es, die Sichtbarkeit, Vernetzung und den Austausch innerhalb der analogen Fotografie-Community zu fördern und gleichzeitig als Archiv, Lernplattform und kreatives Netzwerk zu dienen.
            </p>

            <a
                href="https://projekt3-react-mono-filmarchiv.vercel.app/"
                className="lg:-translate-y-40 underline px-4 text-center leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight"
            >
                Projekt anschauen
            </a>

            <a
                href="https://github.com/tetianarusetska/Projekt3-React-Mono-Filmarchiv"
                className="underline lg:-translate-y-50 px-4 text-center leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight"
            >
                Github
            </a>

            <img src={cover} alt="img17" className="w-full max-w-[993px] h-auto lg:h-[589px] lg:-translate-y-30 px-4 sm:px-6 lg:px-0 object-cover" />
            <img src={img21} alt="img21" className="w-full max-w-[993px] h-auto lg:h-[589px] px-4 sm:px-6 lg:px-0 object-cover" />
            <img src={img23} alt="img23" className="w-full max-w-[993px] h-auto lg:h-[589px] px-4 sm:px-6 lg:px-0 object-cover" />
            <img src={img24} alt="img24" className="w-full max-w-[993px] h-auto lg:h-[589px] px-4 sm:px-6 lg:px-0 object-cover" />
            <img src={favoriten} alt="img26" className="w-full max-w-[993px] h-auto lg:h-[589px] px-4 sm:px-6 lg:px-0 object-cover" />
            <img src={collections} alt="img27" className="w-full max-w-[993px] h-auto lg:h-[589px] px-4 sm:px-6 lg:px-0 object-cover" />
            <img src={checkout} alt="img28" className="w-full max-w-[993px] h-auto lg:h-[589px] px-4 sm:px-6 lg:px-0 object-cover" />
            <img src={profile} alt="img25" className="w-full max-w-[993px] h-auto px-4 sm:px-6 lg:px-0 object-cover" />
            <img src={screen1} alt="img29" className='w-full max-w-[800px] h-auto px-4 sm:px-6 lg:px-0 object-cover' />
            <img src={screen2} alt="img30" className='w-full max-w-[800px] h-auto px-4 sm:px-6 lg:px-0 object-cover' />
            <img src={screen3} alt="img31" className='w-full max-w-[800px] h-auto px-4 sm:px-6 lg:px-0 object-cover' />
            <img src={screen4} alt="img32" className="w-full max-w-[993px] h-auto lg:h-[589px] px-4 sm:px-6 lg:px-0 object-cover" />
            <img src={screen5} alt="img33" className="w-full max-w-[993px] h-auto lg:h-[589px] px-4 sm:px-6 lg:px-0 object-cover mb-20" />

        </div>
    </div >
}