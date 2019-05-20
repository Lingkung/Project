import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public router:Router,
              public navCtrl : NavController){

  }

  btnClicked(){
    console.log('btn clicked')
    this.router.navigate(['heros','batman','darknight returns'])
  }

  btn2Clicked(){
    console.log("btn2 clicked")
    this.navCtrl.navigateForward('heros')
  }

}
