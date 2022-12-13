const number = document.querySelectorAll('.number');
const result = document.querySelector('.result span');
const clear = document.querySelector('.clear');
const comma = document.querySelector('.comma');
const signs = document.querySelectorAll('.sign');
const equal = document.querySelector('.equal');
const negative = document.querySelector('.negative');
let resultValue = "";
let sign;
let numberValue  = "";
let sw = false;
let sw2 = false;

for(let i = 0 ; i < signs.length ; i++){
    signs[i].disabled = false;
}

document.addEventListener('keypress', (e) => {
    let key = e.key;
    if(key >= 0 && key <= 9) getNumber(key);
    
    switch (key){
        case "+":
            sign = key;
            sw = true;
            break;
        case "-":
            sign = key;
            sw = true;
            break;
        case "*":
            sign = key;
            sw = true;
            break;
        case "/":
            sign = key;
            sw = true;
            break;
        case ".":
            if(numberValue === ""){
                getNumber("0")
            };
            if(sw2 === false){
                getNumber(comma.getAttribute('value'));
                sw2 = true;
            };
            break;
        case "Enter":
            total();
            break;
            
    };   

    if(key === "Backspace" || key === "Delete") clearAll();
});

// // Add event listener on keypress
// document.addEventListener('keypress', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
// }, false);

function clearAll() {
    result.textContent = "";
    comma.disabled = false;
    sw2 = false;
    numberValue = "";
    resultValue = "";
}

clear.addEventListener('click', () => {
    clearAll();
});

negative.addEventListener('click', () => {
    if(numberValue.charAt(0) !== "-" && numberValue !== ""){
        numberValue = "-".concat(numberValue);
        result.textContent = numberValue;
    } else if(numberValue.charAt(0) === "-"){
        numberValue = numberValue.slice(1)
        result.textContent = numberValue;
    };
});

for(let i = 0 ; i < number.length ; i++) {
    number[i].addEventListener('click', (e) => {
        getNumber(e.target.getAttribute('value'));
    });
};

function getSign() {
    for(let i = 0; i < signs.length ; i++){
        signs[i].addEventListener('click', (e) =>{
            sign = e.target.getAttribute('value')
            if(sign === '+'){
                for(let i = 0; i < signs.length ; i++){
                    signs[i].disabled = false;
                }
                signs[i].disabled = true;
            } else if(sign === '-'){
                for(let i = 0; i < signs.length ; i++){
                    signs[i].disabled = false;
                }
                signs[i].disabled = true;
            } else if(sign === 'x'){
                for(let i = 0; i < signs.length ; i++){
                    signs[i].disabled = false;
                }
                signs[i].disabled = true;
            } else if(sign === '/'){
                for(let i = 0; i < signs.length ; i++){
                    signs[i].disabled = false;
                }
                signs[i].disabled = true;
            }
            sw = true;
        });
    };
};
getSign();
 
comma.addEventListener('click', () => {
    if(numberValue === ""){
        getNumber("0");
    };
    getNumber(comma.getAttribute('value'));
    comma.disabled = true;
});

function addSign() {
    if(sw === true){
        for(let i = 0; i < signs.length ; i++){
            signs[i].disabled = false;
        };
        resultValue += numberValue + sign;
        result.textContent = "";
        numberValue = "";
        comma.disabled = false;
        sw = false;
        sw2 = false;
    };
};

function getNumber(atr) {
    addSign();
    if(numberValue.length < 9){
        numberValue += atr;        
    };  
    result.textContent = numberValue;
};

function total() {
    resultValue += numberValue;
    resultValue = resultValue.replace(/x/g, "*").replace(/,/g, ".").replace(/--/g, "+");
    result.textContent = eval(resultValue);
    numberValue = eval(resultValue);
    resultValue = "";
    comma.disabled = false;
    sw2 = false;
    
};

equal.addEventListener('click', () => {
    total();
});