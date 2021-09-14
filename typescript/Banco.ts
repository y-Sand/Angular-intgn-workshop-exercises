//Interfaz ICUenta que defina operaciones de Deposito retiro y consultar saldo
//clases cuenta personal y cuenta empresarial relacionadas con ICuenta
// Interfaz ICuentaDeCredito que herede de ICuenta. add op calculaIntereses
//Crear la clase TarjeetaDe Credito relacionada con ICuentaDeCredito
// Implementar un obj de cada clase y ver que se puedan lllmar los metodos que correspondan al tipo de obj
interface ICuenta{
    idCuenta: number;
    monto: number;
    Depositar(amount:number): number;
    Retirar(amount: number): number;
    ConsultarSaldo(idCuenta: number): number;
}

interface ICuentaDeCredito extends ICuenta{
    calculaIntereses(): number;
}

class cuentaPersonal implements ICuenta{
    idCuenta : number = 0;
    monto: number = 0;
    constructor(id: number, amount:number){
        this.idCuenta = id;
        this.monto = amount;
    }
    Depositar(amount: number){
        return this.monto+=amount;
    }
    Retirar(amount: number){
        return this.monto-=amount;
    }
    ConsultarSaldo(){
        return this.monto;
    }
}
class cuentaEmpresarial implements ICuenta{
    idCuenta : number = 0;
    monto: number = 0;
    constructor(id: number, amount:number){
        this.idCuenta = id;
        this.monto = amount;
    }
    Depositar(amount: number){
        return this.monto+=amount;
    }
    Retirar(amount: number){
        return this.monto-=amount;
    }
    ConsultarSaldo(){
        return this.monto;
    }
}

class TarjetaDeCredito implements ICuentaDeCredito{
    idCuenta : number = 0;
    monto: number = 0;
    constructor(id: number, amount:number){
        this.idCuenta = id;
        this.monto = amount;
    }
    Depositar(amount: number){
        return this.monto-=amount;
    }
    Retirar(amount: number){
        return this.monto+=amount;
    }
    ConsultarSaldo(){
        return this.monto;
    }
    calculaIntereses(){
        return 0;
    }
}

let cuenta1: ICuenta = new cuentaPersonal(1, 1000);
let cuenta2: ICuenta = new cuentaPersonal(1, 1000);

let tarjeta1: ICuentaDeCredito = new TarjetaDeCredito(1, 5000);

