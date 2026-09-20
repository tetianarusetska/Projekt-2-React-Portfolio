import img8 from '../../assets/images/image8.png'
import img9 from '../../assets/images/image9.png'
import img10 from '../../assets/images/image10.png'
import img11 from '../../assets/images/image11.png'


export default function Project2() {
    return (
        <div>
            <a href="/" className="inline-block mt-[30px] mx-4 sm:mx-12 lg:mx-[260px] text-lg sm:text-xl lg:text-[25px] font-extralight">
                Home
            </a>

            <div className="project1 flex flex-col justify-center items-center gap-[50px]">

                <p className="text-center leading-[1.2em] font-[Montserrat, sans-serif] text-xl sm:text-2xl lg:text-[32px] font-extralight mt-6 sm:mt-10 lg:mt-[40px] px-4">
                    "Portfolio" (Framer) UI, UX
                </p>

                <p className="mt-6 sm:mt-10 px-4 sm:px-8 lg:px-0 w-full max-w-[655px] h-auto lg:h-[146px] leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight text-center sm:text-left">
                    Ich wollte meine kreative Seite bei der Erstellung meines Portfolios zeigen. So ist diese einseitige Visitenkarte entstanden. Sie enthält eine beträchtliche Menge an Code – die gesamte Animation wurde selbst geschrieben. Außerdem plane ich, sie später mit verschiedenen Projekten zu erweitern.
                </p>

                <a
                    href="https://framer.com/projects/Portfolio--SWsAKpJZZmcsCt86Opy2-aXdE9"
                    className="underline px-4 text-center leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight"
                >
                    Projekt anschauen
                </a>

                <img src={img8} alt="img8" className="w-full max-w-[793px] h-auto lg:h-[489px] px-4 sm:px-6 lg:px-0 object-cover" />
                <img src={img9} alt="img9" className="w-full max-w-[793px] h-auto lg:h-[489px] px-4 sm:px-6 lg:px-0 object-cover" />
                <img src={img10} alt="img10" className="w-full max-w-[793px] h-auto lg:h-[489px] px-4 sm:px-6 lg:px-0 object-cover" />
                <img src={img11} alt="img11" className="w-full max-w-[793px] h-auto lg:h-[489px] px-4 sm:px-6 lg:px-0 object-cover" />

            </div>
        </div>
    )
}