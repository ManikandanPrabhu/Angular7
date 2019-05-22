import { Component, OnInit } from '@angular/core';
import {Router, Route} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productCategory: any;
  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    this.productCategory = 
        [ 
          {'id': 1,
          'name': 'Mobile' 
          },
          {'id': 2,
          'name': 'Battery' 
          },
          {'id': 3,
          'name': 'ScreenGuard' 
          },
          {'id': 4,
          'name': 'Display' 
          },
          {'id': 5,
          'name': 'HeadPhones' 
          },
          {'id': 6,
          'name': 'Pendrive' 
          },
          {'id': 7,
          'name': 'Back Cover' 
          }
        ]
    
  }

  onProductClick(productId) {
    console.log(productId);
    this.router.navigate(['/home/product'], {queryParams: {id: productId}})
  }
}
