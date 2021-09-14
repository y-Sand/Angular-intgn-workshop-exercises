"use strict";
var cuentaPersonal = /** @class */ (function () {
    function cuentaPersonal(id, amount) {
        this.idCuenta = 0;
        this.monto = 0;
        this.idCuenta = id;
        this.monto = amount;
    }
    cuentaPersonal.prototype.Depositar = function (amount) {
        return this.monto += amount;
    };
    cuentaPersonal.prototype.Retirar = function (amount) {
        return this.monto -= amount;
    };
    cuentaPersonal.prototype.ConsultarSaldo = function () {
        return this.monto;
    };
    return cuentaPersonal;
}());
var cuentaEmpresarial = /** @class */ (function () {
    function cuentaEmpresarial(id, amount) {
        this.idCuenta = 0;
        this.monto = 0;
        this.idCuenta = id;
        this.monto = amount;
    }
    cuentaEmpresarial.prototype.Depositar = function (amount) {
        return this.monto += amount;
    };
    cuentaEmpresarial.prototype.Retirar = function (amount) {
        return this.monto -= amount;
    };
    cuentaEmpresarial.prototype.ConsultarSaldo = function () {
        return this.monto;
    };
    return cuentaEmpresarial;
}());
var TarjetaDeCredito = /** @class */ (function () {
    function TarjetaDeCredito(id, amount) {
        this.idCuenta = 0;
        this.monto = 0;
        this.idCuenta = id;
        this.monto = amount;
    }
    TarjetaDeCredito.prototype.Depositar = function (amount) {
        return this.monto -= amount;
    };
    TarjetaDeCredito.prototype.Retirar = function (amount) {
        return this.monto += amount;
    };
    TarjetaDeCredito.prototype.ConsultarSaldo = function () {
        return this.monto;
    };
    TarjetaDeCredito.prototype.calculaIntereses = function () {
        return 0;
    };
    return TarjetaDeCredito;
}());
var cuenta1 = new cuentaPersonal(1, 1000);
var cuenta2 = new cuentaPersonal(1, 1000);
var tarjeta1 = new TarjetaDeCredito(1, 5000);
