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
   
const pattern = document.getElementById("pattern");
    i=message;
    
    
       function p()
       {

           for ( i=1; i<=message; i++)
           {
               for (j=message; j>=i; j--)
                {
                 document.getElementById("pattern").innerHTML += "* ";
                    
                // document.write("* ");
             
                // document.write("* ");
                
                // pattern.innerHTML = ("* ");

                }
                document.getElementById("pattern").innerHTML += "<br>";
              
                // document.write("<br>");
                // pattern.innerHTML = ("<br>");
    
           }
    
       }
   

    p();



}


if ( message <= 1 || message >= 11) {
    const output = document.getElementById("output")
    output.innerHTML = 'Your input is '.fontcolor("red") + message.fontcolor("red") + '. The valid input number is between 2 and 10. Please reload this page and try again.'.fontcolor("red")
    }

if ( message==="") {
    const output = document.getElementById("output")
    output.innerHTML = 'Your input is not valid. Enter a number between 2 and 10. Please reload this page and try again.'.fontcolor("red")
    }
if (isNaN(message) ) {
    const output = document.getElementById("output")
    output.innerHTML = 'Your input is not valid. Enter a number between 2 and 10. Please reload this page and try again.'.fontcolor("red")
        }
        
    