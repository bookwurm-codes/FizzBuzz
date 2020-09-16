function FizzBuzz(fizz, buzz) {
    let returnValue = "";

    for(let i = 1; i <=100; i++) {        
        returnValue += (((i%fizz == 0)?"Fizz":"") + ((i%buzz == 0)?"Buzz":"") || i) + " ";
    }

    return returnValue;
}


function display() {
    let output = "";
    let fizz = document.getElementById("fizz").value;
    let buzz = document.getElementById("buzz").value;
    output = FizzBuzz(fizz, buzz);
    document.getElementById("results").innerHTML = output;
}