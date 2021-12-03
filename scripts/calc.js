alert('Solo se pueden calcular dos numeros a la vez. Ten en cuenta que es uno de mis primeros codigos en JS.');
let num1;
let num2;
let oper;
let order = 0;
const sign__oper = document.getElementById('sign__oper');
const result = document.getElementById('result');
const one = document.getElementById('one');
one.onclick = function(){
    result.textContent = result.textContent + '1';
}
const two = document.getElementById('two');
two.onclick = function(){
    result.textContent = result.textContent + '2';
}
const three = document.getElementById('three');
three.onclick = function(){
    result.textContent = result.textContent + '3';
}
const four = document.getElementById('four');
four.onclick = function(){
    result.textContent = result.textContent + '4';
}
const five = document.getElementById('five');
five.onclick = function(){
    result.textContent = result.textContent + '5';
}
const six = document.getElementById('six');
six.onclick = function(){
    result.textContent = result.textContent + '6';
}
const seven = document.getElementById('seven');
seven.onclick = function(){
    result.textContent = result.textContent + '7';
}
const eight = document.getElementById('eight');
eight.onclick = function(){
    result.textContent = result.textContent + '8';
}
const nine = document.getElementById('nine');
nine.onclick = function(){
    result.textContent = result.textContent + '9';
}
const zero = document.getElementById('zero');
zero.onclick = function(){
    result.textContent = result.textContent + '0';
}
const dot = document.getElementById('dot');
dot.onclick = function(){
    if(!result.textContent.includes('.')){
        result.textContent = result.textContent + '.';
    }
}
const changeNumber = document.getElementById('changeNumber');
changeNumber.onclick = function(){
    if(result.textContent.includes(' ')){
        result.textContent=result.textContent.replace(' ','-');
    }else if(result.textContent.includes('-')){
        result.textContent=result.textContent.replace('-',' ');
    }else{
        result.textContent='-'+result.textContent;
    }
}
const clear = document.getElementById('clear');
clear.onclick = function(){
    num1 = '';
    num2 = '';
    oper = '';
    order = 0;
    result.textContent = '';
    sign__oper.textContent = '';
}
const back = document.getElementById('back');
back.onclick = function(){
    result.textContent = result.textContent.slice(0,-1);
}
const sum = document.getElementById('sum');
sum.onclick = function(){
    if(order==0){
        num1 = result.textContent;
        sign__oper.textContent = '+';
        oper = '+';
        result.textContent = '';
        order++;
        return num1;
    }else if(order==1){
        result.textContent = '';
        sign__oper.textContent = '+';
        oper = '+';
    }
}
const subtrac = document.getElementById('subtraction')
subtrac.onclick = function(){
    if(order==0){
        num1 = result.textContent;
        sign__oper.textContent = '-';
        oper = '-';
        result.textContent = '';
        order++;
        return num1;
    }else if(order==1){
        result.textContent = '';
        sign__oper.textContent = '-';
        oper = '-';
    }
}
const division = document.getElementById('division');
division.onclick = function(){
    if(order==0){
        num1 = result.textContent;
        sign__oper.textContent = '÷';
        oper = '/';
        result.textContent = '';
        order++;
        return num1;
    }else if(order==1){
        result.textContent = '';
        sign__oper.textContent = '÷';
        oper = '/';
    }
}
const multiplication = document.getElementById('multiplication');
multiplication.onclick = function(){
    if(order==0){
        num1 = result.textContent;
        sign__oper.textContent = 'x';
        oper = '*';
        result.textContent = '';
        order++;
        return num1;
    }else if(order==1){
        result.textContent = '';
        sign__oper.textContent = 'x';
        oper = '*';
    }
}
const equal = document.getElementById('equal');
equal.onclick = function(){
    if(order==0){
        num1 = '';
        num2 = '';
        oper = '';
        order = 0;
        result.textContent = '';
        sign__oper.textContent = '';
    }else if(order==1){
        num2=result.textContent;
        switch(oper){
            case '+':
                sign__oper.textContent='';
                result.textContent=parseFloat(num1)+parseFloat(num2);
                break;
            case '-':
                sign__oper.textContent='';
                result.textContent=parseFloat(num1)-parseFloat(num2);
                break;
            case '/':
                sign__oper.textContent='';
                result.textContent=parseFloat(num1)/parseFloat(num2);
                break;
            case '*':
                sign__oper.textContent='';
                result.textContent=parseFloat(num1)*parseFloat(num2);
                break;
        }
        num1 = '';
        num2 = '';
        oper = '';
        order = 0;
        sign__oper.textContent = '';
    }
}
// const k = document.getElementById('k');
// const h = document.getElementById('h');
// k.onclick = function(){
//     h.textContent = eval(h.textContent);
// }