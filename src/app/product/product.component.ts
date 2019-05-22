import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
        console.log("in subscrtibed method");
        console.log(params['id']);
        console.log(params);
        this.productId = params['id'];
        // console.log(params.get("id")); // for this use paramMap (https://medium.com/@christo8989/angular-6-url-parameters-860db789db85)
        
    });
  }

}
