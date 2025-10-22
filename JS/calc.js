let result = 0;


//array di button
let allBtn = document.querySelectorAll("button");

allBtn.forEach((btn) =>{

    console.log(btn);
    //btn.innerText = "Hi"
})  
  
addEventListener("click", (event) =>{
    
    console.log(event.target);
})

function somma(a, b){

    return a + b;
}

function sottrazione(a, b){

    return a - b;
}

function moltiplicazione(a, b){

    return a * b;
}

function divisione(a, b){

    return a / b;
}


