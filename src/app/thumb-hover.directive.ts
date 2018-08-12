import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appThumbHover]'
})
export class ThumbHoverDirective {

  constructor(private elementRef:ElementRef) { 
   console.log(this.elementRef);
   this.elementRef.nativeElement.style.backgroundColor="red";
  }

}
