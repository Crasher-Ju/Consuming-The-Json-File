import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data.json';

export interface Levels {
  name: string;
}

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css'],
})
export class MainComponentComponent implements OnInit {
  products: any[] = [];
  classes: Levels[] = [
    { name: 'Marca' },
    { name: 'Articulo' },
    { name: 'Categoria' },
    { name: 'Vendedor' },
    { name: 'Cliente' },
    { name: '#Pedido' },
  ];
  classSelects: Array<any> = [];

  show: boolean = false;

  suggest() {
    this.sw = false;
    this.show = true;
  }

  leaveSelect() {
    this.sw = true;
    this.show = false;
  }

  isSelected(s: any) {
    return this.classSelects.findIndex((item) => item.name === s.name) > -1
      ? true
      : false;
  }

  sw: boolean = false;
  selectSuggestion(s: any) {
    switch (s.name) {
      case 'Marca':
        console.log(s.name);
        this.marcas.map((value: any, index: number) => {
          this.products[index] = {
            product_type: this.marcas[index],
          };
        });
        console.log(this.products);
        this.configs = {
          group_by: 'product_type',
          group_by_header: 'Descripción',
          group_by_width: '300px',
        };
        this.sw = true;
        break;
      case 'Articulo':
        console.log(s.name);
        this.marcas.map((value: any, index: number) => {
          this.products[index] = {
            product_type: this.marcas[index],
            name: this.articulos[index],
          };
        });
        console.log(this.products);
        this.configs = {
          group_by: 'product_type',
          group_by_header: 'Descripción',
          group_by_width: '300px',
          columns: [
            {
              header: '',
              name: 'name',
              width: '300px',
              sortable: false,
            },
          ],
        };
        this.sw = true;
        break;
      case 'Categoria':
        console.log(s.name);
        this.marcas.map((value: any, index: number) => {
          this.products[index] = {
            product_type: this.categoria[index],
          };
        });
        console.log(this.products);
        this.configs = {
          group_by: 'product_type',
          group_by_header: 'Descripción',
          group_by_width: '300px',
        };
        this.sw = true;
        break;
      case 'Vendedor':
        console.log(s.name);
        this.marcas.map((value: any, index: number) => {
          this.products[index] = {
            product_type: this.vendedor[index],
          };
        });
        console.log(this.products);
        this.configs = {
          group_by: 'product_type',
          group_by_header: 'Descripción',
          group_by_width: '300px',
        };
        this.sw = true;
        break;
      case 'Cliente':
        console.log(s.name);
        this.marcas.map((value: any, index: number) => {
          this.products[index] = {
            product_type: this.cliente[index],
          };
        });
        console.log(this.products);
        this.configs = {
          group_by: 'product_type',
          group_by_header: 'Descripción',
          group_by_width: '300px',
        };
        this.sw = true;
        break;
      case '#Pedido':
        console.log(s.name);
        this.marcas.map((value: any, index: number) => {
          this.products[index] = {
            product_type: this.pedido[index],
          };
        });
        console.log(this.products);
        this.configs = {
          group_by: 'product_type',
          group_by_header: 'Descripción',
          group_by_width: '300px',
        };
        this.sw = true;
        break;
      default:
        break;
    }
    this.classSelects.find((item) => item.name === s.name)
      ? (this.classSelects = this.classSelects.filter(
          (item) => item.name !== s.name
        ))
      : this.classSelects.push(s);

    this.leaveSelect();
  }
  deleteSelects(s: any) {
    this.classSelects = this.classSelects.filter(
      (item) => item.name !== s.name
    );
    this.sw = true;
    this.show = false;
  }
  constructor() {}

  marcas: Array<any> = [];
  codigoArticulos: Array<any> = [];
  articulos: Array<any> = [];
  pedido: Array<any> = [];
  vendedor: Array<any> = [];
  cliente: Array<any> = [];
  categoria: Array<any> = [];
  ngOnInit(): void {
    let datos = JSON.parse(JSON.stringify(data));
    console.log(datos);

    for (let index = 0; index < datos.length; index++) {
      this.marcas[index] = datos[index].FirmName;
      this.codigoArticulos[index] = datos[index].ItemCode;
      this.articulos[index] = datos[index].ItemName;
      this.pedido[index] = datos[index].DocNum;
      this.vendedor[index] = datos[index].SlpCode;
      this.cliente[index] = datos[index].CardCode;
      this.categoria[index] = datos[index].CategoriaCode;
    }
    /*     console.log(this.marcas);
    console.log(this.codigoArticulos); */
    console.log(this.marcas);

    /*     console.log(this.marcas);
    console.log(this.codigoArticulos); */
    console.log(this.marcas);
  }

  configs: any = {};
}
