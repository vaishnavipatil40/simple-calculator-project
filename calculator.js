let buttons = document.querySelectorAll('.calc-btn');
let display = document.querySelector("#disp").innerText;

let operand1 = 0;
let operand2 = null;
let operator = null;

function updateDisplay(display){
    document.querySelector("#disp").innerText = display;
}

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        let value = button.getAttribute('data-value');
        if(parseInt(value) >= 0 && parseInt(value) <=9 ){
            display += value;
            updateDisplay(display);
        }
        else if(value === "AC"){
            display = "";
            updateDisplay(display);
        }
        else if(value === "BSP"){
            if(display != ""){
                display = display.substring(0,display.length-1);
                updateDisplay(display);
            }
        }
        else if(value === "+/-"){
            if(display != ""){
                display = parseInt(display) * -1;
                updateDisplay(display);
            }
        }
        else if(value === "+" || value === "-" || value === "/" || value === "*"){
            operand1 = display;
            operator = value;
            display = '';
            updateDisplay(display);
        }
        else if(value === "="){
            operand2 = display;
            let result = eval(operand1 + " " + operator + " " + operand2);
            display = result;
            updateDisplay(display);
        }
        else{
            display += value;
            updateDisplay(display);
        }
    });
});