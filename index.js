const record = [
    { year: "2018", result: "N/A" },
    { year: "2017", result: "L" },
    { year: "2013", result: "W" },
    { year: "2016", result: "N/A" },
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
];

function superbowlWin(record) {
    for (let i of record) {
    if (i.result === "W") {
        return i.year;
    }
    }
}
record.find(superbowlWin)