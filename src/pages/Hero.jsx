import TextOnPath from '../components/animations/TextOnPath.jsx'
import ThemedButton from '../components/ThemedButton.jsx'
import Menu from '../components/Menu.jsx'

function Hero() {
    return (
        <div className="min-h-screen min-w-screen">
            <div className="md:translate-y-0 md:flex md:flex-row md:justify-between">
                <div className="menu">
                    <Menu />
                </div>
                <div >
                    <ThemedButton /></div>
            </div>
            <div
                className="subtitles min-w-screen flex flex-row items-center justify-center text-[29px]leading-[1.2em] translate-y-60 font-[MelodramaLight] md:gap-40 md:text-[32px] md:translate-y-60 lg:gap-80 lg:text-[55px] lg:translate-y-80"
            >
                <p
                    className="md:ml-[20px]"
                >
                    WEB-ENTWICKLERIN
                </p>
                <p
                    className="hidden md:block md:mr-[20px]"
                >
                    AUS DER UKRAINE, KIEW
                </p>
            </div>
            <div
                className="title min-h-screen min-w-screen flex items-center justify-center">
                <p
                    className="font-[MelodramaLight] leading-[1.2em] text-[56px] md:text-[108px] lg:text-[188px] translate-y-[-50px] md:translate-y-[-220px] lg:translate-y-[0px]">
                    TETIANA RUSETSKA
                </p>
            </div>
            <div>
                <TextOnPath />
            </div>
        </div>
    )
}

export default Hero