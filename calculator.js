// Uygulama işlevselliğini tanımlayalım
let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let value = this.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (value === '=') {
            try {
                currentInput = eval(previousInput + operator + currentInput).toString();
                display.value = currentInput;
                previousInput = '';
                operator = '';
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
            }
            display.value = currentInput;
        }
    });
});
