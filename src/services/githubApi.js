const GITHUB_USERNAME = "jayeshchaudhari7";

const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;

export const getGithubData = async () => {
    try {
        const [profileResponse, reposResponse] =
            await Promise.all([
                fetch(API_URL),

                fetch(
                    `${API_URL}/repos?sort=updated&per_page=6`
                ),
            ]);

        if (!profileResponse.ok) {
            throw new Error(
                "Failed to fetch GitHub profile"
            );
        }

        if (!reposResponse.ok) {
            throw new Error(
                "Failed to fetch GitHub repositories"
            );
        }

        const profile =
            await profileResponse.json();

        const repositories =
            await reposResponse.json();

        return {
            profile,
            repositories,
        };

    } catch (error) {
        console.error(
            "GitHub API Error:",
            error
        );

        throw error;
    }
};

