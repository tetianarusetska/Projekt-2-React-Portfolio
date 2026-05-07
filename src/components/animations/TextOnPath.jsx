import * as React from "react"

export default function TextOnPath() {
    const offsetRef = React.useRef(0)                            // ein Wert gespeichert, wo der Text auf der Linie starte

    React.useEffect(() => {                                      // dieser Code startet nur einmal beim Laden
        const interval = setInterval(() => {                     // alle 16 Sek wird etwas aktuallisiert. Dadurch wirkt Animation flüssig
            offsetRef.current += 0.2                             // der Startpunkt vom text wird ständig erhöht. Also bewegt sich Text weiter
            if (offsetRef.current > 100) offsetRef.current = 0   // wenn der Wert 100% erreciht -> startet die Animation weiter von vorne

            const el = document.getElementById("textPath")
            if (el) {
                el.setAttribute("startOffset", offsetRef.current + "%") // verschiebt den Text auf dem Pfad. Dadurch läuft der Text entlang die Linie
            }
        }, 16)

        return () => clearInterval(interval)                      // wenn die Komponent verschwindet -> Timer wird gestoppt
    }, [])

    return (
        <div
            className="w-full h-[110px] flex justify-center items-center overflow-visible
            translate-y-[-350px] md:translate-y-[-755px] lg:-translate-y-[280px]
            "
        >

            <svg
                className="w-full h-[200px] md:h-[200px] lg:h-[500px]"
                viewBox="0 0 2000 500"
            >


                <path
                    id="tetianaWave"
                    d="
                        M 0 250 
                        C 300 60, 600 440, 1000 250
                        C 1300 60, 1600 440, 2000 250
                    "
                    fill="none"
                    stroke="var(--mainColor)"
                    strokeWidth="2"
                />

                <text
                    fill="var(--mainColor)"
                    fontWeight="400"
                    letterSpacing="3px"
                    fontFamily="Aktura Regular"
                    className="text-[76px] md:text-[52px] lg:text-[48px]"
                >
                    <textPath id="textPath" href="#tetianaWave">
                        TETIANA RUSETSKA • 27 JÄHRIGE • WEB-ENTWICKLERIN • AUS
                        DER UKRAINE • KIEW • TETIANA RUSETSKA • 27 JÄHRIGE •
                        WEB-ENTWICKLERIN • AUS DER UKRAINE • KIEW • TETIANA
                        RUSETSKA • 27 JÄHRIGE • WEB-ENTWICKLERIN • AUS DER
                        UKRAINE • KIEW
                    </textPath>
                </text>

            </svg>

        </div>
    )
}