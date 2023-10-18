import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgNotFound]'
})
export class ImgNotFoundDirective {
  @Input('ImgNotFound') ImgNotFound = '';
  constructor(private elementImg : ElementRef ) { }
  @HostListener ('error')
  onError():void{
    // this.elementImg.nativeElement.src = "https://material.angular.io/assets/img/examples/shiba2.jpg"
    this.elementImg.nativeElement.src = "https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg"

  }

}
