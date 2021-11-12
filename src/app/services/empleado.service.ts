import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  listEmpleados: Array<Empleado> = [
    {nombreCompleto: 'Lucas Martinez', correo: 'lmartinez@gmail.com', telefono: 3104356789, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    {nombreCompleto: 'Juan Toro', correo: 'jtoro@gmail.com', telefono: 3134455789, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Casado'},
    {nombreCompleto: 'Maria Perez', correo: 'mperez@gmail.com', telefono: 3124354769, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Casado'},
    {nombreCompleto: 'Juan Salgado', correo: 'jsalgado@gmail.com', telefono: 3114334789, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    {nombreCompleto: 'Claudia Marin', correo: 'cmarin@gmail.com', telefono: 3134354779, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    {nombreCompleto: 'Pedro Cano', correo: 'pcano@gmail.com', telefono: 3122356789, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    {nombreCompleto: 'Sofia Lopez', correo: 'sperez@gmail.com', telefono: 3134455789, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    {nombreCompleto: 'Luz Perez', correo: 'lperez@gmail.com', telefono: 3155566789, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    {nombreCompleto: 'Henry alvarez', correo: 'halvarez@gmail.com', telefono: 3104356767, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Casado'},
    {nombreCompleto: 'Juanita Cao', correo: 'jcano@gmail.com', telefono: 3134356987, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    {nombreCompleto: 'Juliana Sanchez', correo: 'jsanchez@gmail.com', telefono: 3113457789, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Casado'},
    {nombreCompleto: 'Ligia Arias', correo: 'larias@gmail.com', telefono: 3124356776, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    {nombreCompleto: 'Olga Morales', correo: 'omorales@gmail.com', telefono: 3134356743, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    {nombreCompleto: 'Camilo salazar', correo: 'csalazar@gmail.com', telefono: 3164356709, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Casado'},
    {nombreCompleto: 'valentina henao', correo: 'vhenao@gmail.com', telefono: 31543567834, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Viudo'},
  ]

  constructor() { }

  getEmpleados(){
    return this.listEmpleados;
  }

  agregarEmpleado(empleado:Empleado):void{
    this.listEmpleados.unshift(empleado);
  }

  buscarEmpleado(index:number):Empleado{
    return this.listEmpleados[index];
  }

  editarEmpleado(empleado:Empleado, index:number):void{
      this.listEmpleados[index].nombreCompleto = empleado.nombreCompleto;
      this.listEmpleados[index].correo = empleado.correo;
      this.listEmpleados[index].telefono = empleado.telefono;
      this.listEmpleados[index].sexo = empleado.sexo;
      this.listEmpleados[index].fechaIngreso = empleado.fechaIngreso;
      this.listEmpleados[index].estadoCivil = empleado.estadoCivil;
  }

  eliminarEmpleado(indice:number):void{
    this.listEmpleados.splice(indice,1);
  }
}
