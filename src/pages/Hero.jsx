import TextOnPath from '../components/animations/TextOnPath.jsx'
import Menu from '../components/Menu.jsx'

function Hero() {
    return <div
        className="
        min-h-screen min-w-screen
        ">
        <div className="menu">
            <Menu />
        </div>
        <div
            className="
            subtitles
            min-w-screen flex flex-row items-center justify-center leading-[1.2em] font-[MelodramaLight] 
            md:gap-40 lg:gap-80 
            text-[29px] md:text-[32px] lg:text-[55px]
            translate-y-60 md:translate-y-70 lg:translate-y-80
            "
        >
            <p
                className="
            md:ml-[80px]
            "
            >
                WEB-ENTWICKLERIN
            </p>
            <p
                className="
            hidden md:block
            md:mr-[80px]
            "
            >
                AUS DER UKRAINE, KIEW
            </p>
        </div>
        <div
            className="
            title min-h-screen min-w-screen flex items-center justify-center
            ">
            <p
                className="
                font-[MelodramaLight] leading-[1.2em]
                text-[56px] md:text-[108px] lg:text-[188px]
                translate-y-[-50px] md:translate-y-[-220px] lg:translate-y-[0px]
                ">TETIANA RUSETSKA</p>
        </div>
        <div>
            <TextOnPath />
        </div>
    </div>
}

export default Hero