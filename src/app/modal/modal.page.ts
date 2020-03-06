import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  circle: {x: string, y: string, fill: string} = {x: null, y:null, fill: null}
  constructor(private modalCtrl: ModalController, private navParams: NavParams) { 
    this.circle.x = this.navParams.get('x')
    this.circle.y = this.navParams.get('y')
    this.circle.fill = this.navParams.get('fill')
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
