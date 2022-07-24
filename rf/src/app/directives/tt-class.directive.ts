import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTtClass]',
})
export class TtClassDirective implements OnInit {
  @Input() appTtClass: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add(this.appTtClass);
  }
}
