const message = prompt('Enter a number between 2 and 10:')

// alert('Your input is: ' + message)

if (message == 6) {
const output = document.getElementById("output")
output.innerHTML = 'Your input number  is ' + message };

    if ( (message <= 1) || (message >= 11)) {
        const output = document.getElementById("output")
        output.innerHTML = 'Your input is ' + message + '. The valid input number is between 2 and 10. Please reload this page and try again.'
        }
    