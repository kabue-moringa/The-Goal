import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikeThrough]'
})
export class StrikeThroughDirective {

  constructor(private elem: ElementRef) {}

  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:typedef
  @HostListener('click') onClicks(){
    // tslint:disable-next-line:quotemark
    this.textDeco("line-through");
  }
  // tslint:disable-next-line:typedef
  @HostListener('dblclick') onDoubleClicks(){
    // tslint:disable-next-line:quotemark
    this.textDeco( "None" );
  }

  // tslint:disable-next-line:typedef
  private textDeco(action: string){
    this.elem.nativeElement.style.textDecoration = action;

  }
}


