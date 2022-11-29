import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {



  title = 'firatyil';
  images = ['software-developer.jpg', 'computer.jpg', 'coding.jpg'];
  headlines = ['Bring engineering to the next level', 'Born to code', 'make wishes to reality']
  currentImage = 0
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {

    setInterval(() => {
      this.currentImage++;                                        //images ist nach 8 sekunden nicht 0 sondern 1
      this.currentImage = this.currentImage % this.images.length  // 3/3  Rest 0
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10)

    }, 8000);
  }
}
