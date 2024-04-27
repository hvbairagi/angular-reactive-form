import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  flushMicrotasks,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        el = fixture.debugElement;
        component = fixture.componentInstance;
      });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-testing');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain(
  //     'rf app is running!'
  //   );
  // });

  it('should render a button with text subscribe', () => {
    component.isSubscribed = false;
    fixture.detectChanges();
    const btnElements = el.queryAll(By.css('.subscribe'));
    // component.btnText = 'Subscribe';
    expect(btnElements[0].nativeElement.textContent.trim()).toBe('Subscribe');
    expect(btnElements[0].nativeElement.disabled).toBeFalse();
  });

  // it('should render a button with text subscribe and button should be disabled after click', (done: DoneFn) => {
  //   component.isSubscribed = false;
  //   fixture.detectChanges();
  //   let btnElements = el.queryAll(By.css('.subscribe'));
  //   // component.btnText = 'Subscribe';
  //   btnElements[0].nativeElement.click();
  //   setTimeout(() => {
  //      console.log('some other test case');
  //   }, 8000);
  //   setTimeout(() => {
  //     fixture.detectChanges();
  //     btnElements = el.queryAll(By.css('.subscribe'));
  //     expect(btnElements[0].nativeElement.textContent.trim()).toBe(
  //       'Subscribed'
  //     );
  //     expect(btnElements[0].nativeElement.disabled).toBeTrue();
  //     done();
  //   }, 1000);
  // });

  it('should render a button with text subscribe and button should be disabled after click', fakeAsync((
    done: DoneFn
  ) => {
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElements = el.queryAll(By.css('.subscribe'));
    // component.btnText = 'Subscribe';
    btnElements[0].nativeElement.click();
    setTimeout(() => {
      console.log('some other test case');
    }, 8000);
    setTimeout(() => {
      fixture.detectChanges();
      btnElements = el.queryAll(By.css('.subscribe'));
    }, 1000);

    flush();

    // tick(3000);
    expect(btnElements[0].nativeElement.textContent.trim()).toBe('Subscribed');
    expect(btnElements[0].nativeElement.disabled).toBeTrue();
    // tick(5000);
  }));

  it('should test the promise', fakeAsync(() => {
    let counter = 0;

    setTimeout(() => {
      counter += 2;
    }, 2000);
    setTimeout(() => {
      counter += 3;
    }, 3000);

    Promise.resolve().then(() => {
      counter += 1;
    });
    // flush();

    flushMicrotasks();
    expect(counter).toBe(1);
    tick(2000);
    expect(counter).toBe(3);
    tick(2000);
    expect(counter).toBe(3);
    tick(1000);
    expect(counter).toBe(6);
  }));

  it('should test the observable', fakeAsync(() => {
    let isSubscribed = false;
    let myObs = of(isSubscribed).pipe(delay(1000));
    myObs.subscribe(() => {
      isSubscribed = true;
    });
    tick(1000);
    expect(isSubscribed).toBeTrue();
  }));
});
