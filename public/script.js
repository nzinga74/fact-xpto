var hasBeenCalculated = false;
function onButtonPress (value) {
    var input = document.getElementById("input");
    try {
        if((value >= '0' && value <= '9') && hasBeenCalculated) {
            input.value = "";
            
        }
        hasBeenCalculated = false;
        input.value += value;
        
    }
    catch (err) {

    }
    
}

function showResult () {
    var input = document.getElementById("input");
    var mathExpression = input.value;

    if(mathExpression.includes("%")) {
        mathExpression = mathExpression.replaceAll("%","*0.01");
        
    }
    try {
        var evalValue = eval(mathExpression);
        if(evalValue== Infinity) {
            input.value = "Não é possível divisão por 0"
        }
        else {
            input.value = evalValue;
        }
        hasBeenCalculated = true;
       
    }
    catch (err) {
       input.value = "Erro ao Calcular"
       hasBeenCalculated = true;
    }
}

function onClear() {
    var input = document.getElementById("input");
    input.value = "";
}

function onCalculateFatorial() {
    
    var input = document.getElementById("input");
    try {
        var mathExpression = input.value;
        var value = parseInt(mathExpression);
        if(value > 0) {
            var fat = 1;
            for (var i = 1; i <=value; i++) {
                fat*= i;
            }
            input.value = fat;

        } 
    }
    catch (err) {

    }
}