// Write your code in this file!
let currentUser = "string";
const upperCaseCurrentUser = currentUser.toUpperCase();
const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);


// let welcomeMessage = 'Welcome to Flatbook, ' + ${currentUser} + '!';

// function welcomeMessage () {
//     console.log('Welcome to Flatbook, ' + currentUser + '!');
// }

let welcomeMessage = `Welcome to Flatbook, ${currentUser} !`;


// let excitedWelcomeMessage = 'WELCOME TO FLATBOOK, ' + ${currentUser} + '!';

let excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${upperCaseCurrentUser} !`;

// let shortGreeting = 'Welcole

let shortGreeting = `Welcome, ${firstInitial} !`;