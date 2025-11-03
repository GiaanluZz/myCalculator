
function MyLog(a, b, operation){

    this.val1 = a;
    this.val2 = b;
    this.operation = operation;

    
    this.fnload = function (){

        console.log("LOAD", this.val1, this.val2);
        console.table(val1);

        if( val1 !== undefined){

            val1.value = this.value;
        }

        if( val2 !== undefined){

            this.val2.value = this.value
        }

        val1.value = this.val1;
        val2.value = this.val2;
    }
}
