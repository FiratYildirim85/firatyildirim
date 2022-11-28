import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firatyil';
  images = ['beach.jpg', 'girl.jpg', 'maldives.jpg'];
  currentImage = 0
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {

    setInterval(() =>{
      this.currentImage++;                                        //images ist nach 8 sekunden nicht 0 sondern 1
      this.currentImage = this.currentImage % this.images.length  // 3/3  Rest 0
      this.showImage = false;

      setTimeout(()=>{
        this.showImage = true;
      },10)
    
    }, 8000);
  }

}
