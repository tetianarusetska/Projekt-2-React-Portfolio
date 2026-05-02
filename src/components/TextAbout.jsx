export default function TextAbout() {
    return (
        <div
            className="
            w-[279px] h-[458px]
            md:w-[500px] 
            md:h-[266px]
          bg-white
          text-[#00065E]
            text-[20px]
            font-normal
            leading-[24px]
            px-[12px]
            box-border
            overflow-hidden
            font-['Montserrat',sans-serif]
            bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_23px,#00065E_23px,#00065E_24px)]
            bg-[length:100%_24px]
        "
        >
            <p style={{ margin: '0 0 25px 0' }}>
                Ich heiße Tetiana (Tata) und ich bin 27 Jahre alt.<br />
                Ich komme aus der Ukraine, aus Kiew.
            </p>
            <p style={{ margin: '0 0 25px 0' }}>
                In der Ukraine habe ich den Kurs „Frontend-Entwicklung" an der "ucode" abgeschlossen
                und am React-Marathon bei "SoftServe" teilgenommen.
            </p>
            <p style={{ margin: 0 }}>
                In Deutschland habe ich am "Syntax Institut" die Weiterbildung zur
                IHK IT-Fachkraft für Web-Entwicklung absolviert.
            </p>
        </div>
    );
}