function gameObject(){
    const obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"] ,
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
            colors: ["Turquoise", "Purple"] ,
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
    return obj
}

function upperCase(name){
    return name.split(' ').map(element => {
       return element.charAt(0).toUpperCase() + element.slice(1)
    }).join(' ')
}

function homeTeamName(){
    let obj = gameObject()
    return obj.home.teamName
}
/* Easy version */

// function numPointsScored(name){
//     let obj = gameObject()
//     if( name in obj.home.players){
//         return obj.home.players[name].points
//     } else {
//         return obj.away.players[name].points
//     }
// }



function numPointsScored(name){
    let obj = gameObject()
    const arr = Object.keys(obj).map(item => {
        if(upperCase(name) in obj[item].players){
        return obj[item].players[name].number
        } else {
            return `${name} not found`
        }
    })
    
    return arr.find((item) => {
        if(item !== undefined){
            return item
        }
    })
}

function shoeSize(name){
    let obj = gameObject()
    if( name in obj.home.players){
        return obj.home.players[name].shoe
    } else {
        return obj.away.players[name].shoe
    }
}

function teamColors(teamName){
    let obj = gameObject()
    if(teamName === obj.home.teamName){
        return obj.home.colors
    } 
    else if(teamName === obj.away.teamName) {
        return obj.away.colors
    } else{
      return `${teamName} not found`
    }
}

function teamNames(){
    let obj = gameObject()
    return Object.keys(obj).map((item) => {
     return obj[item].teamName
    })
}

function playerNumbers(team){
    let obj = Object.values(gameObject())
    newArr = []
    for(i in obj){
        if(team === obj[i].teamName){
           Object.keys(obj[i].players).forEach((player) => {
                Object.keys(obj[i].players[player]).forEach((value) => {
                    if(value === 'points'){
                        let point = obj[i].players[player][value]
                        newArr.push(point)
                    }
                })
            })
        }
    }
   return newArr
}

function playerStats(name){
    let obj = gameObject()
    if( name in obj.home.players){
        return obj.home.players[name]
    } else {
        return obj.away.players[name]
    }
}

function bigShoeRebounds(){
    let obj = gameObject()
    const arr = []
    let result
    for(let team of Object.keys(obj)){
       let playerList = Object.keys(obj[team].players)
       for(let player of playerList) {
            let shoe = shoeSize(player)
            arr.push(shoe)
        }
        let answer = Object.keys(obj[team].players).find(player => {
            if(obj[team].players[player].shoe === arr.reduce((a,b) => {return Math.max(a,b)})){
                return player
            } 
        })
        if(answer !== undefined){
            result = `${answer} has a shoesize of ${arr.reduce((a,b) => {return Math.max(a,b)})} and ${obj[team].players[answer].rebounds} rebounds`
        }
    }
    return result
}


// need to grab obj
// then find obj with biggest shoe size
// return obj
// access obj.rebounds
// return rebound value with obj name