import React, {
    useEffect,
    useState,
} from "react";

import {
    ArrowUpRight,
} from "lucide-react";

import {
    getGithubData,
} from "../services/githubApi";

import {
    getGithubContributions,
} from "../services/githubContributions";

import ContributionGraph from "./ContributionGraph";



const GithubCard = () => {

    const [data, setData] =
        useState(null);

    const [contributions, setContributions] =
        useState(null);

    const [activity, setActivity] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState(false);

    useEffect(() => {

        const fetchGithub = async () => {
            try {
                const [
                    githubResult,
                    contributionResult,
                    activityResult,
                ] = await Promise.all([
                    getGithubData(),
                    getGithubContributions(),

                ]);

                setData(
                    githubResult
                );

                setContributions(
                    contributionResult
                );

                setActivity(
                    activityResult
                );

            } catch (error) {

                console.error(
                    error
                );
                setError(true);

            } finally {
                setLoading(false);
            }
        };

        fetchGithub();

    }, []);


    if (loading) {

        return (
            <div
                className="
                    h-[500px]
                    animate-pulse
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                "
            />
        );

    }

    if (error || !data) {

        return (
            <div
                className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/3
                    p-8
                    text-white/50
                "
            >
                Unable to load GitHub data.
            </div>
        )
    }

    const {
        profile,
        repositories,
    } = data;


    return (

        <div
            className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/2
                p-6
                backdrop-blur-xl
                md:p-8
            "
        >

            <div
                className="
                    flex
                    flex-col
                    gap-5
                    md:flex-row
                    md:items-center
                    md:justify-between
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-4
                    "
                >

                    <img
                        src={profile.avatar_url}
                        alt={profile.login}
                        className="
                            h-14
                            w-14
                            rounded-full
                            border
                            border-white/10
                            object-cover
                        "
                    />


                    <div>
                        <h3
                            className="
                                mt-1
                                text-xl
                                font-medium
                                tracking-tight
                                text-white
                            "
                        >
                            {profile.name ||
                                profile.login}
                        </h3>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-white/30
                            "
                        >
                            @{profile.login}
                        </p>

                    </div>

                </div>


                <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        group
                        flex
                        w-fit
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        px-4
                        py-2
                        text-sm
                        text-white/60
                        transition-all
                        duration-300
                        hover:border-white/30
                        hover:bg-white/5
                        hover:text-white
                    "
                >

                    View profile

                    <ArrowUpRight
                        size={15}
                        className="
                            transition-transform
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                        "
                    />

                </a>

            </div>

            {profile.bio && (

                <p
                    className="
                        mt-6
                        max-w-2xl
                        text-sm
                        leading-6
                        text-white/40
                    "
                >
                    {profile.bio}
                </p>

            )}

            <div className="mt-10">

                <div
                    className="
                        mb-4
                        flex
                        items-end
                        justify-between
                    "
                >

                    <div>

                        <p
                            className="
                                text-sm
                                text-white/40
                            "
                        >
                            GitHub activity
                        </p>


                        {contributions?.total && (

                            <h3
                                className="
                                    mt-1
                                    text-xl
                                    text-white
                                "
                            >
                                {getTotalContributions(
                                    contributions
                                )}{" "}
                                contributions
                            </h3>

                        )}

                    </div>

                </div>


                <div
                    className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/5
                        bg-black/30
                        p-5
                    "
                >

                    <ContributionGraph
                        data={
                            contributions
                        }
                    />

                </div>

            </div>

            <div
                className="
                    mt-6
                    grid
                    grid-cols-2
                    gap-3
                    md:grid-cols-3
                "
            >

                <Stat
                    label="Public repos"
                    value={
                        profile.public_repos
                    }
                />

                <Stat
                    label="Followers"
                    value={
                        profile.followers
                    }
                />

                <Stat
                    label="Following"
                    value={
                        profile.following
                    }
                />

            </div>



        </div>
    );
};



const Stat = ({
    label,
    value,
}) => {
    return (
        <div
            className="
                rounded-2xl
                border
                border-white/5
                bg-white/[0.02]
                p-4
            "
        >
            <p
                className="
                    text-xs
                    text-white/30
                "
            >
                {label}
            </p>

            <p
                className="
                    mt-1
                    text-xl
                    text-white
                "
            >
                {value}
            </p>

        </div>

    );
};


const getTotalContributions = (
    data
) => {

    if (!data?.total) {
        return 0;
    }

    if (
        typeof data.total ===
        "number"
    ) {
        return data.total;
    }

    const values =
        Object.values(
            data.total
        );

    return values.reduce(
        (total, value) =>
            total +
            Number(value || 0),
        0
    );
};


export default GithubCard;