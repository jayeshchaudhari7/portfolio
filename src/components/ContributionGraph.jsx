import React from "react";

const ContributionGraph = ({ data }) => {

    if (!data || !data.contributions) {
        return null;
    }

    const contributions =
        data.contributions;

    return (
        <div className="w-full overflow-x-auto">

            <div className="min-w-[760px]">

                {/* ==========================
                    MONTH LABELS
                ========================== */}

                <div className="mb-3 ml-8 flex justify-between pr-2">

                    {getMonths(contributions).map(
                        (month) => (
                            <span
                                key={month.date}
                                className="
                                    text-[11px]
                                    text-white/40
                                "
                            >
                                {month.label}
                            </span>
                        )
                    )}

                </div>


                {/* ==========================
                    GRAPH
                ========================== */}

                <div className="flex gap-2">

                    {/* DAYS */}

                    <div
                        className="
                            flex
                            w-6
                            flex-col
                            justify-between
                            py-1
                        "
                    >
                        <span className="text-[10px] text-white/30">
                            Mon
                        </span>

                        <span className="text-[10px] text-white/30">
                            Wed
                        </span>

                        <span className="text-[10px] text-white/30">
                            Fri
                        </span>
                    </div>


                    {/* CONTRIBUTION CELLS */}

                    <div
                        className="
                            grid
                            grid-flow-col
                            grid-rows-7
                            gap-[4px]
                        "
                    >

                        {contributions.map(
                            (day) => (
                                <div
                                    key={day.date}
                                    title={`
                                        ${day.count}
                                        contributions
                                        on
                                        ${day.date}
                                    `}
                                    className="
                                        h-[11px]
                                        w-[11px]
                                        rounded-[2px]
                                        transition-all
                                        duration-200
                                        hover:scale-125
                                    "
                                    style={{
                                        backgroundColor:
                                            getContributionColor(
                                                day.level
                                            ),
                                    }}
                                />
                            )
                        )}

                    </div>

                </div>


                {/* ==========================
                    LEGEND
                ========================== */}

                <div
                    className="
                        mt-5
                        flex
                        items-center
                        justify-end
                        gap-2
                        text-[11px]
                        text-white/30
                    "
                >

                    <span>Less</span>

                    <Square level={0} />
                    <Square level={1} />
                    <Square level={2} />
                    <Square level={3} />
                    <Square level={4} />

                    <span>More</span>

                </div>

            </div>

        </div>
    );
};


// ======================================
// CONTRIBUTION COLOR
// ======================================

const getContributionColor = (level) => {

    switch (level) {

        case 1:
            return "#0e4429";

        case 2:
            return "#006d32";

        case 3:
            return "#26a641";

        case 4:
            return "#39d353";

        default:
            return "#161b22";
    }
};


// ======================================
// LEGEND SQUARE
// ======================================

const Square = ({ level }) => {

    return (
        <span
            className="
                h-[11px]
                w-[11px]
                rounded-[2px]
            "
            style={{
                backgroundColor:
                    getContributionColor(
                        level
                    ),
            }}
        />
    );
};


// ======================================
// MONTHS
// ======================================

const getMonths = (contributions) => {

    const months = [];

    contributions.forEach((day) => {

        const date =
            new Date(day.date);

        const month =
            date.getMonth();

        const year =
            date.getFullYear();

        const key =
            `${year}-${month}`;

        if (
            !months.some(
                (item) => item.key === key
            )
        ) {

            months.push({
                key,
                date: day.date,
                label: date.toLocaleString(
                    "en-US",
                    {
                        month: "short",
                    }
                ),
            });

        }

    });

    return months;
};

export default ContributionGraph;