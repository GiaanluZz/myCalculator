//array di button
let allBtn = document.querySelectorAll("button");
let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
let result = document.getElementById("result");
let memory = document.getElementById("memory");

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

            let mylog = new mylog(a, b, operation);

            let btnload = document.createElement("button");
            btnload.innerText = "LOAD";
            btnload.addEventListener("click", mylog.fnLoad);

            let LogLine = document.createElement("li");
            LogLine.innerText = `Eseguito ${mylog.val1} ${mylog.operation} ${mylog.val2}`;
            LogLine.append(btnload);
            
            memory.appendChild(LogLine);
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

function MyLog(a, b, operation){

    this.val1 = a;
    this.val2 = b;
    this.operation = operation;

    this.fnload = function (){

        console.log("LOAD", this.val1, this.val2);
        val1.value = this.val1;
        val2.value = this.val2;
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

