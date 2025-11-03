import { performOperation } from "./math/performOperator.js"; //importa un file


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

x