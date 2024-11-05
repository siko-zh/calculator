let expression = "";
let a = null;
let b = null;
let operator = null;

function addToExpression(value) {
    if (operator === null) {
        expression += value;
        a = parseFloat(expression);
    } else {
        expression += value;
        b = parseFloat(expression.split(operator)[1]);
    }
    updateDisplay(expression);
}

function addToExpressionOperation(op) {
    if (a !== null && operator === null) {
        operator = op.trim(); 
        expression += operator;
        updateDisplay(expression);
    }
}

function calculate() {
    if (a !== null && b !== null && operator !== null) {
        let result;
        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case 'x':
                result = a * b;
                break;
            case ':':
                result = b !== 0 ? a / b : "Ошибка";
                break;
            default:
                result = "Ошибка";
        }
        expression = result.toString();
        updateDisplay(expression);

        a = result;
        b = null;
        operator = null;
    }
}

function updateDisplay(value) {
    document.getElementById("expression").value = value;
}
