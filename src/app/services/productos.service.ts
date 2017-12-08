import { Injectable } from '@angular/core';

import { Producto } from "../model/producto";

@Injectable()
export class ProductosService {

  private productos:any = [
    {
      productos:"ZAPATILLAS DE RUNNING ULTRA BOOST STREET",
      image: "../../assets/img/zapatillas/BA7838_01_standard.jpg",
      marca:"Adidas",
      estado:"Activo",
      precio:"$3.399",
      stock:"52",
      vendidos:"27"
    },
    {
      productos:"ZAPATILLAS DE RUNNING ULTRA BOOST STREET",
      image: "../../assets/img/zapatillas/BA7839_01_standard.jpg",
      marca:"Adidas",
      estado:"Activo",
      precio:"$3.399",
      stock:"26",
      vendidos:"36"
    }
  ]

  constructor() {

   }

   getProductos(){

     return this.productos;
   }


}
