import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild('Canvas',{static: false}) Canvas: ElementRef;
  circle= {x: '0', y: '0', fill: 'white'}
  constructor(public modalController: ModalController) {}
  
  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    fromEvent( this.Canvas.nativeElement ,'click' )
    .pipe(
      map((e:any) => ({x:e.x, y:e.y, fill: Number(e.target.dataset.goal) ? 'blue': 'white'})),
      tap(({x,y, fill}) => {
        this.circle = {...this.circle,x, y, fill}
    }))
    .subscribe()

  }

  async presentModal(event: Event,circleData) {
    event.stopPropagation()
    const modal = await this.modalController.create({
      component: ModalPage,
      swipeToClose: true,
      componentProps: this.circle
    });
    return await modal.present();
  }

}
