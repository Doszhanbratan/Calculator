
const num1 = prompt("Первое число:");
const num2 = prompt("Второe число:");   
const operator = prompt("Введите оператор: + , - , * , / ");
let result = 0
if(isNaN(num1) || isNaN(num2)) {
    alert("Вы неправильно ввели значения, обновите страницу и попробуйте заново");
}
else {
    if(operator == "+"){
    result = num1 + num2;  }
    else if (operator == "-"){
        result = num1 - num2;  }
    else if (operator == "/"){
        result = num1 / num2;  }
    else if (operator == "*"){
        result = num1 * num2;  }

    alert(num1 + operator + num2 + "=" + result );
    
}
