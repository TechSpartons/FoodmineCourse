import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Corrected to styleUrls as an array
})
export class HomeComponent implements OnInit {

  // Assuming 'getAll()' returns an array of any type (preferably define a more specific type)
  foods: any[] = [];  // Changed from String[] to any[] for generality; specify further if known

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    // Fetch foods from the service
    this.foods = this.foodService.getAll();
  }
}
