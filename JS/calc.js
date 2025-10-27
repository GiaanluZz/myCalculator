//array di button
let allBtn = document.querySelectorAll("button");
let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
let result = document.getElementById("result");

allBtn.forEach((btn) => {
    
    btn.addEventListener("click", (event) => {

        //console.log(event.target.attributes);
        
        let a = parseFloat(val1.value);
        let b = parseFloat(val2.value);

        if (isNaN(a) || isNaN(b)) {

            result.innerText = "Error: inserisci numeri validi";
        }

        let operation = event.target.attributes["operation"].value;

        let res = performOperation(a, b, operation); 
        result.innerText = "Result: " + res;


        if (res instanceof Error) { //controlla se il risultato è un numero
            result.innerText = "Error: " + res.message;
        } else {
            result.innerText = "Result: " + res;
        }

        console.log("Res: ", res); 
    })
});

/**
 * @param {number} a 
 * @param {number} b 
 * @param {string} operation 
 * @returns {number | error};
 */


function performOperation(a, b, operation) {

    switch (operation) {

        case "+":
            return somma(a, b);

        case "-":
            return sottrazione(a, b);

        case "*":
            return moltiplicazione(a, b);

        case "/":
            return divisione(a, b);

        default:
            return Error("Operazione non valida");
    }
}


//funzioni

function somma(a, b) {

    return a + b;
}

function sottrazione(a, b) {

    return a - b;
}

function moltiplicazione(a, b) {

    return a * b;
}

function divisione(a, b) {

    return a / b;
}

