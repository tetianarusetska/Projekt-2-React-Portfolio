import img2 from '../assets/images/rectangle.svg'
import Typewriter from '../components/animations/TypeWriter.jsx'

function ITPath() {
    return <div
        className="
        h-screen w-screen 
        md:mt-[-500px]
        mt-[-250px]
        lg:mt-[0px]
        lg:mb-[0px]
        md:mb-[-100px]
        "
    >
        <div
            className="pageTitle"
        >
            <p
                className="
                hidden 
                md:block md:text-center md:leading-[1.2em] md:font-[Boxing] md:text-[72px] md:mt-[40px]"
            >
                WEG IN DIE IT
            </p>
        </div>
        <div
            className="content md:flex md:flex-col lg:flex-row md:justify-center md:items-center"
        >
            <div
                className="animation mt-[350px] md:flex-1 md:mt-[40px] lg:ml-[160px] lg:mt-[120px]"
            >
                <Typewriter />
            </div>
            <div
                className="itInfo hidden md:flex-1 md:flex md:flex-col md:gap-[10px] lg:mt-[170px] md:mt-[100px]"
            >
                <p
                    className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[24px]"
                >
                    Kurs "Frontend-Entwciklung", ucode, 2020-2021
                </p>
                <img
                    className="w-[2px] h-[80px] ml-[80px] md:ml-[210px]"
                    src={img2}
                    alt="decoration1" 
                     />
                <p
                    className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[24px]"
                >
                    React-Marathon, SoftServe, 2021
                </p>
                <img
                    className="w-[2px] h-[80px] ml-[80px] md:ml-[210px]"
                    src={img2}
                    alt="decoration2"
                />
                <p
                    className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[24px]"
                >
                    Weiterbildung "IHK IT-Fachkraft für<br></br>Web-Entwicklung", Syntax Institut,  2025-2026
                </p>
            </div>
        </div>
    </div>
}

export default ITPath