import { Component, OnInit } from '@angular/core';
import { capitalize, isEmpty, isInvalid, removeAllFromList, removeFromList, trimTrails } from '@tnk-modules/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tnk-common';

  constructor(){}
  
  ngOnInit(): void {
    console.log(capitalize(" sad WEdsf  lk£dd asd "), capitalize(''))
    console.log(trimTrails(" sad WEdsf  lk£dd \tasd "))
    console.log(isInvalid(""));
    console.log(isEmpty([]),isEmpty(), isEmpty([3]))
    let array = [1,10,2,35,3,4,5,6];
    console.log(array)
    removeFromList(array, (v)=>v>=4)
    console.log(array)
    removeAllFromList(array, (v)=>v>=4)
    console.log(array)
  }

}
