var myBoolean : boolean = true;
var myNumber : number = 1234;
var myStringArray : string[] = [`first`, `second`, `third`];
var flag : boolean = false;
let dato: any = 'dato cadena'; //flexibilidad
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
type Animal = 'Cheetah' | 'Lion' | 'Turtle';
const prueba: Animal = "Lion";
enum Brands { Chevrolet, Cadillac, Ford, Buick, Chrysler, Dodge
};
const myCar: Brands = Brands.Ford; // le asigno el numero dos a la variable carro myCar

function SaludaAUsuario(): void{
    console.log('Hola usuario');
}

let marca = "Bachoco";

// function SumaDeNumeros(num1: number, num2: number): number{
//     return num1 + num2;
// }

//no podemos hacer sobrecarga de funciones aqui

//pero de esta manera, definiendo parametros opcionales pero no implementando mas que en una function
 function SumaDeNumeros(num1: number, num2: number): number;
 function SumaDeNumeros(num1: number[], num2?: number): number;
 function SumaDeNumeros(num1: any, num2?: number): number{
    let suma = 0; 
    if (Array.isArray(num1)){

     }
     return suma;
 }
function hello(names: string): string;
function hello(names: string[]): string;
function hello(names: any, greeting?: string): string {
let namesArray: string[];
if (Array.isArray(names)) {
namesArray = names;
} else {
namesArray = [names];
}
if (!greeting) {
greeting = 'Hello';
}
return greeting + ', ' + namesArray.join(' and ') + '!';
}

class Persona{
    //JS por su parte no permite describir variables dentro de la clase? solo el constructor
    // pero en TS si
    private nombre: string = '';
    private apellidoPaterno: string ='';
    private apellidoMaterno: string ='';

    constructor(n: string, ap:string, am: string, private mayorDeEdad: boolean){
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }

    getINE(){
        return this.mayorDeEdad? "Puede tramitar el INE": "No puede asignarsele INE";
    }
}

interface IFiguraGeometrica{
    color: string;
    diametro?: number; // parametro opcional 
    calculaArea(): number;
}
class Rectangulo implements IFiguraGeometrica{
    private base: number = 0;
    private altura: number = 0;
    color: string = "red";
    calculaArea(){
        return this.base*this.altura;
    }
}
class Triangulo implements IFiguraGeometrica{
    color: string = "verde";
    private base: number = 0;
    private altura: number = 0;
    calculaArea(){
        return this.base*this.altura/2;
    }
}
class Circulo implements IFiguraGeometrica{
    diametro: number = 0;
    color: string = "red";
    calculaArea(){
        return Math.PI*Math.pow(this.diametro/2,2);
    }
}
class TrianguloIsoceles extends Triangulo{

}

class TrianguloEscaleno extends Triangulo{

}

let miTriangulo:IFiguraGeometrica = new TrianguloEscaleno();
miTriangulo.color="verde";
miTriangulo.calculaArea();
