// Display element
const display = document.getElementById('display');

// Append number to display
function appendNumber(number) {
    display.value += number;
}

// Append operator to display
function appendOperator(operator) {
    display.value += operator;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Calculate the result
function calculateResult() {
    try {
        // Use the JavaScript eval function to evaluate the expression
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
