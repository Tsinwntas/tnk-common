import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tnk-{TNK_MODULE}';
  typeAItems : Test[] = [];
  typeBItems : Test[] = [];

  itemName : string;
  itemType : string;


  constructor(){}
  
  ngOnInit(): void {
  }

}
