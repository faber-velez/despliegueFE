import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../servicios/empleado.service';
import { NgForm } from '@angular/forms';
import { Empleado } from '../../modelos/empleado';

declare var M:any;

@Component({
  selector: 'app-empleados',
  standalone: false,
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit{

  constructor(public empleadoService: EmpleadoService){ }

  ngOnInit(): void {
    
  }

  agregarEmpleado(form?:NgForm){
    this.empleadoService.postEmpleado(form?.value)
    .subscribe(res=>{
      this.resetForm(form);
      M.toast({html:'Empeado Registrado'});
    });
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
}
