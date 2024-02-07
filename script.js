let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

// Function to handle errors
function handleErrors() {
    try {
        string = eval(string);
        if (!isFinite(string)) {
            throw new Error('Error');
        }
        input.value = string;
    } catch (error) {
        input.value = 'Error';
        string = '';
    }
}

// Event listeners for calculator buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            handleErrors();
        } else if (e.target.innerHTML === 'AC') {
            string = '';
            input.value = '';
        } else if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key.match(/[0-9+\-*/.=]|Backspace|Delete/)) {
        event.preventDefault();
        if (key === 'Enter' || key === '=') {
            handleErrors();
        } else if (key === 'AC') {
            string = '';
            input.value = '';
        } else if (key === 'Backspace' || key === 'Delete' || key === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += key;
            input.value = string;
        }
    }
});
