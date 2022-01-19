let userName = prompt("What is your name?")
let userAge = prompt("When your birthday?")
let ostatok

if (userAge >= 1900) {
    if (userAge < 2022) {
        userAge = 2022 - userAge;
        console.log(userAge);
        ostatok = userAge % 10;
        console.log(ostatok);
        if (ostatok === 1) {
            confirm(userName + ", вам " + userAge + " год?");
        } else if (ostatok === 2) {
            confirm(userName + ", вам " + userAge + " года?");
        } else if (ostatok === 3) {
            confirm(userName + ", вам " + userAge + " года?");
        } else if (ostatok === 4) {
            confirm(userName + ", вам " + userAge + " года?");
        } else if (ostatok === 5) {
            confirm(userName + ", вам " + userAge + " лет?");
        } else if (ostatok === 6) {
            confirm(userName + ", вам " + userAge + " лет?");
        } else if (ostatok === 7) {
            confirm(userName + ", вам " + userAge + " лет?");
        } else if (ostatok === 8) {
            confirm(userName + ", вам " + userAge + " лет?");
        } else if (ostatok === 9) {
            confirm(userName + ", вам " + userAge + " лет?");
        } else if (ostatok === 0) {
            confirm(userName + ", вам " + userAge + " лет?");
        }
    } else {
        alert("Have you ever born?")
    }
    } else {
        alert("We glad to see an old man in our site, but we think it's not true")
    } 

// if (1920 < userAge < 2022){
//     userAge = 2021 - userAge;
//     console.log(userAge);
//     ostatok = userAge % 10;
//     console.log(ostatok);
//     if (ostatok === 1) {
//         confirm(userName + " вам " + userAge + " год?");
//     } else if (ostatok === 2) {
//         confirm(userName + " вам " + userAge + " года?");
//     } else if (ostatok === 3) {
//         confirm(userName + " вам " + userAge + " года?");
//     } else if (ostatok === 4) {
//         confirm(userName + " вам " + userAge + " года?");
//     } else if (ostatok === 5) {
//         confirm(userName + " вам " + userAge + " лет?");
//     } else if (ostatok === 6) {
//         confirm(userName + " вам " + userAge + " лет?");
//     } else if (ostatok === 7) {
//         confirm(userName + " вам " + userAge + " лет?");
//     } else if (ostatok === 8) {
//         confirm(userName + " вам " + userAge + " лет?");
//     } else if (ostatok === 9) {
//         confirm(userName + " вам " + userAge + " лет?");
//     } else if (ostatok === 0) {
//         confirm(userName + " вам " + userAge + " лет?");
//     }
// } else {
//     alert("you shall not pass!")
// }