const number = document.querySelectorAll('.number');
const result = document.querySelector('.result span');
const clear = document.querySelector('.clear');
const comma = document.querySelector('.comma');
const signs = document.querySelectorAll('.sign');
const equal = document.querySelector('.equal');
const negative = document.querySelector('.negative');
let resultValue = "";
let sign;
let keycode
let numberValue  = "";
let sw = false;

for(let i = 0 ; i < signs.length ; i++){
    signs[i].disabled = false;
}

// document.addEventListener('keypress', (e) => {
//     keycode = e.key;
//     if(keycode >= 0 && keycode <= 9) getNumber(keycode);
    
//     switch (keycode){
//         case "+":
//             resultValue += numberValue + keycode;
//             numberValue = "";
//             result.textContent = "";
//         case "-":
//             resultValue += numberValue + keycode;
//             numberValue = "";
//         case "*":
//             resultValue += numberValue + keycode;
//             numberValue = "";
//         case "/":
//             resultValue += numberValue + keycode;
//             numberValue = "";
//         case "Enter":
//             total();
//     }
    
// }, false);

// Add event listener on keypress
// document.addEventListener('keypress', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
// }, false);

clear.addEventListener('click', () => {
    result.textContent = "";
    comma.disabled = false;
    numberValue = "";
    resultValue = "";
});

negative.addEventListener('click', () => {
    if(numberValue.charAt(0) !== "-" && numberValue !== ""){
        numberValue = "-".concat(numberValue);
        result.textContent = numberValue;
    } else if(numberValue.charAt(0) === "-"){
        numberValue = numberValue.slice(1)
        result.textContent = numberValue;
    }
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
        getNumber("0")
    }
    getNumber(comma.getAttribute('value'));
    comma.disabled = true;
});

function addSign() {
    if(sw === true){
        for(let i = 0; i < signs.length ; i++){
            signs[i].disabled = false;
        }
        resultValue += numberValue + sign;
        result.textContent = "";
        numberValue = "";
        comma.disabled = false;
        sw = false;
    };
};

function getNumber(atr) {
    addSign();
    result.textContent = "";
    if(numberValue.length < 9){
        numberValue += atr;        
    };  
    result.textContent = numberValue;
    console.log(numberValue)
};

function total() {
    resultValue += numberValue;
    resultValue = resultValue.replace(/x/g, "*").replace(/,/g, ".").replace(/--/g, "+");
    result.textContent = eval(resultValue);
    resultValue = "";
    numberValue = "";
    comma.disabled = false;
    console.log(resultValue)
};

equal.addEventListener('click', () => {
    total();
});