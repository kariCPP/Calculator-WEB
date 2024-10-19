// script.js

// Insert numbers/operators into the display
function insert(value) {
    document.getElementById('display').value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character
function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

// Calculate the result
function calculate() {
    let expression = document.getElementById('display').value;
    try {
        let result = math.evaluate(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Advanced: Calculate Derivative (Using Math.js)
function calculateDerivative() {
    let expression = document.getElementById('display').value;
    let derivative = math.derivative(expression, 'x').toString();
    document.getElementById('display').value = derivative;
}

// Advanced: Calculate Integral (Mockup for Now)
function calculateIntegral() {
    let expression = document.getElementById('display').value;
    document.getElementById('display').value = '∫(' + expression + ')';
}
