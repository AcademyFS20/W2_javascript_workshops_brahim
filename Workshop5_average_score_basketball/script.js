// const karim = [16,45,80];
// const amine = [19,40,99];
// const salim = [20,88,120];

// console.log(karim);
// console.log(karim.length);


// function winner(){
//     let sumk = karim.reduce((previous, current) => current += previous);
//     let scoreK = sumk / karim.length;
    
//     console.log(scoreK);
    
//     let sumA = amine.reduce((previous, current) => current += previous);
//     let scoreA = sumA / amine.length;
//     console.log(scoreA);
    
//     let sumS = salim.reduce((previous, current) => current += previous);
//     let scoreS = sumS / salim.length;
//     console.log(scoreS);
    
//     if (scoreK > scoreA && scoreK > scoreS){
//         console.log("Karim is the winner");
//     }
     
//     else if (scoreA > scoreK && scoreA > scoreS){
//         console.log("Amin is the winner");
//     }
//     else if (scoreS > scoreK && scoreS > scoreA){
//         console.log(`"Salim is the winner with the score", ${scoreS} `);
//     }
//     else {
//         console.log("a tie")
//     }
// }

// console.log(winner());



// /////////////////////////////////////////////////////////////////////////////////////////
///////////Refectoring ////////////////////////////////////////////////////////

// declarinf one array with three objects. and each object has an array scores.
const players = [

    {
        id:1,
        name:"karim",
        scores:[16,45,80],
    },
    {
        id:2,
        name:"amine",
        scores:[19,40,99],
    },
    {
        id:3,
        name:"salim",
        scores:[19,40,99],
    }
]

// function averagescore(){
//     let sum = players.scores.reduce((previous, current) => current += previous);
//     let score = sum / players.scores.length;
// }

console.log(players)
const [{},{},{}] = players;
console.log({})
const {id,name,scores} = Object;
console.log(id);