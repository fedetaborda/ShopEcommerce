import { Component, OnInit } from '@angular/core';

//Servicios
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  private productos : any;

  constructor(private _ProductosService: ProductosService) { }

  ngOnInit() {

    this.ListarProductos();

  }

  ListarProductos(){
    this.productos = this._ProductosService.getProductos();
  }

}
