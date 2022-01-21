let userName = prompt("What is your name?")
let userAge = prompt("When your birthday?")
let ostatok
let exceptions

if (userAge >= 1920 && userAge < 2022) {
        userAge = 2022 - userAge;
        console.log(userAge);
        exceptions = userAge;
        if (exceptions === 11) {
            confirm(userName + ", вам " + userAge + " лет?");
        } else if (exceptions === 12) {
            confirm(userName + ", вам " + userAge + " лет?");
        } else if (exceptions === 13) {
            confirm(userName + ", вам " + userAge + " лет?");
        } else if (exceptions === 14) {
            confirm(userName + ", вам " + userAge + " лет?");
        } else {
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
        }
    } else {
        alert("You shall not pass!")
    } 