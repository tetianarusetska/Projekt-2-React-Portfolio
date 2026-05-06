export default async function fetchRepos(username) {
    try {
        const res = await fetch(
            `https://api.github.com/users/${username}/repos`
        );

        if (!res.ok) {
            throw new Error(`HTTP-Fehler: ${res.status}`);
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error("Fehler beim Fetch:", error);
        return [];
    }
}