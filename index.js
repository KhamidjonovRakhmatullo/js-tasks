// Speed limit 

// function speedLimit() {

//     if (speed <= 60){
//         console.log ("Speed is normal")
//     }
//     else if ( speed >= 65 && speed < 80){
//         console.log("Joooqq 25$ for the speed - " + speed + "km/h")
//     }
//     else if (speed >= 80 && speed < 90){
//         console.log ("Gold Ticket for the speed - " + speed + " km/h")
//     }
//     else{
//         console.log ("Sugar Daddy is waiting front the house")
//     }
// }

// speedLimit (speed = 100);



// Testing temperature of the room with 3 cases

// function TestingTemperature (temperatureOFroom){
// switch (temperatureOFroom){
//     case "5-degree":
//         console.log ("Temperature of your room is cold!")
//         break;
//     case "12-degree":
//         console.log ("Temoerature of your room is good!")
//         break;
//     case "22-degree":
//         console.log ("Temperature of your room is HOT!!!")
//         break;

// }
// }

// TestingTemperature("5-degree")



//

// for / loop

// function step() {
//     console.log(`one step`);
//   }
//   for (let i = 0; i < 3; i++) {
//     step();
//   }  


//sleeping hour

// function testSleepingHour(){
//     switch (hour){
//         case "5-hours":
//             console.log ("Sleep more!")
//             break;

//          case "7-hours":
//             console.log("It's normal!")
//             break;
        
//         case "11-hours":
//             console.log ("No more than it!")
//             break;
// }
// }

// testSleepingHour(hour = "11-hours");


//Iphone price list


// function IphonePriceList(){
//     switch (price) {
//         case "Iphone 15":
//              console.log ("1000$")
//              break;

//         case "Iphone 15 plus":
//              console.log ("1100$")
//              break;

//         case "Iphone 15 pro":
//             console.log ("1200$")
//             break;

//         case "Iphone 15 pro max":
//             console.log ("1300$")
//             break;

//     }
// };

// IphonePriceList(price = "Iphone 15 pro max")



// Voting

// const age = 17
// const votingAge = age < 18 ? "You can not vote sorry!" : "Thanks for voting"
// console.log (votingAge)



//do / while

// let weather = 20

// while (weather > 18){
//     console.log ("Weather is hot!")
//     break;
// }

// do{
//     console.log("Weather is cold!")
//     break;
// } while (weather > 18)


// array


// let FruitList = ["Orange", "Pineapple", "Banana", "Apple"] 

// console.log (FruitList);

// console.log (FruitList.push("Strawbarry")) //to adding " " to the end
// console.log (FruitList)

// console.log (FruitList.unshift("Melon")) //to adding " " to the start
// console.log (FruitList)

// console.log (FruitList.pop ()) //to delete " " from the end
// console.log (FruitList)

// console.log (FruitList.shift()) // to delete " " from the start
// console.log (FruitList)

// console.log (FruitList.splice(3)) // to splice from-to. 
// console.log (FruitList)



// let FruitList = ["Orange", "Pineapple", "Banana", "Apple"] 
// let VegetablesList = ["Carrot", "Potato", "Onion"]


// console.log (FruitList)
// console.log (VegetablesList)

// console.log (FruitList.concat(VegetablesList)) // to collab

// console.log (FruitList.concat(VegetablesList).sort()) //to sort "A, B, C"

// console.log (FruitList.join(" aa ")) //adding " " to the between of each array, and counts each index


///

// const candidates = [
//     {
//         name: "John",
//         fname: "Smith",
//         age: 22,
//         country: "USA",
//     },
//     {
//         name: "Lucy",
//         fname: "Mark",
//         age: 17,
//         country: "Australia"
//     },
//     {
//         name: "Bob",
//         fname: "Marley",
//         age: 27,
//         country: "UK",
//     }
// ]

// for (i = 0; i < 3; i ++){

//     // console.log(candidates)

//     console.log(i);

//     console.log (candidates[i].name)

// };


///

// let phoneModels =[ "Apple", "Samsung", "Motorola", "Huawei"]

// console.log (phoneModels)

// console.log (phoneModels.unshift("Nokia"))
// console.log (phoneModels)

// console.log (phoneModels.pop())
// console.log (phoneModels)

// console.log (phoneModels.sort())



///

// let beveragesMenu = ["Fanta", "Cider", "Sprite", "Coke"]
// let snacksMenu = ["Snickers", "Bounty", "KitKat"]
// let names = [ "Umar", "Holid", "AbuBakr", "Saad"]

// // console.log (beveragesMenu)

// // console.log (beveragesMenu.unshift("Pepsi"))
// // console.log (beveragesMenu)

// // console.log (snacksMenu.push("Mars"))
// // console.log (snacksMenu)

// console.log (beveragesMenu.concat(snacksMenu).sort())

// console.log (names.sort().join(" "))


///


const subjects = ["Math", "Econimic in Dealy Life", "International Comminucations", "International Trade and Commerce"]
const schedule = [ "Monday", "Tuesday", "Friday", "Sunday"]

console.log (subjects.shift())
// console.log (subjects)

console.log (schedule.pop())
// console.log (schedule)


function ChekingSub(schedule){
switch (schedule){
    case "Monday":
        console.log (subjects.slice(0,1))
        break;

    case "Tuesday":
        console.log (subjects.slice(1,2))
        break;

    case "Friday":
        console.log (subjects.slice(-1))
}
}

ChekingSub("Friday")

