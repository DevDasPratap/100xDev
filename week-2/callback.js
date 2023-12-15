/**
 * Register
 * Send welcome email
 * Login
 * Get user details
 * Display user data
 */

// sync code
// function register() {
//     console.log('Register done')
// }
// function sendEmail() {
//     console.log('Email send')
// }
// function login() {
//     console.log('Login success')
// }
// function getUserData() {
//     console.log('Get user data')
// }
// function displayUserData() {
//     console.log('Display user data')
// }

// register()
// sendEmail()
// login()
// getUserData()
// displayUserData()

// console.log('Next task work')

// Using Callbacks
// function register(callback) {
//     console.log('Register done');
//     callback();
// }

// function sendEmail(callback) {
//     console.log('Email send');
//     callback();
// }

// function login(callback) {
//     console.log('Login success');
//     callback();
// }

// function getUserData(callback) {
//     console.log('Get user data');
//     callback();
// }

// function displayUserData() {
//     console.log('Display user data');
// }
// // callback hell
// register(function () {
//     sendEmail(function () {
//         login(function () {
//             getUserData(function () {
//                 displayUserData();
//                 console.log('Next task work');
//             });
//         });
//     });
// });

// Using Callbacks with set time

// function register(callback) {
//     console.log('Registering...');
//     setTimeout(() => {
//         console.log('Register done');
//         callback();
//     }, 1000);
// }

// function sendEmail(callback) {
//     console.log('Sending Email...');
//     setTimeout(() => {
//         console.log('Email sent');
//         callback();
//     }, 1000);
// }

// function login(callback) {
//     console.log('Logging in...');
//     setTimeout(() => {
//         console.log('Login success');
//         callback();
//     }, 1000);
// }

// function getUserData(callback) {
//     console.log('Getting user data...');
//     setTimeout(() => {
//         console.log('Got user data');
//         callback();
//     }, 1000);
// }

// function displayUserData() {
//     console.log('Displaying user data');
// }

// register(() => {
//     sendEmail(() => {
//         login(() => {
//             getUserData(() => {
//                 displayUserData();
//                 console.log('Next task work');
//             });
//         });
//     });
// });

// Using Promises:
// function register() {
//   return new Promise((resolve) => {
//     console.log("Registering...");
//     setTimeout(() => {
//       console.log("Register done");
//       resolve();
//     }, 1000);
//   });
// }

// function sendEmail() {
//   return new Promise((resolve) => {
//     console.log("Sending Email...");
//     setTimeout(() => {
//       console.log("Email sent");
//       resolve();
//     }, 1000);
//   });
// }

// function login() {
//   return new Promise((resolve) => {
//     console.log("Logging in...");
//     setTimeout(() => {
//       console.log("Login success");
//       resolve();
//     }, 1000);
//   });
// }

// function getUserData() {
//   return new Promise((resolve) => {
//     console.log("Getting user data...");
//     setTimeout(() => {
//       console.log("Got user data");
//       resolve();
//     }, 1000);
//   });
// }

// function displayUserData() {
//   console.log("Displaying user data");
// }

// register()
//   .then(() => sendEmail())
//   .then(() => login())
//   .then(() => getUserData())
//   .then(() => {
//     displayUserData();
//     console.log("Next task work");
//   });


// Async await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function register() {
    console.log('Registering...');
    await delay(1000);
    console.log('Register done');
}

async function sendEmail() {
    console.log('Sending email...');
    await delay(800);
    console.log('Email sent');
}

async function login() {
    console.log('Logging in...');
    await delay(1000);
    console.log('Login success');
}

async function getUserData() {
    console.log('Getting user data...');
    await delay(500);
    console.log('Got user data');
}

function displayUserData() {
    console.log('Displaying user data');
}

async function authenticate() {
    try {
        await register();
        await sendEmail();
        await login();
        await getUserData();
        displayUserData();
        console.log('Next task work');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

authenticate();
