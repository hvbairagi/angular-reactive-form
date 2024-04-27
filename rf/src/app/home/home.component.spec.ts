import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [HomeComponent],
  //   }).compileComponents();

  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // This will fail as the compilecomponents method returns a Promise
  // so the test will be executed before this promise is resolved
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [HomeComponent],
  //   })
  //     .compileComponents()
  //     .then(() => {
  //       fixture = TestBed.createComponent(HomeComponent);
  //       component = fixture.componentInstance;
  //     });
  // });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct contents', () => {
    let pElements = el.queryAll(By.css('p'));
    expect(pElements[0].nativeElement.textContent).toBe('home works!');

    let buttonElements = el.queryAll(By.css('.btn'));
    expect(buttonElements[0].nativeElement.disabled).toBeTrue();

    let imageElements = el.queryAll(By.css('img'));
    expect(imageElements[0].nativeElement.src).toBe('http://imgsrc.com/123');

    component.title = 'Harsh';
    fixture.detectChanges();
    let textElements = el.queryAll(By.css('.title'));
    expect(textElements[0].nativeElement.textContent).toBe('Harsh');
  });
});
