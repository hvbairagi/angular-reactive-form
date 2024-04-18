import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasic]',
})
export class BasicDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // this is not good practise to directly access the DOM
    // the is not secure
    // insead use Renderer2
    const elStyle = this.elementRef.nativeElement.style;
    elStyle.color = 'green';
    elStyle.fontSize = '22px';
  }
}
