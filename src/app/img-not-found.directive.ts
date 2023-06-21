import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgNotFound]'
})
export class ImgNotFoundDirective {

  constructor(private elementImg : ElementRef ) { }
  @HostListener ('error')
  onError():void{
    this.elementImg.nativeElement.src = "https://material.angular.io/assets/img/examples/shiba2.jpg"
  } 
}
