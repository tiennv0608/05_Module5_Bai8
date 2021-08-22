import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from '../image-gallery/token';
import {FormControl, FormGroup} from '@angular/forms';
import {ListImg} from '../models/list-img';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  listImg: ListImg;

  component;

  currentImg;
  activeIndex = 0;

  itemWidth: number;
  config = 4;

  constructor(@Inject(GalleryConfig)
              @Optional() config: number) {
    if (config) {
      this.config = config;
    }
    this.listImg = new ListImg();
  }

  ngOnInit() {
    this.itemWidth = 100 / this.config;
    this.component = this.listImg.getListImage();
    this.currentImg = this.component[this.activeIndex];
  }

  previous() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    this.currentImg = this.component[this.activeIndex];

  }

  next() {
    if (this.activeIndex < this.listImg.getLength() - 1) {
      this.activeIndex++;
    }
    this.currentImg = this.component[this.activeIndex];

  }
}
