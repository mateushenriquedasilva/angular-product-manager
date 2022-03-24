import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  // mudar a cor do elemento nativo
  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = "rgb(227, 94, 107)"
  }

}