import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/interfaces/empleado.interface';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})

export class ListEmpleadoComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'correo', 'estadoCivil', 'fechaIngreso', 'sexo', 'telefono', 'acciones'];
  dataSource = new MatTableDataSource<Empleado>();
  listEmpleados!:Array<Empleado>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private empleadoService: EmpleadoService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }
  ngAfterViewInit():void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados():void{
    this.listEmpleados = this.empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource<Empleado>(this.listEmpleados);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarEmpleado(indice:number):void{
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {mensaje: 'Esta seguro que desea eliminar el empleado?'},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'aceptar'){
        this.empleadoService.eliminarEmpleado(indice);
        this.cargarEmpleados();

        this.snackBar.open('El empleado fue eliminado con exito','',{
          duration: 3000
        });
      }
    });
  }

}
