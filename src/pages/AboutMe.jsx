import TextDisperseLines from '../components/animations/TextDisperse.jsx'
import DownloadButton from '../components/CVButton.jsx'
import TextAbout from '../components/TextAbout.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faSquareLinkedin, faWhatsapp, faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons"
import socialLinks from '../data/SocialLinks.json' assert { type: "json" };

function AboutMe() {

    const iconsMap = {
        faSquareFacebook,
        faSquareLinkedin,
        faWhatsapp,
        faTelegram,
        faInstagram
    };

    return <div
        id="aboutme" className="
        h-screen w-screen
        lg:px-[80px]
        md:mt-[-600px]
        mt-[-250px]
        lg:mt-[-100px]
        "
    >
        <div
            className="
            flex flex-col items-center
            lg:flex-row
            lg:gap-[60px]
            "
        >
            <div className="
            flex flex-col items-center flex-1  
            lg:items-start
            lg:mt-[80px]
            "
            >
                <div className="
                    aboutMe flex flex-col items-center w-full
                    lg:items-start lg:gap-[43px]
                    "
                >
                    <div>
                        <p
                            className="
                            leading-[1.2em] font-[MelodramaLight] 
                            text-center lg:text-left
                            text-[42px] md:text-[72px]
                            "
                        >
                            ÜBER MICH
                        </p>
                    </div>
                    <div className="
                    flex justify-center
                    md:mt-[40px]
                    mt-[40px]
                    lg:mt-[0px]
                    "
                    >
                        <TextAbout />
                    </div>
                </div>
                <div
                    className="downlButton mt-[-40px] md:mt-[0px]"
                >
                    <DownloadButton />
                </div>
                <div
                    className="links"
                >
                    <ul
                        className="
                        flex flex-row justify-center lg:justify-start gap-[6px] mt-[40px] md:mt-[63px] 
                        "
                    >
                        {socialLinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.link}>
                                    <FontAwesomeIcon icon={iconsMap[item.icon]}
                                        className="text-[var(--mainColor)] text-4xl"
                                    >
                                    </FontAwesomeIcon>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div
                className="
                flex flex-col flex-1 lg:gap-[123px] lg:mt-[150px] lg:ml-[300px]
                "
            >
                <div
                    className="textDispAnimation"
                >
                    <TextDisperseLines />
                </div>
                <div
                    className="additInfo hidden 
                    lg:flex lg:flex-row lg:gap-[81px]
                    "
                >
                    <div>
                        <p
                            className="
                            leading-[1.2em] font-[MelodramaLight] lg:text-[38px]
                            "
                        >
                            SPRACHE:
                        </p>
                        <p
                            className="
                            leading-[1.2em] font-[Montserrat,sans-serif] text-[25px] font-extralight lg:mt-[10px]
                            "
                        >
                            Deutsch, Englisch,<br></br>Ukrainisch,<br></br>Russisch
                        </p>
                    </div>
                    <div>
                        <p className="
                        leading-[1.2em] font-[MelodramaLight] text-[38px]
                        "
                        >
                            HOBBY:
                        </p>
                        <p className="
                        leading-[1.2em] font-[Montserrat,sans-serif] lg:text-[25px] font-extralight lg:mt-[10px]
                        "
                        >
                            Analoge Fotografie
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AboutMe