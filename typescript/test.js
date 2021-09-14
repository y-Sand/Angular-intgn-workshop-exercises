"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myBoolean = true;
var myNumber = 1234;
var myStringArray = ["first", "second", "third"];
var flag = false;
var dato = 'dato cadena'; //flexibilidad
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
var prueba = "Lion";
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Cadillac"] = 1] = "Cadillac";
    Brands[Brands["Ford"] = 2] = "Ford";
    Brands[Brands["Buick"] = 3] = "Buick";
    Brands[Brands["Chrysler"] = 4] = "Chrysler";
    Brands[Brands["Dodge"] = 5] = "Dodge";
})(Brands || (Brands = {}));
;
var myCar = Brands.Ford; // le asigno el numero dos a la variable carro myCar
function SaludaAUsuario() {
    console.log('Hola usuario');
}
var marca = "Bachoco";
function SumaDeNumeros(num1, num2) {
    var suma = 0;
    if (Array.isArray(num1)) {
    }
    return suma;
}
function hello(names, greeting) {
    var namesArray;
    if (Array.isArray(names)) {
        namesArray = names;
    }
    else {
        namesArray = [names];
    }
    if (!greeting) {
        greeting = 'Hello';
    }
    return greeting + ', ' + namesArray.join(' and ') + '!';
}
var Persona = /** @class */ (function () {
    function Persona(n, ap, am, mayorDeEdad) {
        this.mayorDeEdad = mayorDeEdad;
        //JS por su parte no permite describir variables dentro de la clase? solo el constructor
        // pero en TS si
        this.nombre = '';
        this.apellidoPaterno = '';
        this.apellidoMaterno = '';
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }
    Persona.prototype.getINE = function () {
        return this.mayorDeEdad ? "Puede tramitar el INE" : "No puede asignarsele INE";
    };
    return Persona;
}());
var Rectangulo = /** @class */ (function () {
    function Rectangulo() {
        this.base = 0;
        this.altura = 0;
        this.color = "red";
    }
    Rectangulo.prototype.calculaArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
var Triangulo = /** @class */ (function () {
    function Triangulo() {
        this.color = "verde";
        this.base = 0;
        this.altura = 0;
    }
    Triangulo.prototype.calculaArea = function () {
        return this.base * this.altura / 2;
    };
    return Triangulo;
}());
var Circulo = /** @class */ (function () {
    function Circulo() {
        this.diametro = 0;
        this.color = "red";
    }
    Circulo.prototype.calculaArea = function () {
        return Math.PI * Math.pow(this.diametro / 2, 2);
    };
    return Circulo;
}());
var TrianguloIsoceles = /** @class */ (function (_super) {
    __extends(TrianguloIsoceles, _super);
    function TrianguloIsoceles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrianguloIsoceles;
}(Triangulo));
var TrianguloEscaleno = /** @class */ (function (_super) {
    __extends(TrianguloEscaleno, _super);
    function TrianguloEscaleno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrianguloEscaleno;
}(Triangulo));
var miTriangulo = new TrianguloEscaleno();
miTriangulo.color = "verde";
miTriangulo.calculaArea();
