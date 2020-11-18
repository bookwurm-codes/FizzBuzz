function FizzBuzz(fizz, buzz) {
    let returnValue = [];

    for(let i = 1; i <=100; i++) {        
        returnValue[i] = (((i%fizz == 0)?"Fizz":"") + ((i%buzz == 0)?"Buzz":"") || i.toString());
    }

    return returnValue;
}

function display() {
    let fizz = document.getElementById("fizz").value;
    let buzz = document.getElementById("buzz").value;
    let output = [];
    let formatted = "";

    output = FizzBuzz(fizz, buzz);
    formatted = formatAsTable(output, 5);
    document.getElementById("results").innerHTML = formatted;
}

function formatAsTable(arr, columns) {
    let output = "<tr>";

    for (let index = 1; index < arr.length; index++) {
        const element = arr[index];
        output += `<td>${element}</td>`;
        if (index % columns === 0) {
            output += "</tr><tr>";
        }
    }

    return output += "</tr>";
}