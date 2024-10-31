import { Component } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { ProductService } from './Product.service'

@Component({
  selector: 'product-index',
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let product of products">
                <td class="text-center">{{product.Id}}</td>
                <td>{{product.Name}}</td>
                <td class="text-center">{{product.Price}}</td>
                <td class="text-center">
                  <a class="btn btn-secondary" routerLink="/product/{{product.Id}}" title="View"><i class="fa fa-eye"></i></a>
                  <a class="btn btn-primary" routerLink="/product/edit/{{product.Id}}" title="Edit"><i class="fa fa-pencil"></i></a>
                  <a class="btn btn-danger" routerLink="/product/delete/{{product.Id}}" title="Delete"><i class="fa fa-times"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
          <a class="btn btn-primary" routerLink="/product/create">Create</a>
        </div>
      </div>
    </div>`
})

export class ProductIndex {

  products?: any[]
  constructor(public router: Router, private ProductService: ProductService) { }

  ngOnInit() {
    this.get()
  }
  
  get() {
    this.ProductService.get().subscribe(data => {
      this.products = data
    }, e => {
      alert(e.error)
    })
  }
}