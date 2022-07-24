import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input() tooltip: string;

  elTooltip: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.elTooltip) {
      this.showHint();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.elTooltip) {
      this.removeHint();
    }
  }

  showHint() {
    this.elTooltip = this.renderer.createElement('span');
    const text = this.renderer.createText(this.tooltip);
    this.renderer.appendChild(this.elTooltip, text);

    this.renderer.appendChild(document.body, this.elTooltip);
    // this.renderer.addClass(this.elTooltip, 'tooltip');

    let hostPosition = this.elementRef.nativeElement.getBoundingClientRect();
    let toolTipPosition = this.elTooltip.getBoundingClientRect();

    let top = hostPosition.bottom + 10;
    let left = hostPosition.left;

    this.renderer.setStyle(this.elTooltip, 'top', `${top}px`);
    this.renderer.setStyle(this.elTooltip, 'left', `${left}px`);
  }

  removeHint() {
    this.renderer.removeClass(this.elTooltip, 'tooltip');
    this.renderer.removeChild(document.body, this.elTooltip);
    this.elTooltip = null;
  }
}
