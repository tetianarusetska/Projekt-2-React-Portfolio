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
        <ul>
            {repositories.slice(0, 3).map((repo) => (
                <li key={repo.id}>{repo.name} {repo.description}</li>
            ))}
        </ul>
    );
}