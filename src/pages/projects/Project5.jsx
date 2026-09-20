import img1 from '../../assets/images/inspira/img1.png'
import img2 from '../../assets/images/inspira/img2.png'
import img3 from '../../assets/images/inspira/img3.png'
import img4 from '../../assets/images/inspira/img4.png'
import img5 from '../../assets/images/inspira/img5.png'
import img6 from '../../assets/images/inspira/img6.png'
import img7 from '../../assets/images/inspira/img7.png'
import img8 from '../../assets/images/inspira/img8.png'
import img9 from '../../assets/images/inspira/img9.png'
import img10 from '../../assets/images/inspira/img10.png'


export default function Project5() {
    return <div>
        <a
            href="/" className="inline-block mt-[30px] mx-4 sm:mx-12 lg:mx-[260px] text-lg sm:text-xl lg:text-[25px] font-extralight">
            Home
        </a>
        <div className="project4 flex flex-col justify-center items-center gap-[50px] mb-[20px]">

            <p className="text-center leading-[1.2em] font-[Montserrat, sans-serif] text-xl sm:text-2xl lg:text-[32px] font-extralight mt-6 sm:mt-10 lg:mt-[40px] px-4">
                "i . nspira" Digitales Archiv (Naxt.js, Prisma, PostgreSQL)
            </p>

            <p className="px-4 sm:px-8 lg:px-0 w-full max-w-[655px] leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight text-center sm:text-left">
                Technologie-Stack: Next.js, TypeScript, React, Tailwind CSS, Prisma ORM, PostgreSQL, Better Auth (Authentifizierung), Neon (Cloud-Datenbank), Docker und Deployment über Vercel.            </p>

            <p className="px-4 sm:px-8 lg:px-0 w-full max-w-[655px] leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight text-center sm:text-left">
                i . nspira ist ein digitales persönliches Archiv, das Nutzer ermöglicht, Inspirationen und individuelle Sammlungen an einem Ort zu speichern und zu organisieren. Nutzer können sich registrieren, eigene Einträge erstellen, bearbeiten und löschen sowie ihre persönlichen Sammlungen verwalten. Ziel des Projekts ist es, einen übersichtlichen und persönlichen digitalen Raum für das Sammeln, Organisieren und Wiederentdecken von Interessen und Inspirationen zu schaffen.            </p>

            <a
                href="https://projekt4-next-js-inspira.vercel.app/"
                className="underline px-4 text-center leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight"
            >
                Projekt anschauen
            </a>

            <a
                href="https://github.com/tetianarusetska/Projekt4-NextJS-inspira"
                className="underline px-4 text-center leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight"
            >
                Github
            </a>

            <div className='flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-12 w-full px-4 sm:px-6 lg:px-0'>
                <img src={img1} alt="img1" className="w-full max-w-[993px] h-auto lg:h-[589px] object-cover" />
                <img src={img2} alt="img2" className="w-full max-w-[993px] h-auto lg:h-[589px] object-cover" />
                <img src={img3} alt="img3" className="w-full max-w-[993px] h-auto lg:h-[589px] object-cover" />
                <img src={img4} alt="img4" className="w-full max-w-[993px] h-auto lg:h-[589px] object-cover" />
                <img src={img5} alt="img5" className="w-full max-w-[993px] h-auto lg:h-[589px] object-cover" />
                <img src={img6} alt="img6" className="w-full max-w-[993px] h-auto lg:h-[589px] object-cover" />
                <img src={img7} alt="img7" className="w-full max-w-[993px] h-auto lg:h-[589px] object-cover" />
                <img src={img8} alt="img8" className="w-full max-w-[993px] h-auto lg:h-[589px] object-cover" />
                <img src={img9} alt="img9" className="w-full max-w-[993px] h-auto lg:h-[589px] object-cover" />
                <img src={img10} alt="img10" className='w-full max-w-[993px] h-auto object-cover' />
            </div>
        </div>
    </div >
}