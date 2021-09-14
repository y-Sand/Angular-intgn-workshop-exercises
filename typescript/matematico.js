"use strict";
var result = 0;
var Name;
var Role;
function Suma(num1, num2) {
    if (!num1 && !num2) {
        result = num1 + num2;
    }
    return result;
}
//const sum = (num1: number, num2: number) => num1 + num2;
function Resta(num1, num2) {
    if (!num1 && !num2) {
        result = num1 - num2;
    }
    return result;
}
function Multiplica(num1, num2) {
    if (!num1 && !num2) {
        result = num1 * num2;
    }
    return result;
}
function Divide(num1, num2) {
    if (!num1 && !num2 || num2 != 0) {
        result = num1 / num2;
    }
    return result;
}
//const divide = (num1: number, num2: number) => num1 / num2;
var MayorDeDosNumeros = function (num1, num2) {
    return result = (num1 > num2) ? num1 : num2;
};
var AgregarUsuario = function (name, role) {
    Name.push(name);
    Role.push(role);
};
