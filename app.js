const message = prompt('Enter a number between 2 and 10:')


// alert('Your input is: ' + message)


if (message >= 2 && message <= 10) {

    const output = document.getElementById("output")
    output.innerHTML = 'Your input number  is ' + message;

    n=message;
    counter=0;
    while (n > .000001 ) {
        n /= 2;
        counter ++;
    }


    const output2 = document.getElementById("output2")
    output2.innerHTML = 'The number of times to divide the number  ' + message + ' by 2 to get a value lower than one millionth is '+ counter;
   

  function pattern1(){
    //var i;
    var i = message;
    message=i;
       for (var i = message; i >0 ; i--)
       {
           for (var j=message; j<= i; j++)
            {
             //console.log("* ");
             const pattern = document.getElementById("pattern")
             pattern.innerHTML = "* ";   
            }
            //console.log("\n");
            const pattern = document.getElementById("pattern")
            pattern.innerHTML = "\n";
       }
    }
   

    //const pattern = document.getElementById("pattern")
    pattern.innerHTML = pattern1();
   



}


if ( message <= 1 || message >= 11) {
    const output = document.getElementById("output")
    output.innerHTML = 'Your input is ' + message + '. The valid input number is between 2 and 10. Please reload this page and try again.'
    }


    