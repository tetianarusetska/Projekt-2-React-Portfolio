import img12 from '../../assets/images/image12.png'
import img13 from '../../assets/images/image13.png'
import img14 from '../../assets/images/image14.png'
import img15 from '../../assets/images/image15.png'
import img16 from '../../assets/images/image16.png'


export default function Project3() {
    return <div>
        <a href="/" className="inline-block mt-[30px] mx-4 sm:mx-12 lg:mx-[260px] text-lg sm:text-xl lg:text-[25px] font-extralight">
            Home
        </a>

        <div className="project1 flex flex-col justify-center items-center gap-[50px] mb-[20px]">

            <p className="text-center leading-[1.2em] font-[Montserrat, sans-serif] text-xl sm:text-2xl lg:text-[32px] font-extralight mt-6 sm:mt-10 lg:mt-[40px] px-4">
                "abc" Buchhandlung (HTML, CSS, JavaScript)
            </p>

            <p className="my-6 sm:my-10 px-4 sm:px-8 lg:px-0 w-full max-w-[655px] h-auto lg:h-[146px] leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight text-center sm:text-left">
                Das Projekt wurde mit Hilfe von HTML, CSS und JavaScript umgesetzt. Das Hauptziel ist es, die Aufmerksamkeit der Kund:innen durch ein ungewöhnliches Design zu gewinnen und das Interesse am Kauf von Büchern, insbesondere bei ABC, zu wecken.
            </p>

            <a
                href="https://projekt-1-js-buchhandlung.vercel.app"
                className="lg:-translate-y-20 underline px-4 text-center leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight"
            >
                Projekt anschauen
            </a>

            <a
                href="https://github.com/tetianarusetska/Projekt-1-JS-Buchhandlung"
                className="underline lg:-translate-y-30 px-4 text-center leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight"
            >
                Github
            </a>

            <img src={img12} alt="img12" className="w-full max-w-[793px] h-auto lg:h-[489px] lg:-translate-y-10 px-4 sm:px-6 lg:px-0 object-cover" />
            <img src={img15} alt="img15" className="w-full max-w-[793px] h-auto lg:h-[489px] lg:-translate-y-10 px-4 sm:px-6 lg:px-0 object-cover" />
            <img src={img13} alt="img13" className="w-full max-w-[793px] h-auto lg:h-[489px] lg:-translate-y-10 px-4 sm:px-6 lg:px-0 object-cover" />
            <img src={img14} alt="img14" className="w-full max-w-[793px] h-auto lg:h-[489px] lg:-translate-y-10 px-4 sm:px-6 lg:px-0 object-cover" />
            <img src={img16} alt="img16" className="w-full max-w-[793px] h-auto lg:h-[489px] lg:-translate-y-10 px-4 sm:px-6 lg:px-0 object-cover" />
            
        </div>
    </div >
}