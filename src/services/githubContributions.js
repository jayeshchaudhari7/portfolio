const GITHUB_USERNAME = "jayeshchaudhari7";

export const getGithubContributions = async () => {
    try {
        const response = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );

        if (!response.ok) {
            throw new Error(
                "Failed to fetch GitHub contributions"
            );
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error(
            "GitHub Contributions Error:",
            error
        );

        throw error;
    }
};