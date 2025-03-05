export class Empleado {
    constructor (_id="", nombre="", cargo="", area="", salario= 0){ 

        this._id = _id;
        this.nombre = nombre;
        this.cargo = cargo;
        this.area = area;
        this.salario =salario;
    }

    _id: String;
    nombre: String;
    cargo: String;
    area: String;
    salario: Number;
}
