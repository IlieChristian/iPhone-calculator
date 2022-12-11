const number = document.querySelectorAll('.number');
const result = document.querySelector('.result span');
const clear = document.querySelector('.clear');
const comma = document.querySelector('.comma');
const signs = document.querySelectorAll('.sign');
const equal = document.querySelector('.equal');
let resultValue = "";
let sign;
let numberValue  = "";
let sw = false;

for(let i = 0 ; i < signs.length ; i++){
    signs[i].disabled = false;
}

clear.addEventListener('click', () => {
    result.textContent = "";
    comma.disabled = false;
    numberValue = "";
    resultValue = "";
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
    getNumber(comma.getAttribute('value'));
    comma.disabled = true;
});

function addSign() {
    if(sw === true){
        for(let i = 0; i < signs.length ; i++){
            signs[i].disabled = false;
        }
        resultValue += numberValue + sign
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
};

equal.addEventListener('click', () =>{
    resultValue += numberValue;
    resultValue = resultValue.replace(/x/g, "*");
    result.textContent = eval(resultValue);
    console.log(resultValue)
    resultValue = "";
    numberValue = "";
    comma.disabled = false;
});