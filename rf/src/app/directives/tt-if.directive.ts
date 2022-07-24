import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  OnInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appTtIf]',
})
export class TtIfDirective implements OnInit {
  _ttIf: boolean;

  @Input()
  set appTtIf(condition) {
    this._ttIf = condition;
    this._updateView();
  }

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit(): void {}

  _updateView() {
    if (this._ttIf) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
