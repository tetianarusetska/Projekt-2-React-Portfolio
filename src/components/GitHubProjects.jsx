import { useEffect, useState } from "react";
import fetchRepos from "../api/fetchGitHubProjects.js";


export default function GitHubProjects({ username }) {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        async function load() {
            const data = await fetchRepos(username);
            setRepositories(data);
        }
        load();
    }, []);

    return (
        <div className="hidden md:block md:flex md:flex-col md:justify-center md:items-center md:border-1 md:py-[40px]
        md:mt-[100px]
        md:mt-[100px]
        md:gap-[40px]
        ">
            <h1 className="md:font-[Boxing]
            md:text-[42px]
            ">Projekte & Deployments</h1>
            <ul className="md:font-[Montserrat] md:flex md:flex-col 
            md:gap-[18px]
            md:text-[20px]
            ">
                {repositories.slice(0, 3).map((repo) => (
                    <li className="md:flex md:flex-row md:gap-[10px] md:gap-[30px]" key={repo.id}>
                        {repo.name}
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Auf GitHub ansehen
                        </a>
                        {repo.homepage && (
                            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                Live auf Vercel ansehen
                            </a>
                        )}
                    </li>
                ))}
            </ul>
            <a className="md:font-[Montserrat]
            mt-[20px] md:mt-[0px]
            md:text-[20px]
            "
                href="https://github.com/tetianarusetska">Mehr Projekte auf GitHub entdecken</a>
        </div>
    );
}