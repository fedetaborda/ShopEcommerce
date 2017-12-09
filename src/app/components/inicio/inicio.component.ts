import { Component, OnInit } from '@angular/core';

//model
import { User } from "../../model/user";
import { Producto } from "../../model/producto";

//Servicios
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {

    private user:User = {
      nombre:"Matias",
      apellido:"Silva",
      rol:"Usuario Web",
      image:"../../assets/img/avatar-1.jpg"
    }

    private productos : any;


  constructor(private _ProductosService: ProductosService) { }

  ngOnInit() {

		this.ListarProductos();

    /* this.productos.push({
      productos:"PEPE",
      image: "../../assets/img/zapatillas/BA7838_01_standard.jpg",
      marca:"Adidas",
      estado:"Activo",
      precio:"$3.399",
      stock:"52",
      vendidos:"27"
    },
    {
      productos:"juan",
      image: "../../assets/img/zapatillas/BA7838_01_standard.jpg",
      marca:"Adidas",
      estado:"Activo",
      precio:"$3.399",
      stock:"52",
      vendidos:"27"
    }) */

  }

  ListarProductos(){
    this.productos = this._ProductosService.getProductos();
  }



}
