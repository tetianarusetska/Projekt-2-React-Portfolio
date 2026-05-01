import { useForm } from "react-hook-form"
import schema from "../schemas/FormValid.js"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"

export default function Form() {
    const [sent, setSent] = useState(false);               //speichert, ob das Formular gesendet wurde
    const [loading, setLoading] = useState(false);         //speichert, ob gerade gesendet wird

    const {
        register,                                          //verbindet Inputs mit dem Formular
        handleSubmit,                                      //verarbeitet das Absenden
        reset,                                             //leert das Formular
        formState: { errors },                             //enthält Fehlermeldungen 
    } = useForm({
        mode: "onSubmit",                                  //Validierung passiert erst beim Absenden
        resolver: yupResolver(schema),                     //hier wird das Yup-Schema für die Validierung benutzt
    });

    const onSubmit = async (data) => {                     //diese Funktion wird beim Absenden aufgerufen.
        try {
            setLoading(true);                              //ich starte den Loading-Zustand

            const response = await fetch("https://formspree.io/f/mkokllka", {       //ich sende die Daten an Formspree
                method: "POST",                                                     //die Daten werden gesendet.
                headers: {
                    "Content-Type": "application/json",                             //ich sage, dass die Daten im JSON-Format sind
                    Accept: "application/json",                                     
                },
                body: JSON.stringify(data),                                         //ich konvertiere die Formulardaten in JSON
            });

            if (response.ok) {                                                       //wenn die Anfrage erfolgreich war:
                setSent(true);                                                       //ich zeige eine Erfolgsmeldung
                reset();                                                             //ich leere das Formular
            }
        } catch (error) {
            console.log("ERROR:", error);                                           //Fehler werden in der Konsole angezeigt
        } finally {
            setLoading(false);                                                      //Loading wird wieder deaktiviert
        }
    };

    return (
        <form
            className="flex flex-col gap-[20px] mt-[180px] ml-[160px]"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col gap-[10px]">
                <label className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[32px]">
                    Vorname, Nachname
                </label>

                <input
                    type="text"
                    className="border-1 h-[26px] w-[450px] leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px]"
                    {...register("name")}
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div className="flex flex-col gap-[10px]">
                <label className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[32px]">
                    Email
                </label>

                <input
                    type="email"
                    className="border-1 h-[26px] w-[450px] leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px]"
                    {...register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-[10px]">
                <label className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[32px]">
                    Brief
                </label>

                <textarea
                    maxLength={300}
                    className="border-1 h-[100px] w-[450px] leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px]"
                    {...register("message")}
                />
                {errors.message && <p>{errors.message.message}</p>}
            </div>

            <button
                type="submit"
                className="w-[96px] h-[31px] text-black bg-white"
                disabled={loading}
            >
                {loading ? "Sending..." : "Absenden"}
            </button>

            {sent && (
                <p className="text-white">
                    Danke für Ihre Nachricht!
                </p>
            )}
        </form>
    );
}