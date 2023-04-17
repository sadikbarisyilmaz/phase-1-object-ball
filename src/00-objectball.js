const gameObject = () => {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }
    }
}

const numPointsScored = (name) => {
    let playerNames = gameObject()["home"]["players"]
    for (let key in playerNames) {

        if (key === name) {
            console.log(name, ": ", playerNames[key]["points"]);
            return playerNames[key]["points"]
        }
    }
}
numPointsScored("Mason Plumlee")

const shoeSize = (name) => {
    let playerNames = gameObject()["home"]["players"]
    for (let key in playerNames) {

        if (key === name) {
            console.log(name, ": ", playerNames[key]["shoe"]);
            return playerNames[key]["shoe"]
        }
    }

}
shoeSize("Mason Plumlee")

const teamColors = (name) => {
    let game = gameObject()
    for (let key in game) {
        let team = game[key]["teamName"]
        if (team === name) {
            console.log(name, ": ", game[key]["colors"]);
            return game[key]["colors"]
        }
    }
}
teamColors("Charlotte Hornets")

const teamNames = () => {
    let game = gameObject()
    let arr = []
    for (let key in game) {
        let team = game[key]["teamName"]
        arr.push(team)
    }
    console.log("Teams", arr);
    return arr
}
teamNames()

const playerNumbers = (name) => {
    let game = gameObject()
    let arr = []
    for (let key in game) {
        let team = game[key]["teamName"]
        if (team === name) {
            let players = game[key]["players"]
            for (let key in players) {
                arr.push(players[key]["number"]);
            }
        }
    }
    console.log(name, ": ", arr);
    return arr
}
playerNumbers("Charlotte Hornets")

const playerStats = (name) => {
    let game = gameObject()
    for (let key in game) {
        let players = game[key]["players"]
        for (let key in players) {
            if (key === name) {
                console.log(name, ": ", players[key]);
                return players[key]
            }
        }
    }
}
playerStats("Mason Plumlee")

const bigShoeRebounds = () => {
    let game = gameObject()
    let shoeArr = [{ "": 1 }]
    for (let key in game) {
        let players = game[key]["players"]

        for (let key in players) {

            if (players[key]["shoe"] > Object.values(shoeArr[shoeArr.length - 1])) {
                shoeArr.push({ [key]: players[key]["shoe"] })
            }
        }
    }
    let biggestShoe = Object.keys(shoeArr[shoeArr.length - 1])[0]
    for (let key in game) {
        return game[key]["players"][biggestShoe]["rebounds"];
    }

}

console.log("bigShoeRebounds: ", bigShoeRebounds())


const mostPointsScored = () => {
    let game = gameObject()
    let pointsArr = [{ "": 1 }]
    for (let key in game) {
        let players = game[key]["players"]

        for (let key in players) {

            if (players[key]["points"] > Object.values(pointsArr[pointsArr.length - 1])) {
                pointsArr.push({ [key]: players[key]["points"] })
            }
        }
    }
    let biggestpoints = { [Object.keys(pointsArr[pointsArr.length - 1])[0]]: Object.values(pointsArr[pointsArr.length - 1])[0] }
    return biggestpoints
}
console.log("mostPointsScored: ", mostPointsScored());

const winningTeam = () => {
    let game = gameObject()
    let pointsArr = []

    for (let team in game) {
        let players = game[team]["players"]
        for (let key in players) {
            pointsArr.push({ [team]: [players[key]["points"]] })
        }
    }
    console.log(pointsArr);
    const homePoints = []
    const awatPoints = []
    pointsArr.forEach(x => {
        if (Object.keys(x)[0] === "home") {
            homePoints.push(Object.values(x)[0][0])
            // console.log("home");
        } else {
            awatPoints.push(Object.values(x)[0][0])
            // console.log("away");
        }
    });

    if (homePoints.reduce((a, b) => a + b) > awatPoints.reduce((a, b) => a + b)) {
        return "Home Team Wins"
    } else {
        return "Away Team Wins"
    }
}
console.log(winningTeam())

const playerWithLongestName = () => {
    let game = gameObject()
    let teamPlayersArr = []
    let longestName = [{ "": 0 }]
    for (let key in game) {
        teamPlayersArr.push(Object.keys(game[key]["players"]))
    }
    teamPlayersArr.forEach(x => x.forEach(x => {
        if (x.length > Object.values(longestName[longestName.length - 1])) {
            longestName.push({ [x]: x.length })
        }
    }))
    return longestName[longestName.length - 1]
}
console.log("Longest Name:", playerWithLongestName())

const doesLongNameStealATon = () => {
    const longestName = Object.keys(playerWithLongestName())[0]
    let stealsArr = []
    let game = gameObject()
    let allPlayers = []
    for (let key in game) {
        let players = game[key]["players"]

        for (let key in players) {
            let player = players[key]
            allPlayers.push({ [key]: player["steals"] })
        }

    }
    allPlayers.forEach(x => {
        if (Object.keys(x)[0] === longestName) {
            stealsArr.push(x)
        } else { return false }
    })
    const exceptLongestPlayerArr = allPlayers.filter(x => x !== stealsArr[0])
    const isBiggerArr = [stealsArr[0]]
    for (let i = 0; i < exceptLongestPlayerArr.length; i++) {
        if (Object.values(exceptLongestPlayerArr[i])[0] > Object.values(stealsArr[0])[0]) {
            isBiggerArr.push(exceptLongestPlayerArr[i])
        } else { }
    }
    if (Object.values(isBiggerArr[isBiggerArr.length - 1])[0] === Object.values(stealsArr[0])[0]) {
        return true
    } else { return false }
}
console.log("doesLongNameStealATon: ", doesLongNameStealATon())