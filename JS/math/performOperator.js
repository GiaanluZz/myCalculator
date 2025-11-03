import { moltiplicazione } from "./math.j";
import { sottrazione } from "./math.js";
import { divisione } from "./math.js";
import { somma } from "./math.js";


/**
 * @param {number} a 
 * @param {number} b 
 * @param {string} operation 
 * @returns {number | error};
 */


export function performOperation(a, b, operation) {

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