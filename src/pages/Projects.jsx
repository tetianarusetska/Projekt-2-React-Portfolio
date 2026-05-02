import HoverTicker from '../components/animations/HoverTicker.jsx'
import SelectedWorks4 from '../components/animations/SelectedWorks.jsx'

function Projects() {
    return <div
        id='projects'
        className='md:mb-[-40px] lg:mb-[0px]'
    >
        <div>
            <p
                className="text-center leading-[1.2em] font-[MelodramaLight] text-[72px]"
            >
                MEINE PROJEKTE
            </p>
        </div>
        <div
            className="md:ml-[60px] md:mr-[60px]"
        >
            <SelectedWorks4 />
        </div>
        <div
            className="mt-[30px]"
        >
            <HoverTicker />
        </div>
    </div>
}

export default Projects