var result: number = 0;
var Name: string[];
var Role: string[];

function Suma(num1: number, num2: number): number{
    if(!num1 && !num2)
    {
        result = num1 + num2;
    }
    return result;
}
//const sum = (num1: number, num2: number) => num1 + num2;

function Resta(num1: number, num2: number): number{
    if(!num1 && !num2)
    {
        result = num1 - num2;
    }
    return result;
}

function Multiplica(num1: number, num2: number): number{
    if(!num1 && !num2)
    {
        result = num1 * num2;
    }
    return result;
}

function Divide(num1: number, num2: number): number{
    if(!num1 && !num2 || num2!=0)
    {
        result = num1 / num2;
    }
    return result;
}
//const divide = (num1: number, num2: number) => num1 / num2;

const MayorDeDosNumeros = (num1: number, num2: number) => 
    result = (num1 > num2)? num1 : num2;

const AgregarUsuario = (name: string, role: string) =>{
    Name.push(name);
    Role.push(role);   
}
