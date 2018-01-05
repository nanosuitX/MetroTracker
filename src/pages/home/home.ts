import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { TripPage } from "../trip/trip";
import { AddpagePage } from "../addpage/addpage";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modal:ModalController) {

  }

  openModal(){
  	let modalObject = this.modal.create(TripPage)

  	modalObject.present();
  }

  openAdd(){
  	let modalAddObject = this.modal.create(AddpagePage)
  	modalAddObject.present();
  }

}
