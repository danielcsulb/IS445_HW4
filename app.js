const message = prompt('Enter a number between 2 and 10:')

// alert('Your input is: ' + message)


if (message >= 2 && message <= 10) {

    const output = document.getElementById("output")
    output.innerHTML = 'Your input number  is ' + message;


    const output2 = document.getElementById("output2")
    output2.innerHTML = 'The number of times to divide the number  ' + message + ' by 2 to get a value lower than one millionth is ';
       
}


// if ((message > 1) || (message < 11)) {
// const output2 = document.getElementById("output2")
// output2.innerHTML = 'The number of time to divide the number ' + message + ' by 2 to get a value less than one millionth is ' 
// }

if ( message <= 1 || message >= 11) {
    const output = document.getElementById("output")
    output.innerHTML = 'Your input is ' + message + '. The valid input number is between 2 and 10. Please reload this page and try again.'
    }


    