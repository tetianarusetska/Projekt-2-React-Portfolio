import img1 from '../../assets/images/image1.png'
import img2 from '../../assets/images/image2.png'
import img3 from '../../assets/images/image3.png'
import img4 from '../../assets/images/image4.png'
import img5 from '../../assets/images/image5.png'
import img6 from '../../assets/images/image6.png'
import img7 from '../../assets/images/image7.png'

export default function Project1() {
    return (
        <div>
            <a href="/" className="iinline-block mt-[30px] mx-4 sm:mx-12 lg:mx-[260px] text-lg sm:text-xl lg:text-[25px] font-extralight">
                Home
            </a>

            <div className="project1 flex flex-col justify-center items-center gap-[40px]">

                <p className="text-center leading-[1.2em] font-[Montserrat, sans-serif] text-xl sm:text-2xl lg:text-[32px] font-extralight mt-6 sm:mt-10 lg:mt-[50px] px-4">
                    "Yehor Lemzyakoff" (Figma) UI, UX
                </p>

                <p className="mt-6 sm:mt-10 px-4 sm:px-8 lg:px-0 w-full max-w-[655px] h-auto lg:h-[146px] leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight text-center sm:text-left">
                    Die Idee des Projekts besteht darin, eine einzigartige Plattform für einen einzelnen Fotografen zu schaffen. Die Einzigartigkeit liegt darin, dass die Website alle Prozesse der analogen Fotografie zeigt. Außerdem kann man sich auf der Website das Portfolio des Autors, seine Biografie und seine Ausstellungshistorie ansehen sowie ein Fotoshooting buchen. Erstellt in Figma.
                </p>

                <a
                    href="https://www.figma.com/design/SkrHlovxbKtmknxyOd2wDh/Projekt-1?node-id=0-1&t=aKQNtj7eSCWBjJyr-1"
                    className="underline px-4 text-center leading-[1.2em] font-[Montserrat, sans-serif] text-sm sm:text-base lg:text-[20px] font-extralight"
                >
                    Projekt anschauen
                </a>

                <img src={img1} alt="img1" className="w-full max-w-[793px] h-auto lg:h-[489px] px-4 sm:px-6 lg:px-0 object-cover" />
                <img src={img2} alt="img2" className="w-full max-w-[793px] h-auto lg:h-[489px] px-4 sm:px-6 lg:px-0 object-cover" />
                <img src={img3} alt="img3" className="w-full max-w-[793px] h-auto lg:h-[489px] px-4 sm:px-6 lg:px-0 object-cover]" />
                <img src={img4} alt="img4" className="w-full max-w-[793px] h-auto lg:h-[489px] px-4 sm:px-6 lg:px-0 object-cover" />

                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-[14px] mb-[20px] w-full px-4 sm:px-6 lg:px-0">
                    <img src={img5} alt="img5" className="w-full max-w-[392px] h-auto lg:h-[1009px] object-cover" />
                    <img src={img6} alt="img6" className="w-full max-w-[276px] h-auto lg:h-[1006px] object-cover" />
                    <img src={img7} alt="img7" className="w-full max-w-[260px] h-auto lg:h-[1009px] object-cover" />
                </div>
            </div>
        </div>
    )
}