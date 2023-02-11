import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  img_by_google: string = 'https://i.pinimg.com/originals/e6/43/64/e643645627d0b2f33c2456e2fee0398d.jpg';
  img_by_google2: string = 'https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg';

  constructor() { }

  ngOnInit() {}

  public slideOption:any = {
    slidesPerView: 1.3
  };
}
