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
            href="/" className="inline-block mt-[30px] mx-[260px] text-[25px] font-extralight">
            Home
        </a>
        <div className="project4 flex flex-col justify-center items-center gap-[50px] mb-[20px]">

            <p className="text-center leading-[1.2em] font-[Montserrat, sans-serif] text-[32px] font-extralight mt-[40px]">
                "i . nspira" Digitales Archiv (Naxt.js, Prisma, PostgreSQL)
            </p>

            <p className="-translate-y-10my-[40px] px-[260px] flex flex-col gap-[20px] w-[655] h-[146px] leading-[1.2em] font-[Montserrat, sans-serif] text-[20px] font-extralight">
                Technologie-Stack: Next.js, TypeScript, React, Tailwind CSS, Prisma ORM, PostgreSQL, Better Auth (Authentifizierung), Neon (Cloud-Datenbank), Docker und Deployment über Vercel.            </p>

            <p className="-translate-y-30 my-[40px] px-[260px] flex flex-col gap-[20px] w-[655] h-[146px] leading-[1.2em] font-[Montserrat, sans-serif] text-[20px] font-extralight">
                i . nspira ist ein digitales persönliches Archiv, das Nutzer ermöglicht, Inspirationen und individuelle Sammlungen an einem Ort zu speichern und zu organisieren. Nutzer können sich registrieren, eigene Einträge erstellen, bearbeiten und löschen sowie ihre persönlichen Sammlungen verwalten. Ziel des Projekts ist es, einen übersichtlichen und persönlichen digitalen Raum für das Sammeln, Organisieren und Wiederentdecken von Interessen und Inspirationen zu schaffen.            </p>

            <a
                href="https://projekt4-next-js-inspira.vercel.app/"
                className="-translate-y-40 underline px-[260px] leading-[1.2em] font-[Montserrat, sans-serif] text-[20px] font-extralight"
            >
                Projekt anschauen
            </a>

            <a
                href="https://github.com/tetianarusetska/Projekt4-NextJS-inspira"
                className="underline -translate-y-50 px-[260px] leading-[1.2em] font-[Montserrat, sans-serif] text-[20px] font-extralight"
            >
                Github
            </a>

            <div className='-translate-y-30 flex flex-col gap-12'>
                <img src={img1} alt="img1" className="w-[993px] h-[589px]" />
                <img src={img2} alt="img2" className="w-[993px] h-[589px]" />
                <img src={img3} alt="img3" className="w-[993px] h-[589px]" />
                <img src={img4} alt="img4" className="w-[993px] h-[589px]" />
                <img src={img5} alt="img5" className="w-[993px] h-[589px]" />
                <img src={img6} alt="img6" className="w-[993px] h-[589px]" />
                <img src={img7} alt="img7" className="w-[993px] h-[589px]" />
                <img src={img8} alt="img8" className="w-[993px] h-[589px]" />
                <img src={img9} alt="img9" className="w-[993px] h-[589px]" />
                <img src={img10} alt="img10" />
            </div>
        </div>
    </div >
}