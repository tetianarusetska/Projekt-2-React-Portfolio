import HoverTicker from '../components/animations/HoverTicker.jsx'
import SelectedWorks4 from '../components/animations/SelectedWorks.jsx'
import GitHubProjects from '../components/GitHubProjects.jsx'

function Projects() {
    return <div
        id='projects'
        className='
        md:mb-[-40px] lg:mb-[0px]
        md:mt-[0px] mt-[-120px]
        '
    >
        <div>
            <p
                className="
                text-center leading-[1.2em] font-[MelodramaLight] md:text-[72px] text-[42px]
                "
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
        <div>
            <GitHubProjects username="tetianarusetska" />
        </div>
    </div>
}

export default Projects